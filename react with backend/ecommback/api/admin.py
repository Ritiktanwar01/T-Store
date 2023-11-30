from django.contrib import admin
from .models import *
# Register your models here.
admin.site.register(product)
admin.site.register(user)
admin.site.register(tokens)
admin.site.register(cart)