
#  Projeto Chatbot — Django + React

Este é um projeto simples de chat com dois usuários e respostas automáticas, feito com **Django no backend** e **React (Vite) no frontend**.

As mensagens são armazenadas em um banco SQLite e existe uma página de histórico por usuário.

---

##  📦 Tecnologias usadas

###  Backend

- Python 3

- Django 5

- SQLite (padrão)

- Ambiente virtual `venv`

###  Frontend

- React + Vite

- Bootstrap 5

- Bootstrap Icons

- React Router DOM

---

##  🚀 Como rodar o projeto
Abaixo estão os passos completos para alguém testar o projeto do zero.

#  1️⃣ Clonar o repositório
```bash
git clone https://github.com/viniNascimento63/4blue-teste.git
cd 4blue-teste
```
A  estrutura  esperada  é:
- 4blue-teste/
	-  backend/
	-  frontend/

# 2️⃣  Backend (Django)

  Entre  na  pasta  do  backend:
```bash
cd backend
```
### ✔ Criar o ambiente virtual
```bash
python -m venv venv
```
### ✔ Ativar o ambiente virtual
Windows:
```bash
venv\Scripts\activate
```
Linux/Mac:
```bash
source venv/bin/activate
```
Você deve ver `(venv)` no início do terminal.

### ✔ Instalar Django
```bash
pip install django
```

### ✔ Criar banco de dados e tabelas
```bash
python manage.py makemigrations
python manage.py migrate
```
### ✔ Rodar o servidor Django
```bash
python manage.py runserver
```
O backend sobe em:
```bash
http://127.0.0.1:8000/
```
Rotas principais:
```
POST /api/enviar/               -> Envia mensagem
GET  /api/historico/<user_id>/  -> Histórico do usuário
```

# 3️⃣ Frontend (React)
Abra outro terminal e entre na pasta do frontend:
```bash
cd frontend
```
### ✔ Instalar dependências
```bash
npm install
```
### ✔ Rodar o Vite
```bash
npm run dev
```
A aplicação abre em:
```
http://localhost:5173/
```
# 4️⃣ Como testar a aplicação
### 1. Acesse o frontend pelo navegador

→ Escolha o usuário A ou B no dropdown do cabeçalho  
→ Entre na página `/chatpage/A` ou `/chatpage/B`  
→ Envie mensagens

### 2. O backend salva:

-   mensagens do usuário
-   mensagens automáticas do bot
-   cada registro armazenado com hora correta (fuso America/Sao_Paulo)

### 3. Acesse o histórico:
```bash
http://localhost:5173/historico/A
http://localhost:5173/historico/B
```
# 📌 Notas importantes
### ✔ CORS
Se necessário, instale:
```bash
pip install django-cors-headers
```
E adicione ao `settings.py`:
```bash
INSTALLED_APPS += ["corsheaders"]

MIDDLEWARE = [
    "corsheaders.middleware.CorsMiddleware",
    *MIDDLEWARE,
]

CORS_ALLOW_ALL_ORIGINS = True
```
### ✔ Fuso horário
```bash
TIME_ZONE = "America/Sao_Paulo"
USE_TZ = True
```
O Django salva em UTC e converte ao exibir.

# 📂 Estrutura de pastas (resumo)
```
backend/
    manage.py
    venv/
    db.sqlite3
    teste_chatbot/ (configurações)
    chatbot/
        models.py
        views/
        urls.py

frontend/
    src/
    vite.config.js
    package.json
```
# 🙋 Suporte

Qualquer pessoa que baixar o repositório deve conseguir rodar seguindo esse passo a passo.  
Se algo não funcionar, confirme se o ambiente virtual está ativo e se o backend realmente está rodando em `127.0.0.1:8000`