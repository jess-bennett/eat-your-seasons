# Generated by Django 3.1.5 on 2021-02-11 15:57

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('dashboard', '0002_auto_20210211_1442'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='item',
            name='month',
        ),
        migrations.AddField(
            model_name='item',
            name='month',
            field=models.ManyToManyField(to='dashboard.Month'),
        ),
    ]
