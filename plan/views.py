from django.contrib.auth.decorators import login_required
from django.contrib import messages
from django.shortcuts import render, redirect
from .models import Plan, Week
from recipes.models import Month, Recipe
from membership.models import User


@login_required
def plan(request):
    """ A view to return the plan page """

    plans = Plan.objects.all()
    months = None
    weeks = None
    recipes = Recipe.objects.all()
    user = User.objects.all()

    if request.user.subscription:

        if request.GET:
            if 'month' in request.GET:
                months = request.GET['month'].split(',')
                weeks = request.GET['week'].split(',')
                quantity = request.GET.get('quantity', 'four')
                current_week = request.GET.get('week', '')
                plans = plans.filter(
                    month__name__in=months, week__name__in=weeks)
                recipe_ids = plans.filter(
                    month__name__in=months, week__name__in=weeks).\
                    values_list('recipe')
                recipes = recipes.filter(pk__in=recipe_ids).order_by('name')
                months = Month.objects.filter(name__in=months)
                weeks = Week.objects.filter(name__in=weeks)

        context = {
            'plans': plans,
            'current_month': months,
            'current_week': current_week,
            'recipes': recipes,
            'quantity': quantity,
        }

        return render(request, 'plan/plan.html', context)

    else:
        messages.error(
            request, 'Sorry, you need to be a Silver or\
            Gold member to access the meal plans.')
        return redirect('membership:membership')
