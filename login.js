
const modo = document.getElementById('botao-tema') //Modo dark

modo.addEventListener('change', () => {
  document.body.classList.toggle('dark')
})

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

