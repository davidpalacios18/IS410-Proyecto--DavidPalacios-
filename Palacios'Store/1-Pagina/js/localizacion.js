class localizacion{
    
    constructor(callback){
        if(navigator.geolocation){
            //Obtener Ubicacion
            navigator.geolocation.getCurrentPosition(
                (position)=>{
                    this.latitude = position.coords.latitude;
                    this.longitude = position.coords.longitude; 
                    
                    callback();
                });
        }else{
            alert("Tu navegador no soporta geolocalizacion!")
        }
    }
}