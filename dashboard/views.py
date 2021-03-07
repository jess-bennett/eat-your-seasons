from django.shortcuts import render, redirect, reverse, get_object_or_404
from django.contrib import messages
from .models import Item, Category, Month
from .forms import ItemForm

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


def add_item(request):
    """Add an item to the dashboard"""
    if request.method == 'POST':
        form = ItemForm(request.POST)
        if form.is_valid():
            form.save()
            messages.success(request, 'Successfully added item!')
            return redirect(reverse('add_item'))
        else:
            messages.error(request, 'Failed to add item. Please check the form is valid.')
    else:
        form = ItemForm()

    template = 'dashboard/add_item.html'
    context = {
        'form': form,
    }

    return render(request, template, context)
