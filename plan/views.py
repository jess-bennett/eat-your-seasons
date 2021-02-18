from django.shortcuts import render

# Create your views here.

def plan(request):
    """ A view to return the index page """
    return render(request, 'plan/plan.html')