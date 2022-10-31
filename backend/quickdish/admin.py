from django.contrib import admin
from .models import User


class UserAdmin(admin.ModelAdmin):
    list_display = ("first_name", "last_name","email","password",)
    search_fields= ("first_name", "last_name","email","password",)
admin.site.register(User,UserAdmin)

# class PantryAdmin(admin.ModelAdmin):
#     list_display = ("name","quantity","image",)
#     search_fields = ("name","quantity","image",)
# admin.site.register(Pantry,PantryAdmin)

# class RecipeAdmin(admin.ModelAdmin):
#     list_display = ("name","directions","ingredients",)
#     search_fields = ("name","directions","ingredients",)
# admin.site.register(Recipe,RecipeAdmin)


# class CategoriesAdmin(admin.ModelAdmin):
#     list_display = ("category","image",)
#     search_fields= ("category","image",)
# admin.site.register(Categories,CategoriesAdmin)

# class FooditemAdmin(admin.ModelAdmin):
#     list_display = ("category",)
#     search_fields= ("category",)
# admin.site.register(Fooditem,FooditemAdmin)

# class FavouritesAdmin(admin.ModelAdmin):
#     list_display = ("name",)
#     search_fields= ("name",)
# admin.site.register(Favourites,FavouritesAdmin)
# # INCOMPLETE

# class IngredientsAdmin(admin.ModelAdmin):
#     list_display = ("ingredients_name",)
#     search_fields= ("ingredients_name",)
# admin.site.register(Ingredients,IngredientsAdmin)
