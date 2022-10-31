from django.urls import path
from .views import *

urlpatterns = [
    
    path('user/', views.register_user, name="user"),
    path('pantry/', views.register_pantry, name="pantry"),
    path('recipe/', views.register_recipe, name="recipe"),
    path('favourites/', views.register_favourites, name="favourites"),
    path('fooditem/', views.register_fooditem, name="fooditem"),
    path('categories/', views.register_categories, name="categories"),
    path('Constitute/', views.register_constitute, name="constitute"),    
]
