var usuarioRegistrada = {
  "nombre": 'Maria',
  "password": '1234',
  "saldo": 200,
  "deuda": 0
}

var welcomeLabel = document.getElementById('bienvenido');

window.onload = function () {
  welcomeLabel.innerHTML = 'Bienvenida ' + usuarioRegistrada.nombre;
}