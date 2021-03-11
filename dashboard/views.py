from django.shortcuts import render, redirect, reverse, get_object_or_404
from django.contrib import messages
from django.contrib.auth.decorators import login_required
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
            items = items.filter(
                category__name__in=categories, month__name__in=months)\
                .order_by('name')
            categories = Category.objects.filter(name__in=categories)
            months = Month.objects.filter(name__in=months)

    context = {
        'items': items,
        'current_category': categories,
        'current_month': months,
    }

    return render(request, 'dashboard/dashboard.html', context)


@login_required
def dashboard_management(request):
    """ A view to return the dashboard management page """
    if not request.user.is_superuser:
        messages.error(request, 'Sorry, this page is only viewable by admin.')
        return redirect(reverse('dashboard'))

    items = Item.objects.all()
    categories = None

    if request.GET:
        if 'category' in request.GET:
            categories = request.GET['category'].split(',')
            items = items.filter(
                category__name__in=categories).order_by('name')
            categories = Category.objects.filter(name__in=categories)

    context = {
        'items': items,
        'current_category': categories,
    }

    return render(request, 'dashboard/dashboard_management.html', context)


@login_required
def add_item(request):
    """Add an item to the dashboard"""
    if not request.user.is_superuser:
        messages.error(request, 'Sorry, this page is only viewable by admin.')
        return redirect(reverse('dashboard'))

    if request.method == 'POST':
        form = ItemForm(request.POST)
        if form.is_valid():
            item = form.save()
            messages.success(request, 'Successfully added item!')
            return redirect(reverse(
                'dashboard_management') + '?category=' + str(item.category))
        else:
            messages.error(
                request, 'Failed to add item. Please check the form is valid.')
    else:
        form = ItemForm()

    template = 'dashboard/add_item.html'
    context = {
        'form': form,
    }

    return render(request, template, context)


@login_required
def edit_item(request, item_id):
    """Edit an item in the dashboard"""
    if not request.user.is_superuser:
        messages.error(request, 'Sorry, this page is only viewable by admin.')
        return redirect(reverse('dashboard'))

    item = get_object_or_404(Item, pk=item_id)
    if request.method == 'POST':
        form = ItemForm(request.POST, instance=item)
        if form.is_valid():
            item = form.save()
            messages.success(request, 'Successfully updated item!')
            return redirect(reverse(
                'dashboard_management') + '?category=' + str(item.category))
        else:
            messages.error(
                request, 'Failed to update item.\
                    Please check the form is valid.')
    else:
        form = ItemForm(instance=item)
        messages.info(request, f'You are editing {item.name}')

    template = 'dashboard/edit_item.html'
    context = {
        'form': form,
        'item': item,
    }

    return render(request, template, context)


@login_required
def delete_item(request, item_id):
    if not request.user.is_superuser:
        messages.error(request, 'Sorry, this page is only viewable by admin.')
        return redirect(reverse('dashboard'))

    """Delete an item in the dashboard"""
    item = get_object_or_404(Item, pk=item_id)
    item.delete()
    messages.success(request, 'Item deleted!')
    return redirect(reverse(
        'dashboard_management') + '?category=' + str(item.category))
