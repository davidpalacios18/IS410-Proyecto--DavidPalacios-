function initMap(){
    var ubicacion = new localizacion(()=>{

        var options = {
            center: {
                lat: ubicacion.latitude,
                lng: ubicacion.longitude
            },
            zoom: 15
        }

        var map = document.getElementById('map');
        
        var mapa = new google.maps.Map(map, options);
    });

}