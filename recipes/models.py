from django.db import models


# Create your models here.
class Category(models.Model):

    class Meta:
        verbose_name_plural = 'Categories'

    name = models.CharField(max_length=254)
    friendly_name = models.CharField(max_length=254)

    def __str__(self):
        return self.name

    def get_friendly_name(self):
        return self.friendly_name


class Month(models.Model):
    name = models.CharField(max_length=254)

    def __str__(self):
        return self.name


class Step(models.Model):
    name = models.CharField(max_length=254)

    def __str__(self):
        return self.name


class Ingredient(models.Model):
    name = models.CharField(max_length=254)

    def __str__(self):
        return self.name


class Recipe(models.Model):
    category = models.ForeignKey(
        'Category', null=True, blank=True, on_delete=models.SET_NULL)
    month = models.ManyToManyField(Month)
    name = models.CharField(max_length=254)
    notes = models.CharField(max_length=254)
    image = models.CharField(max_length=254)
    isfrozen = models.CharField(max_length=254)
    ingredients = models.ManyToManyField('Ingredient', through='Quantity')
    steps = models.ManyToManyField(Step)

    def __str__(self):
        return self.name


class Quantity(models.Model):

    class Meta:
        verbose_name_plural = 'Quantities'

    recipe = models.ForeignKey(
        'Recipe', null=True, blank=True, on_delete=models.SET_NULL)
    ingredients = models.ForeignKey('Ingredient', on_delete=models.CASCADE)
    for_2 = models.CharField(max_length=254)
    for_4 = models.CharField(max_length=254)
    for_8 = models.CharField(max_length=254)

    def __str__(self):
        return self.name
