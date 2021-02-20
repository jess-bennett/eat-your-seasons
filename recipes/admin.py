from django.contrib import admin
from .models import Recipe, Category, Month, Ingredient, Step, Quantity

# Register your models here.


class RecipeAdmin(admin.ModelAdmin):
    list_display = (
        'name',
        'category',
        'image',
    )

    ordering = ('month', 'category', 'name')


admin.site.register(Recipe, RecipeAdmin)
admin.site.register(Category)
admin.site.register(Month)
admin.site.register(Ingredient)
admin.site.register(Step)
admin.site.register(Quantity)
