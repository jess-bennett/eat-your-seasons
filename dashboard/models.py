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


class Item(models.Model):
    category = models.ForeignKey(
        'Category', null=True, blank=True, on_delete=models.SET_NULL)
    month = models.ManyToManyField(Month)
    name = models.CharField(max_length=254)

    def __str__(self):
        return self.name
