from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .views import TallerViewSet

router = DefaultRouter()
router.register(r'talleres', TallerViewSet)

urlpatterns = [
    path('api/', include(router.urls)),
]