// src/services/auth.js

const usuarios = [
  { id: 1, nome: "Aline", email: "aline@email.com", senha: "123456", expirado: false },
  { id: 2, nome: "João", email: "joao@email.com", senha: "senha123", expirado: true },
  { id: 3, nome: "Maria", email: "maria@email.com", senha: "abc123", expirado: false }
];

function fazerLogin(email, senha) {
  const usuario = usuarios.find(u => u.email === email);

  if (!usuario || usuario.senha !== senha) {
    return "Credenciais incorretas";
  }

  if (usuario.expirado) {
    return "Renove suas credenciais";
  }

  return "Login realizado com sucesso";
}

module.exports = { fazerLogin };
