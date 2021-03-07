from django.urls import path
from . import views

urlpatterns = [
    path('', views.dashboard, name='dashboard'),
    path('dashboard_management/', views.dashboard_management, name='dashboard_management'),
    path('dashboard_management/add/', views.add_item, name='add_item'),
    path('dashboard_management/edit/<int:item_id>/', views.edit_item, name='edit_item'),
    path('dashboard_management/delete/<int:item_id>/', views.delete_item, name='delete_item'),
]