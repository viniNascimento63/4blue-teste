from django.contrib import admin
from django.urls import path, include

urlpatterns = [
    path('admin/', admin.site.urls),

    # rotas da API do chatbot
    path('api/', include('chatbot.urls')),
]
