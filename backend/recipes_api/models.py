from django.db import models

# Create your models here.
class User(models.Model):
    first_name = models.CharField(max_length=100)
    last_name = models.CharField(max_length=100)
    email = models.EmailField(unique=True)
    password = models.CharField(max_length=30, null=True)
    is_authenticated = models.BooleanField(default=True)

class Favorite(models.Model):
    identifier = models.IntegerField(unique=True)
    image = models.CharField(max_length=2048)
    name = models.CharField(max_length=300)

class Pantry(models.Model):
    name = models.CharField(max_length=30)
    quantity = models.IntegerField() 
