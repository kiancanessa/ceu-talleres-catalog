from django.db import models
from django.core.exceptions import ValidationError
from django.utils import timezone

class Taller(models.Model):
    CATEGORIA_CHOICES = [
        ('desarrollo', 'Desarrollo'),
        ('diseno', 'Diseño'),
        ('data', 'Data'),
    ]
    
    nombre = models.CharField(max_length=200)
    descripcion = models.TextField()
    fecha_inicio = models.DateTimeField()
    categoria = models.CharField(max_length=50, choices=CATEGORIA_CHOICES)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)
    
    class Meta:
        ordering = ['-fecha_inicio']
        verbose_name = 'Taller'
        verbose_name_plural = 'Talleres'
    
    def clean(self):
        if self.fecha_inicio and self.fecha_inicio < timezone.now():
            raise ValidationError({'fecha_inicio': 'La fecha no puede ser en el pasado'})
        
        if not self.nombre or not self.nombre.strip():
            raise ValidationError({'nombre': 'El nombre no puede estar vacío'})
    
    def save(self, *args, **kwargs):
        self.full_clean()
        super().save(*args, **kwargs)
    
    def __str__(self):
        return f"{self.nombre} - {self.categoria}"