from django.http import JsonResponse
from django.views.decorators.csrf import csrf_exempt
import json
from ..models import Mensagem
from django.utils import timezone

@csrf_exempt
def enviar_mensagem(request):
    if request.method != "POST":
        return JsonResponse({"error": "Método não permitido"}, status=405)
    
    data = json.loads(request.body)

    usuario = data.get("user")
    texto = data.get("message")

    Mensagem.objects.create(usuario=usuario, texto=texto, destinatario=usuario)

    resposta = f"Obrigado por seu contato usuário {usuario}. Em breve responderemos."

    Mensagem.objects.create(usuario="BOT", texto=resposta, destinatario=usuario)

    return JsonResponse({"status": "ok", "reply": resposta})

def historico(request, user_id):
    mensagens = Mensagem.objects.filter(
        destinatario=user_id
    ).order_by("id")

    data = [
        {
            "id": m.id,
            "usuario": m.usuario,
            "texto": m.texto,
            "criado_em": timezone.localtime(m.criado_em).strftime("%d/%m/%Y %H:%M"),
        }
        for m in mensagens
    ]

    return JsonResponse(data, safe=False)