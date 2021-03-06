from django.contrib.auth.decorators import login_required
from django.shortcuts import render
from .models import Recipe, Month, Quantity

# Create your views here.


@login_required
def recipes(request):
    """ A view to return the recipe page, showing current month only """

    recipes = Recipe.objects.all()
    quantities = Quantity.objects.all()
    months = None

    if request.GET:
        if 'month' in request.GET:
            months = request.GET['month'].split(',')
            recipes = recipes.filter(month__name__in=months).order_by('name')
            months = Month.objects.filter(name__in=months)

    context = {
        'recipes': recipes,
        'quantities': quantities,
        'current_month': months,
    }

    return render(request, 'recipes/recipes.html', context)
