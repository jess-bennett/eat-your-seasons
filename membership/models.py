from django.db import models
from django.contrib.auth.models import AbstractUser
from djstripe.models import Customer, Subscription
from django.utils.functional import cached_property

from djstripe.utils import subscriber_has_active_subscription


class User(AbstractUser):
    customer = models.ForeignKey(
        Customer, null=True, blank=True, on_delete=models.SET_NULL)
    subscription = models.ForeignKey(
        Subscription, null=True, blank=True, on_delete=models.SET_NULL)

    def __str__(self):
        return self.username

    def __unicode__(self):
        return self.username

    @cached_property
    def has_active_subscription(self):
        """Checks if a user has an active subscription."""
        return subscriber_has_active_subscription(self)
