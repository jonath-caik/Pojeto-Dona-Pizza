const modo = document.getElementById('botao-tema') //Modo dark

modo.addEventListener('change', () => {
  document.body.classList.toggle('dark')
})

const hamburger = document.querySelector('.hamburger'); //NAV-bAR
const nav = document.querySelector('.nav');

hamburger.addEventListener('click', () => {
  nav.classList.toggle('active');
});


