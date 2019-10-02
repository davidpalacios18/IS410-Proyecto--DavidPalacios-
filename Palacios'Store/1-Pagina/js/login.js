/*Funciones para validar el formulario*/
function validarEmail(correo){
    let email = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return email.test(correo);
}

function validarNombre(){
  let texto = /^([A-ZÁÉÍÓÚÑ]{1}[a-zñáéíóú]+[\s]*)+$/;
  return texto.test();
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

function iniciarSesion() {
  let correo = validarEmail($('#correo').val());
  let contrasenia = validarContrasenia($('#password').val());
  
  if(correo != true){
    document.getElementById('correo').classList.remove('is-valid');
    document.getElementById('correo').classList.add('is-invalid');
    $('#msjEmail').html('Correo electrónico incorrecto');
    return false;
  }else{
    document.getElementById('correo').classList.remove('is-invalid');
    document.getElementById('correo').classList.add('is-valid');
    $('#msjEmail').html('');
  }

  if(contrasenia != true){
    document.getElementById('password').classList.remove('is-valid');
    document.getElementById('password').classList.add('is-invalid');
    $('#msjPassword').html('Contraseña incorrecta');
    return false;
  }else{
    document.getElementById('password').classList.remove('is-invalid');
    document.getElementById('password').classList.add('is-valid');
    $('#msjPassword').html('');
  }

  //console.log("Valor correo: " + correo);
  //console.log("Valor contraseña: " + contrasenia);
};
