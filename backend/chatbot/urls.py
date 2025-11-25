from django.urls import path
from .views.api import enviar_mensagem, historico

urlpatterns = [
    path("enviar/", enviar_mensagem),
    path("historico/<str:user_id>/", historico),
]