from django.shortcuts import render
from .models import Item, Category

# Create your views here.

def dashboard(request):
    """ A view to return the dashboard page """

    items = Item.objects.all()
    categories = None

    if request.GET:
        if 'category' in request.GET:
            categories = request.GET['category'].split(',')
            items = items.filter(category__name__in=categories)
            categories = Category.objects.filter(name__in=categories)

    context = {
        'items': items,
    }

    return render(request, 'dashboard/dashboard.html', context)
