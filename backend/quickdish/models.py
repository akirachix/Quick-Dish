from django.db import models

# Create your models here.
class User(models.Model):
    first_name = models.CharField(null=True,max_length=30)
    last_name = models.CharField(null=True,max_length=30)
    email = models.EmailField()
    password = models.CharField(null=True,max_length=50)
    is_authenticated = models.BooleanField(default=False)

class Pantry(models.Model):
    # name = models.CharField(max_length=30,null=True)
    name = models.CharField(max_length=50,null=True)
    quantity = models.IntegerField(null=True)
    image = models.ImageField(null=True )    

class Recipe(models.Model):
    name = models.CharField(max_length=200,null=True)
    directions= models.TextField()
    ingredients = models.CharField(max_length=200,null=True)
    time = models.CharField(max_length=5,null=True)
    calories = models.CharField(max_length=5,null=True)
    fat = models.CharField(max_length=5,null=True)
    carbs = models.CharField(max_length=5,null=True)
    proteins = models.CharField(max_length=5,null=True)
    # categories=models.ForeignKey(Categories,on_delete=models.CASCADE)   


    def __str__(self):
        return self.title
        
class Categories(models.Model):
    category = models.CharField(max_length=200,null=True)
    image = models.ImageField(upload_to='category_images')    

class Fooditem(models.Model):
    category = models.ForeignKey(Categories,on_delete=models.CASCADE,related_name='Categories_category')
    recipe = models.ForeignKey(Recipe,on_delete=models.CASCADE,related_name='Recipe_recipe')       
    
class Favourites(models.Model):
    name = models.CharField(max_length=200,null=True)
    image = models.ImageField(upload_to='category_images')

class Ingredients(models.Model):
    ingredients_name = models.CharField(max_length=200,null=True)
