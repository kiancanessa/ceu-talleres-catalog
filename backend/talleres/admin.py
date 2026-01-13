from django.contrib import admin
from .models import Taller

@admin.register(Taller)
class TallerAdmin(admin.ModelAdmin):
    list_display = ['nombre', 'categoria', 'fecha_inicio', 'created_at']
    list_filter = ['categoria', 'fecha_inicio']
    search_fields = ['nombre', 'descripcion']
    ordering = ['-fecha_inicio']