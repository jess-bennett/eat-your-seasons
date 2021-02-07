from django.shortcuts import render
from .models import Item

# Create your views here.

def dashboard(request):
    """ A view to return the dashboard page """

    items = Item.objects.all()

    context = {
        'items': items,
    }

    return render(request, 'dashboard/dashboard.html', context)
