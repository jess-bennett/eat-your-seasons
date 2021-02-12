from django.shortcuts import render
from .models import Recipe, Category, Month

# Create your views here.


def recipes(request):
    """ A view to return the recipe page """

    recipes = Recipe.objects.all()
    months = None

    if request.GET:
        if 'month' in request.GET:
            months = request.GET['month'].split(',')
            recipes = recipes.filter(month__name__in=months).order_by('name')
            months = Month.objects.filter(name__in=months)

    context = {
        'recipes': recipes,
        'current_month': months,
    }

    return render(request, 'recipes/recipes.html', context)
