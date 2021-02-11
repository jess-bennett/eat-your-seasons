from django.shortcuts import render

# Create your views here.

def recipes(request):
    """ A view to return the recipe page """
    return render(request, 'recipes/recipes.html')