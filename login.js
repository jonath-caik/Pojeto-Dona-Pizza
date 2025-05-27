// script.js
document.addEventListener('DOMContentLoaded', () => {
  // Elementos
  const themeToggle = document.getElementById('theme-toggle');
  const body = document.body;
  const hamburger = document.querySelector('.hamburger');
  const nav = document.querySelector('.nav');

  // Verificar tema salvo
  const savedTheme = localStorage.getItem('theme');
  const isDark = savedTheme === 'dark';

  // Aplicar tema inicial
  if (isDark) {
    body.classList.add('dark');
    if (themeToggle) themeToggle.checked = true;
  }

  // Listener para toggle de tema
  if (themeToggle) {
    themeToggle.addEventListener('change', () => {
      const isDark = themeToggle.checked;
      body.classList.toggle('dark', isDark);
      localStorage.setItem('theme', isDark ? 'dark' : 'light');
    });
  }

  // Listener para menu hamburguer
  if (hamburger && nav) {
    hamburger.addEventListener('click', () => {
      nav.classList.toggle('active');
    });
  }

  // Sincronizar entre abas
  window.addEventListener('storage', (event) => {
    if (event.key === 'theme') {
      const isDark = event.newValue === 'dark';
      body.classList.toggle('dark', isDark);
      if (themeToggle) themeToggle.checked = isDark;
    }
  });
});

document.addEventListener("DOMContentLoaded", function () {
  const formLogin = document.querySelector("form");

  formLogin.addEventListener("submit", function (e) {
    e.preventDefault();

    const email = document.querySelector("input[type='email']").value.trim();
    const senha = document.querySelector("input[type='password']").value.trim();

    const usuarios = JSON.parse(localStorage.getItem("usuarios")) || [];

    const usuarioValido = usuarios.find(
      usuario => usuario.email === email && usuario.senha === senha
    );

    if (usuarioValido) {
      alert(`Bem-vindo, ${usuarioValido.nome}!`);
      // Aqui você pode redirecionar para o cardápio, por exemplo:
      window.location.href = "CARDAPIO.html";
    } else {
      alert("Email ou senha incorretos.");
    }
  });
});

