from rest_framework import serializers
from .models import User, Favorite, Pantry

class UserSerializer(serializers.Serializer):
    id = serializers.IntegerField(read_only=True)
    first_name = serializers.CharField(max_length=100)
    last_name = serializers.CharField(max_length=100)
    email = serializers.EmailField()
    password = serializers.CharField(max_length=30)
    is_authenticated = serializers.BooleanField(default=True)

    def create(self, data):
        return User.objects.create(**data)

class FavoriteSerializer(serializers.Serializer): 
    id = serializers.IntegerField(read_only=True)
    identifier = serializers.IntegerField()
    image = serializers.CharField(max_length=2048)
    name = serializers.CharField(max_length=300)

    def create(self, data):
        return Favorite.objects.create(**data)

class PantrySerializer(serializers.Serializer):
    id = serializers.IntegerField(read_only=True)
    name = serializers.CharField(max_length=30)
    quantity = serializers.IntegerField()     


    def create(self, data):
        return Pantry.objects.create(**data)