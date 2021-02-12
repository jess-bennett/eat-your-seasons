from django.shortcuts import render
from .models import Item, Category, Month

# Create your views here.


def dashboard(request):
    """ A view to return the dashboard page """

    items = Item.objects.all()
    categories = None
    months = None

    if request.GET:
        if 'category' in request.GET:
            categories = request.GET['category'].split(',')
            months = request.GET['month'].split(',')
            items = items.filter(category__name__in=categories, month__name__in=months).order_by('name')
            categories = Category.objects.filter(name__in=categories)
            months = Month.objects.filter(name__in=months)

    context = {
        'items': items,
        'current_category': categories,
        'current_month': months,
    }

    return render(request, 'dashboard/dashboard.html', context)
