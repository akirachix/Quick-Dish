import requests
from .models import Favorite, Pantry
from .serializers import UserSerializer, FavoriteSerializer, PantrySerializer
from rest_framework.response import Response
from rest_framework.decorators import api_view


# Create your views here.
@api_view(['POST'])
def register_user(request):
    serializer = UserSerializer(data=request.data)
    if serializer.is_valid():
        serializer.save()
        return Response(serializer.data)
    else:
        return Response(serializer.errors)


@api_view(['GET'])
def fetch_ingredients(request):
    ingredients = requests.get("https://www.themealdb.com/api/json/v1/1/list.php?i=list")
    response = ingredients.json()
    return Response(response)


@api_view(['GET'])
def fetch_categories(request):
    categories = requests.get("https://www.themealdb.com/api/json/v1/1/categories.php")
    response = categories.json()
    return Response(response)


@api_view(['GET'])
def category_recipe(request, meal):
    recipe = requests.get("https://www.themealdb.com/api/json/v1/1/filter.php?c=" + meal)
    response = recipe.json()
    return Response(response)

@api_view(['GET'])
def ingredient_recipe(request, meal):
    recipe = requests.get("https://www.themealdb.com/api/json/v1/1/filter.php?i=" + meal)
    response = recipe.json()
    return Response(response)    


@api_view(['GET'])
def search_recipe(request, meal):
    recipe = requests.get("https://www.themealdb.com/api/json/v1/1/search.php?s=" + meal)
    response = recipe.json()
    return Response(response)


@api_view(['GET'])
def fetch_meal(request, id):
    recipe = requests.get("https://www.themealdb.com/api/json/v1/1/lookup.php?i=" + id)
    response = recipe.json()
    return Response(response)

@api_view(['GET'])
def fetch_meal(request, id):
    recipe = requests.get("https://www.themealdb.com/api/json/v1/1/lookup.php?i=" + id)
    response = recipe.json()
    return Response(response)


@api_view(['GET'])
def fetch_favorites(request):
    favorites = Favorite.objects.all()
    serializer = FavoriteSerializer(favorites, many=True)
    return Response(serializer.data)


@api_view(['POST'])
def add_favorite(request):
    serializer = FavoriteSerializer(data=request.data)
    if serializer.is_valid():
        serializer.save()
        return Response(serializer.data)
    else:
        return Response(serializer.errors)

@api_view(['GET', 'DELETE'])
def remove_favorite(request, id):
    favorite = Favorite.objects.get(pk=id)    

    if request.method == 'GET':
        serializer = FavoriteSerializer(favorite)
        return Response(serializer.data)

    if request.method == 'DELETE':
        favorite.delete()
        return Response('Unliked food!')


@api_view(['GET'])
def fetch_pantry(request):
    pantry = Pantry.objects.all()
    serializer = PantrySerializer(pantry, many=True)
    return Response(serializer.data)


@api_view(['POST'])
def add_pantry(request):
    serializer = PantrySerializer(data=request.data)
    if serializer.is_valid():
        serializer.save()
        return Response(serializer.data)
    else:
        return Response(serializer.errors)        


@api_view(['DELETE'])
def remove_pantry(request, id):
    pantry = Pantry.objects.get(pk=id)
    pantry.delete()
    return Response('Removed food from pantry!')
    