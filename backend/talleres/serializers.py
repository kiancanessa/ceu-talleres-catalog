from rest_framework import serializers
from .models import Taller

class TallerSerializer(serializers.ModelSerializer):
    class Meta:
        model = Taller
        fields = ['id', 'nombre', 'descripcion', 'fecha_inicio', 'categoria', 'created_at', 'updated_at']
        read_only_fields = ['id', 'created_at', 'updated_at']