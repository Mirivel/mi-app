function mostrarMensaje() {
  let nombre = document.getElementById("nombre").value;
  let mensaje = document.getElementById("mensajeTexto").value;

  document.getElementById("resultado").innerHTML =
    "Hola " + nombre + ", recibimos tu mensaje: " + mensaje;
}function cambiarMensaje() {
  document.getElementById("mensaje").innerHTML = "¡Mi primera función con JavaScript!";
}
