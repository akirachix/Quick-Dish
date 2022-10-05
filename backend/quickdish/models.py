from django.db import models

# Create your models here.
class Customer(models.Model):
    first_name = models.CharField(null=True,max_length=102)
    last_name = models.CharField(null=True,max_length=100)
    email = models.EmailField()
   

# class Ingredients(models.Model):
#     vegetable =models.CharField(null)
#     baking