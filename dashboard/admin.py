from django.contrib import admin
from .models import Item, Category, Month

# Register your models here.


class ItemAdmin(admin.ModelAdmin):
    list_display = (
        'name',
        'category',
        'month'
    )

    ordering = ('month', 'category', 'name')


admin.site.register(Item, ItemAdmin)
admin.site.register(Category)
admin.site.register(Month)
