from django.contrib.auth.decorators import login_required
from django.views.decorators.http import require_POST
from django.db import transaction
from django.shortcuts import render
from djstripe.models import Product

# Create your views here.


@login_required
def membership(request):
    """ A view to return the membership page """
    return render(request, 'membership/membership.html', {
        'products': Product.objects.all().order_by('id')
    })


@login_required
@require_POST
@transaction.atomic
def create_customer_and_subscription(request):
    """
    Create a Stripe Customer and Subscription object and map them onto the User object
    Expects the inbound POST data to look something like this:
    {
        'email': 'cory@saaspegasus.com',
        'payment_method': 'pm_1GGgzaIXTEadrB0y0tthO3UH',
        'plan_id': 'plan_GqvXkzAvxlF0wR',
    }
    """
    # parse request, extract details, and verify assumptions
    request_body = json.loads(request.body.decode('utf-8'))
    email = request_body['email']
    assert request.user.email == email  
    payment_method = request_body['payment_method']
    plan_id = request_body['plan_id']
    stripe.api_key = djstripe_settings.STRIPE_SECRET_KEY

    # first sync payment method to local DB to workaround 
    # https://github.com/dj-stripe/dj-stripe/issues/1125
    payment_method_obj = stripe.PaymentMethod.retrieve(payment_method)
    djstripe.models.PaymentMethod.sync_from_stripe_data(payment_method_obj)

    # create customer objects
    # This creates a new Customer in stripe and attaches the default PaymentMethod in one API call.
    customer = stripe.Customer.create(
      payment_method=payment_method,
      email=email,
      invoice_settings={
        'default_payment_method': payment_method,
      },
    )
    djstripe_customer = djstripe.models.Customer.sync_from_stripe_data(customer)

    # create subscription
    subscription = stripe.Subscription.create(
      customer=customer.id,
      items=[
        {
          'plan': plan_id,
        },
      ],
      expand=['latest_invoice.payment_intent'],
    )
    djstripe_subscription = djstripe.models.Subscription.sync_from_stripe_data(subscription)

    # associate customer and subscription with the user
    request.user.customer = djstripe_customer
    request.user.subscription = djstripe_subscription
    request.user.save()

    # return information back to the front end
    data = {
        'customer': customer,
        'subscription': subscription
    }
    return JsonResponse(
        data=data,
    )