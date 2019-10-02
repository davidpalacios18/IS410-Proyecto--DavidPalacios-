/*Llenado de los select*/
for (var i = 1; i <= 31; i++) {
    $('#dia_N').append(`<option value="${i}">${i}</option>`);
}
var meses = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre','Octubre', 'Noviembre', 'Diciembre'];
for(var i = 0; i < meses.length; i++){
    $('#mes_N').append(`<option value="${meses[i]}">${meses[i]}</option>`);
}
var fecha = new Date();
var anio = fecha.getFullYear();
for(var i = anio; i >= (anio-100); i--){
  $('#anio_N').append(`<option value="${i}">${i}</option>`);
}

/*Funciones para validar el formulario*/
function validarNombre(){
  let texto = /^([A-ZÁÉÍÓÚÑ]{1}[a-zñáéíóú]+[\s]*)+$/;
  return texto.test();
}

function validarEmail(correo){
  let email = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return email.test(correo);
}

function validarContrasenia(contrasenia){
/* 
La contraseña debe tener entre 8 y 16 caracteres.
Al menos un dígito, al menos una minúscula y al menos una mayúscula.
NO puede tener otros símbolos.
*/
let password = /^(?=\w*\d)(?=\w*[A-Z])(?=\w*[a-z])\S{8,16}$/;
return password.test(contrasenia);
}

function marcarInput(id, validar){
  if(validar !=true){
    document.getElementById(id).classList.remove('is-valid');
    document.getElementById(id).classList.add('is-invalid');
  }else{
    document.getElementById(id).classList.remove('is-invalid');
    document.getElementById(id).classList.add('is-valid');
  }
}

var campos = [
    {campo:'nombreUsuario', valido:false},
    {campo:'apellidoUsuario', valido:false},
    {campo:'dia_N', valido:false},
    {campo:'mes_N', valido:false},
    {campo:'anio_N', valido:false},
    {campo:'correo', valido:false},
    {campo:'contrasenia', valido:false},
];

function crearCuentaUsuario(){
  let nombre = validarNombre($('#nombreUsuario').val());
  let apellido = validarNombre($('#apellidoUsuario').val());
  let email = validarEmail($('#correo').val());
  let password = validarContrasenia($('#contrasenia').val());


}