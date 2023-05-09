/* Alerta con la fecha actual*/

let dias_escritos = ['domingo', 'lunes', 'martes', 'miercoles', 'jueves', 'viernes', 'sábado'];
let meses_escritos = ['enero', 'febrero', 'marzo', 'abril', 'mayo', 'junio', 'julio', 'agosto', 'septiembre', 'octubre', 'noviembre', 'diciembre'];
function mostrarFecha() {
  let today = new Date();
  let hr = today.getHours();
  let min = today.getMinutes();
  let seg = today.getSeconds();
  let dia_semana = dias_escritos[today.getDay()];
  let day = today.getDate();
  let month = meses_escritos[today.getMonth()];
  let year = today.getFullYear();
  document.getElementById('fecha').innerHTML = "Hoy es " + dia_semana + " " + day + " de " + month + " de " + year + " y son las " + hr + " horas, " + min + " minutos, " + seg + " segundos.";
  console.log(dia_semana, day, month, year, hr, min, seg);
}
setInterval(mostrarFecha, 1000); //callback

/* CONTADOR AÑO NUEVO */

let fin = new Date('01/01/2024 00:00 AM');
let segundos = 1000;
let minutos = segundos * 60;
let horas = minutos * 60;
let dias = horas * 24;
let timer;
function finContador() {
  let ahora = new Date();
  let distance = fin - ahora;
  if (distance < 0) {
    clearInterval(timer);
    let contador = document.getElementById('tiemporestante');
    return;
  }
  let dia = Math.floor(distance / dias);
  let hora = Math.floor(distance % dias / horas);
  let minuto = Math.floor(distance % horas / minutos);
  let segundo = Math.floor(distance % minutos / segundos);
  document.getElementById('tiemporestante').innerHTML = 'Faltan ' + dia + ' dias, ' + minuto + ' minutos y ' + segundo + ' segundos para fin de año.';
}
timer = setInterval(finContador, 1000);