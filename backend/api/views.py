from rest_framework import generics, permissions
from rest_framework.response import Response
from knox.models import AuthToken
from .serializers import UserSerializer, RegisterSerializer

# Register API
class RegisterAPI(generics.GenericAPIView):
    serializer_class = RegisterSerializer

    def post(self, request, *args, **kwargs):
        serializer = self.get_serializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        user = serializer.save()
        return Response({
        "user": UserSerializer(user, context=self.get_serializer_context()).data,
        "token": AuthToken.objects.create(user)[1]
        })

# Create your views here.

 
class PantryViewSet(viewsets.ModelViewSet):
    queryset = models.Pantry.objects.all()
    serializer_class= PantrySerializer
 
class RecipeViewSet(viewsets.ModelViewSet):
    queryset = models.Recipe.objects.all()
    serializer_class= RecipeSerializer
 
class FavouritesViewSet(viewsets.ModelViewSet):
    queryset = models.Favourites.objects.all()
    serializer_class= FavouritesSerializer
 
class FooditemViewSet(viewsets.ModelViewSet):
    queryset = models.Fooditem.objects.all()
    serializer_class= FooditemSerializer
 
class CategoriesViewSet(viewsets.ModelViewSet):
    queryset = models.Recipe.objects.all()
    serializer_class= CategoriesSerializer

class IngredientsViewSet(viewsets.ModelViewSet):
    queryset = models.Ingredients.objects.all()
    serializer_class= IngredientsSerializer
 

