from django.shortcuts import render
from .models import Plan, Week
from recipes.models import Month

# Create your views here.


def plan(request):
    """ A view to return the plan page """

    plans = Plan.objects.all()
    months = None
    weeks = None

    if request.GET:
        if 'month' in request.GET:
            months = request.GET['month'].split(',')
            weeks = request.GET['week'].split(',')
            plans = plans.filter(month__name__in=months, week__name__in=weeks)
            months = Month.objects.filter(name__in=months)
            weeks = Week.objects.filter(name__in=weeks)

    context = {
        'plans': plans,
        'current_month': months,
        'current_week': weeks,
    }

    return render(request, 'plan/plan.html', context)
