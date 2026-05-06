# Desafio Login

Projeto desenvolvido conforme o enunciado da atividade.

## Regras implementadas
- Vetor de usuários com id, nome, email, senha e expirado
- Validação de login:
  - Credenciais incorretas (email ou senha)
  - Credenciais expiradas
  - Login com sucesso

## Testes
1. Sucesso
2. Credencial expirada
3. Usuário não encontrado
4. Senha incorreta

## Como executar

npm test

ou

node tests/login.test.js
