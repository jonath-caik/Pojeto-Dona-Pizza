document.getElementById('feedbackForm').addEventListener('submit', function(e) {
    e.preventDefault();
    const nome = document.getElementById('nome').value;
    const sobrenome = document.getElementById('sobrenome').value;
    const email = document.getElementById('email').value;
    const assunto = document.getElementById('assunto').value;
    const pedido = document.getElementById('pedido').value;
    const mensagem = document.getElementById('mensagem').value;

    const texto = `Olá Dona Pizza!%0ARecebi um feedback:%0A🧑 Nome: ${nome} ${sobrenome}%0A📧 Email: ${email}%0A📝 Assunto: ${assunto}%0A📦 Pedido: ${pedido}%0A💬 Mensagem: ${mensagem}`;
    const url = `https://wa.me/5571987483645?text=${texto}`;

    window.open(url, '_blank');
  });

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


document.querySelector('.hamburger').addEventListener('click', function() {
    document.querySelector('.nav').classList.toggle('active');
});

  const hamburger = document.querySelector('.hamburger'); // NAV-BAR
  const nav = document.querySelector('.nav');

  hamburger.addEventListener('click', () => {
    nav.classList.toggle('active');
});

const textarea = document.getElementById('mensagem'); //Inicio contador
const contador = document.getElementById('contador');

textarea.addEventListener('input', function() {
  const caracteresDigitados = textarea.value.length;
  const caracteresMax = textarea.getAttribute('maxlength');
  contador.textContent = `${caracteresDigitados}/${caracteresMax}`;
});