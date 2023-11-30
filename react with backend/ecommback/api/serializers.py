from rest_framework import serializers
from .models import *

class serializerproduct(serializers.ModelSerializer):
    class Meta:
        model = product
        fields = "__all__"

class serializeruser(serializers.ModelSerializer):
    class Meta:
        model = user
        fields = "__all__"