from django.shortcuts import render, redirect
import stripe
import json
from django.http import JsonResponse
from djstripe.models import Product
from django.contrib.auth.decorators import login_required

# Create your views here.


@login_required
def membership(request):
    """ A view to return the membership page """
    products = Product.objects.all().order_by('id')
    return render(request, 'membership/membership.html', {
        'products': products
    })
