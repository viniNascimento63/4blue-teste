from django.db import models

class Mensagem(models.Model):
    usuario = models.CharField(max_length=50)
    destinatario = models.CharField(max_length=50, null=True, blank=True)
    texto = models.TextField()
    criado_em = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return f"{self.usuario}: {self.texto[:30]}"
