from django.urls import path
from . import views


app_name = 'membership'
urlpatterns = [
    path('', views.membership, name='membership'),
    path('create_subscription/', views.create_customer_and_subscription,
         name='create_subscription'
         ),
]
