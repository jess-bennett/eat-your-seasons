from django.shortcuts import render
from djstripe.models import Product

# Create your views here.


def membership(request):
    """ A view to return the membership page """
    return render(request, 'membership/membership.html', {
        'products': Product.objects.all()
    })