$(document).ready(function(){
  esconderCategorias();
});

function esconderCategorias(){
  $('#perfil-ususario').hide(1000);
  $('#categoria-hogar').hide(1000);
  $('#categoria-salud').hide(1000);
  $('#categoria-deporte').hide(1000);
  $('#categoria-tecnologia').hide(1000);
  $('#categoria-accesorios').hide(1000);
  $('#categoria-moda').hide(1000);
  $('#categoria-belleza').hide(1000);
  $('#categoria-mantenimiento').hide(1000);
  $('#estadisticas').hide(1000);
};
/*
function mostrarPerfil(){
  $('#contenido-Principal').hide(2000);
  $('#perfil-ususario').show(2000);
}*/
function mostrarCategoria(categoria){
    /*var jsLang = 'prototype';*/
    switch (categoria) {
    	case 'perfil':
        esconderCategorias();
        $('#contenido-Principal').hide(1000);
        $('#perfil-ususario').show(1000);
    		break;
    	case 'hogar':
        esconderCategorias();
        $('#contenido-Principal').hide(1000);
        $('#categoria-hogar').show(1000);
        break;
    	case 'salud':
        esconderCategorias();
        $('#contenido-Principal').hide(1000);
        $('#categoria-salud').show(1000);
        break;
    	case 'deporte':
        esconderCategorias();
        $('#contenido-Principal').hide(1000);
        $('#categoria-deporte').show(1000);
    		break;
      case 'tecnologia':
        esconderCategorias();
        $('#contenido-Principal').hide(1000);
        $('#categoria-tecnologia').show(1000);
      	break;
      case 'accesorio':
        esconderCategorias();
        $('#contenido-Principal').hide(1000);
        $('#categoria-accesorios').show(1000);
      	break;
      case 'moda':
        esconderCategorias();
        $('#contenido-Principal').hide(1000);
        $('#categoria-moda').show(1000);
        break;
      case 'belleza':
        esconderCategorias();
        $('#contenido-Principal').hide(1000);
        $('#categoria-belleza').show(1000);
        break;
      case 'mantenimiento':
        esconderCategorias();
        $('#contenido-Principal').hide(1000);
        $('#categoria-mantenimiento').show(1000);
        break;
      case 'contenido-Principal':
        esconderCategorias()
        $('#contenido-Principal').show(1000);
        break;
      case 'estadistica':
        esconderCategorias();
        $('#contenido-Principal').hide(1000);
        $('#estadisticas').show(1000);
        break;
    	default:
    		alert('Nobody sucks!');
    }
}

/*Swiper*/
var swiper = new Swiper('.swiper-container', {
      effect: 'coverflow',
      grabCursor: true,
      centeredSlides: true,
      slidesPerView: 'auto',
      coverflowEffect: {
        rotate: 50,
        stretch: 0,
        depth: 100,
        modifier: 1,
        slideShadows : true,
      },
      pagination: {
        el: '.swiper-pagination',
      },
});
/*
categoria-hogar
categoria-salud
categoria-deporte
categoria-tecnologia
categoria-accesorios
categoria-ropa
categoria-mantenimiento
*/

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
for(var i = anio; i >= (anio-100); i--)
  $('#anio_N').append(`<option value="${i}">${i}</option>`);
