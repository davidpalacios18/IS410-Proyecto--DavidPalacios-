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
function validarNombre(palabra){
  let texto = /^([A-ZÁÉÍÓÚÑ]{1}[a-zñáéíóú]+[\s]*)+$/;
  return texto.test(palabra);
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

let fechaC = ['dia_N','mes_N','anio_N'];

function crearCuentaUsuario(){
  let nombre = validarNombre($('#nombreUsuario').val());
  let apellido = validarNombre($('#apellidoUsuario').val());
  let email = validarEmail($('#correo').val());
  let password = validarContrasenia($('#contrasenia').val());

  if(nombre != true){
    document.getElementById('nombreUsuario').classList.remove('is-valid');
    document.getElementById('nombreUsuario').classList.add('is-invalid');
    $('#msjNombre').html('Ingrese el nombre correctamente');
    return false;
  }else{
    document.getElementById('nombreUsuario').classList.remove('is-invalid');
    document.getElementById('nombreUsuario').classList.add('is-valid');
  }
  if(apellido != true){
    document.getElementById('apellidoUsuario').classList.remove('is-valid');
    document.getElementById('apellidoUsuario').classList.add('is-invalid');
    $('#msjApellido').html('Ingrese el apellido correctamente');
    return false;
  }else{
    document.getElementById('apellidoUsuario').classList.remove('is-invalid');
    document.getElementById('apellidoUsuario').classList.add('is-valid');
  }
  if(email != true){
    document.getElementById('correo').classList.remove('is-valid');
    document.getElementById('correo').classList.add('is-invalid');
    $('#msjCorreo').html('Ingrese la dirección de correo electronico correctamente');
    return false;
  }else{
    document.getElementById('correo').classList.remove('is-invalid');
    document.getElementById('correo').classList.add('is-valid');
  }
  if(password != true){
    document.getElementById('contrasenia').classList.remove('is-valid');
    document.getElementById('contrasenia').classList.add('is-invalid');
    $('#msjContrasenia').html("La contraseña debe tener entre 8 y 16 caracteres.<br>Al menos un dígito, al menos una minúscula y al menos una mayúscula.<br>NO puede tener otros símbolos.");
    return false;
  }else{
    document.getElementById('contrasenia').classList.remove('is-invalid');
    document.getElementById('contrasenia').classList.add('is-valid');
  }

  if($('#contraseniaVerificada').val() != ''){
    let password = new RegExp(`${$('#contrasenia').val()}`);
    if(password.test($('#contraseniaVerificada').val()) == true){
      document.getElementById('contraseniaVerificada').classList.remove('is-invalid');
      document.getElementById('contraseniaVerificada').classList.add('is-valid');
    }else{
      document.getElementById('contraseniaVerificada').classList.remove('is-valid');
      document.getElementById('contraseniaVerificada').classList.add('is-invalid');
      $('#msjContraseniaVer').html('Contraseña no coinciden');
      return false;
    }
  }else{
    document.getElementById('contraseniaVerificada').classList.remove('is-valid');
    document.getElementById('contraseniaVerificada').classList.add('is-invalid');
    $('#msjContraseniaVer').html('Contraseña no coinciden');
    return false;
  }

  for(let i=0; i<fechaC.length;i++){
    if($('#'+fechaC[i]).val() ==''){
      document.getElementById(fechaC[i]).classList.remove('is-valid');
      document.getElementById(fechaC[i]).classList.add('is-invalid');
    }else{
      document.getElementById(fechaC[i]).classList.remove('is-invalid');
      document.getElementById(fechaC[i]).classList.add('is-valid');
    }
  }

  let genderInput = document.querySelector('input[type="radio"][name="sexo"]:checked');

  /*Json de los datos del usuario */
  let usuario = {
    nombreUsuario: $('#nombreUsuario').val(),
    apellidoUsuario: $('#apellidoUsuario').val(),
    correo: $('#correo').val(),
    contrasenia:$('#contrasenia').val(),
    genero:(genderInput == null)?'':genderInput.value,
    birthdate:{
      dia: $('#dia_N').val(),
      mes: $('#mes_N').val(),
      anio: $('#anio_N').val()
    }
  };
  console.log(usuario);
}