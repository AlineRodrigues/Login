// tests/login.test.js

const { fazerLogin } = require('../src/services/auth');

console.log("1) Sucesso:", fazerLogin("aline@email.com", "123456"));
console.log("2) Credencial expirada:", fazerLogin("joao@email.com", "senha123"));
console.log("3) Usuário não encontrado:", fazerLogin("naoexiste@email.com", "123"));
console.log("4) Senha incorreta:", fazerLogin("maria@email.com", "senhaErrada"));
