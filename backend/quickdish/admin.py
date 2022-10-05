from django.contrib import admin
from .models import Customer


class CustomerAdmin(admin.ModelAdmin):
    list_display = ("first_name", "last_name","email",)
    search_fields= ("first_name", "last_name","email",)

admin.site.register(Customer,CustomerAdmin)
