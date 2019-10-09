//let map = L.map('map').setView([-86.5000000, 15.0000000],13);
/*let latitud = 14.2883000;
let longitud = -87.0721000;

let map = L.map('map').setView([latitud, longitud],8);

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',{
    attribution:'$copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);
*/
window.addEventListener("load", geolocalizar);

function geolocalizar(){
    navigator.geolocation.getCurrentPosition(encontrado, noEncontrado);
}
function encontrado(info){
    let latitud = info.coords.latitude;
    let longitud = info.coords.longitude;

    let map = L.map('map').setView([latitud, longitud],9);

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',{
        attribution:'$copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(map);

    let marker = L.marker([latitud,longitud]).addTo(map);
    
    console.log("Latitud" + latitud);
    console.log("Longitud" + longitud);
    
    
}

function noEncontrado(error){
    console.log('No se encontro la hubicacion');
    
}