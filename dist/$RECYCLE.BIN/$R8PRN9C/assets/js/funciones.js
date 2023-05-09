/*
✔️- Crea un nuevo archivo de nombre funciones.js.
✔️- Crea una función en JavaScript que permita validar todos los campos del formulario de
contacto al momento de hacer clic en el botón de procesamiento. 
Se debe indicar qué campos están vacíos.
✔️ - Es fundamental que enlaces este nuevo archivo al documento HTML respectivo.
✔️ - Si bien llamarás al archivo JavaScript desde un solo archivo, es conveniente que todos los
documentos del proyecto llamen a este archivo */

const formulario = document.getElementById("formulario").addEventListener('submit', validar_datos);
function validar_datos(e) {
  e.preventDefault();
  let nombre = document.getElementById("nombre").value;
  if (nombre.length == 0) {
    alert('Debe Ingresar nombre');
  }
  let apellido = document.getElementById('apellido').value;
  if (apellido.length == 0) {
    alert('Debe Ingresar Apellido');
  }
  let email = document.getElementById('correo').value;
  if (email.length == 0) {
    alert('Debe Ingresar un email');
  }
  let mensaje = document.getElementById('mensaje').value;
  if (mensaje.length == 0) {
    alert('Debe Ingresar un mensaje');
  }
  return;
  this.submit();
}