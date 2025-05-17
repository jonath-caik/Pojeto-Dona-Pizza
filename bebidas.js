const modo = document.getElementById('botao-tema')

modo.addEventListener('change', () => {
  document.body.classList.toggle('dark')
})

const hamburger = document.querySelector('.hamburger');
const nav = document.querySelector('.nav');

hamburger.addEventListener('click', () => {nav.classList.toggle('active');});