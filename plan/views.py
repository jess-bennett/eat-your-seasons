from django.shortcuts import render
from .models import Plan, Week
from recipes.models import Month, Recipe

# Create your views here.


def plan(request):
    """ A view to return the plan page """

    plans = Plan.objects.all()
    months = None
    weeks = None
    recipes = Recipe.objects.all()

    if request.GET:
        if 'month' in request.GET:
            months = request.GET['month'].split(',')
            weeks = request.GET['week'].split(',')
            plans = plans.filter(month__name__in=months, week__name__in=weeks)
            recipes = recipes.filter(month__name__in=months).order_by('name')
            months = Month.objects.filter(name__in=months)
            weeks = Week.objects.filter(name__in=weeks)

    context = {
        'plans': plans,
        'current_month': months,
        'current_week': weeks,
        'recipes': recipes,
    }

    return render(request, 'plan/plan.html', context)
