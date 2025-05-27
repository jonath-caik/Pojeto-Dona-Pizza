 // script.js
document.addEventListener('DOMContentLoaded', () => {
    const themeToggle = document.getElementById('theme-toggle');
    const body = document.body;

    // Verifica o tema salvo no localStorage
    const savedTheme = localStorage.getItem('theme');
    const isDark = savedTheme === 'dark';

    // Aplica o tema e a posição do botão
    if (isDark) {
        body.classList.add('dark-mode');
        themeToggle.checked = true;
    }

    // Alterna o tema quando o botão é clicado
    themeToggle.addEventListener('change', () => {
        const isDark = themeToggle.checked;
        body.classList.toggle('dark-mode', isDark);
        localStorage.setItem('theme', isDark ? 'dark' : 'light');
    });

    // Sincroniza entre abas (opcional)
    window.addEventListener('storage', (event) => {
        if (event.key === 'theme') {
            const isDark = event.newValue === 'dark';
            body.classList.toggle('dark-mode', isDark);
            themeToggle.checked = isDark;
        }
    });
});



const hamburger = document.querySelector('.hamburger'); //NAV-bAR
const nav = document.querySelector('.nav');

hamburger.addEventListener('click', () => {
  nav.classList.toggle('active');
});
  document.addEventListener("DOMContentLoaded", function () {
  const formCadastro = document.getElementById("form-cadastro");

  formCadastro.addEventListener("submit", function (e) {
    e.preventDefault();

    const nome = document.getElementById("nome").value.trim();
    const email = document.getElementById("email").value.trim();
    const senha = document.getElementById("senha").value.trim();

    if (!nome || !email || !senha) {
      alert("Preencha todos os campos.");
      return;
    }

    // Pega os usuários salvos
    let usuarios = JSON.parse(localStorage.getItem("usuarios")) || [];

    // Verifica se já existe o email
    const jaExiste = usuarios.some(usuario => usuario.email === email);

    if (jaExiste) {
      alert("Este e-mail já está cadastrado.");
      return;
    }

    // Adiciona novo usuário
    usuarios.push({ nome, email, senha });

    // Salva de volta
    localStorage.setItem("usuarios", JSON.stringify(usuarios));

    alert("Cadastro realizado com sucesso!");
    window.location.href = "login.html";
  });
})

