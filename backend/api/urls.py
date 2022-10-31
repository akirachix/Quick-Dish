from .views import RegisterAPI
from django.urls import path
from django.urls import path, include
from rest_framework import routers
from .views import CustomerViewSet,PantryViewSet,RecipeViewSet,CategoriesViewSet,FooditemViewSet,FavouritesViewSet,IngredientsViewSet
 
router = routers.DefaultRouter()
router.register(r"User",UserViewSet)
router.register(r"Pantry", PantryViewSet)
router.register(r"Recipe", RecipeViewSet)
router.register(r"Categories", CategoriesViewSet)
router.register(r"Fooditem", FooditemViewSet)
router.register(r"Favourites", FavouritesViewSet)
router.register(r"Ingredients", IngredientsViewSet)
 
 
urlpatterns = [
   # path("", include(router.urls)),
   path('auth/user', )
    path('api/register/', RegisterAPI.as_view(), name='register'),
]

