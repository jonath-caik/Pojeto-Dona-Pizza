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

const hamburger = document.querySelector('.hamburger');
const nav = document.querySelector('.nav');

hamburger.addEventListener('click', () => {nav.classList.toggle('active');});