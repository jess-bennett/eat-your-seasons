from django.db import models


# Create your models here.
class Day(models.Model):
    name = models.CharField(max_length=254)
    friendly_name = models.CharField(max_length=254)

    def __str__(self):
        return self.name

    def get_friendly_name(self):
        return self.friendly_name


class Week(models.Model):
    name = models.CharField(max_length=254)
    friendly_name = models.CharField(max_length=254)

    def __str__(self):
        return self.name

    def get_friendly_name(self):
        return self.friendly_name


class Plan(models.Model):
    day = models.ForeignKey(
        'Day', null=True, blank=True, on_delete=models.SET_NULL)
    week = models.ForeignKey(
        'Week', null=True, blank=True, on_delete=models.SET_NULL)
    month = models.ForeignKey(
        'recipes.Month', null=True, blank=True, on_delete=models.SET_NULL)
    recipe = models.ForeignKey(
        'recipes.Recipe', null=True, blank=True, on_delete=models.SET_NULL)

    def __str__(self):
        return self.recipe
