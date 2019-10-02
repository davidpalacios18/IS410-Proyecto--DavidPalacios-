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

function crearCuentaVendedor(){
    let nombre = validarNombre($('#nombreEmpresa').val());
    let correo = validarEmail($('#correo').val());
    let password = validarContrasenia($('#contrasenia').val());

    console.log($('#plan').val());

    if($('#plan').val() == ''){
        document.getElementById('nombreEmpresa').classList.remove('is-valid');
        document.getElementById('nombreEmpresa').classList.add('is-invalid');
        $('#msjPlan').html('Ingrese el nombre correctamente');
        return false;
    }else{
        document.getElementById('nombreEmpresa').classList.remove('is-invalid');
        document.getElementById('nombreEmpresa').classList.add('is-valid');
    }

    if(nombre != true){
        document.getElementById('nombreEmpresa').classList.remove('is-valid');
        document.getElementById('nombreEmpresa').classList.add('is-invalid');
        $('#msjNombre').html('Ingrese el nombre correctamente');
        return false;
    }else{
        document.getElementById('nombreEmpresa').classList.remove('is-invalid');
        document.getElementById('nombreEmpresa').classList.add('is-valid');
    }
    if(correo != true){
        document.getElementById('correo').classList.remove('is-valid');
        document.getElementById('correo').classList.add('is-invalid');
        $('#msjCorreo').html('Ingrese la dirección de correo electrónico correctamente');
        return false;
    }else{
        document.getElementById('correo').classList.remove('is-invalid');
        document.getElementById('correo').classList.add('is-valid');
    }
    if(password != true){
        document.getElementById('contrasenia').classList.remove('is-valid');
        document.getElementById('contrasenia').classList.add('is-invalid');
        $('#msjPassword').html('La contraseña debe tener entre 8 y 16 caracteres.<br>Al menos un dígito, al menos una minúscula y al menos una mayúscula.<br>NO puede tener otros símbolos.');
        return false;
    }else{
        document.getElementById('contrasenia').classList.remove('is-invalid');
        document.getElementById('contrasenia').classList.add('is-valid');
    }
    if($('#contraseniaVerif').val() != ''){
        let password = new RegExp(`${$('#contrasenia').val()}`);
        if(password.test($('#contraseniaVerif').val()) == true){
          document.getElementById('contraseniaVerif').classList.remove('is-invalid');
          document.getElementById('contraseniaVerif').classList.add('is-valid');
        }else{
          document.getElementById('contraseniaVerif').classList.remove('is-valid');
          document.getElementById('contraseniaVerif').classList.add('is-invalid');
          $('#msjContraseniaVer').html('Contraseña no coinciden');
          return false;
        }
    }else{
        document.getElementById('contraseniaVerif').classList.remove('is-valid');
        document.getElementById('contraseniaVerif').classList.add('is-invalid');
        $('#msjContraseniaVer').html('Contraseña no coinciden');
        return false;
    }


    console.log("vamos bien");
}