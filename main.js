var usuarioRegistrada = {
  "nombre": 'Maria',
  "password": '1234',
  "saldo": 200,
  "deuda": 0
}
var usuarioInput = document.getElementById('usuarioInput');

var passwordInput = document.getElementById('passwordInput');

var form = document.getElementById('showForm');

var submitbtn = document.getElementById('submitbtn');

var modalButton = document.getElementById('showModal');

var modalText = document.querySelector('.modal-body');



submitbtn.addEventListener('click', function (e) {
  e.preventDefault();
  modalButton.click();
  if (passwordInput.value === '1234' && usuarioInput.value === 'Maria') {
    form.classList.toggle('hide');
    modalText.innerHTML = 'Bienvenida ' + usuarioRegistrada.nombre;
    window.location.href = 'usuario.html';
  } else {
    modalText.innerHTML = 'Usuario o contraseña incorrecta';
  }

});