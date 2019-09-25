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
  