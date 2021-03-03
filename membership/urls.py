from django.urls import path
from . import views


app_name = 'membership'
urlpatterns = [
    path('', views.membership, name='membership'),
    path("create-sub", views.create_sub, name="create sub"),
    path("complete", views.complete, name="complete"),
]
