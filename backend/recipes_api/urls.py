from django.urls import path
from .views import register_user, fetch_ingredients, fetch_categories, category_recipe, ingredient_recipe, search_recipe, fetch_meal, fetch_favorites, add_favorite, remove_favorite

urlpatterns = [
    path('auth/', register_user),
    path('ingredients/', fetch_ingredients),
    path('categories/', fetch_categories),
    path('category/<str:meal>', category_recipe),    
    path('ingredient/<str:meal>', ingredient_recipe),
    path('search/<str:meal>', search_recipe),
    path('meal/<str:id>', fetch_meal),
    path('favorites/', fetch_favorites),
    path('add-favorite/', add_favorite),
    path('remove-favorite/<int:id>', remove_favorite),
]
