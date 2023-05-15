const body = document.querySelector('.boddy');
const claro = document.querySelector('.claro');
//funcion pra cambiar el fundo del body
claro.addEventListener('click', () => cambio());
function cambio() {
  if (body.style.backgroundColor == 'white') {
    body.style.backgroundColor = 'rgba(0, 0, 0, 0.81)'
    body.style.color = 'white'
  } else {
    body.style.backgroundColor = 'white'
    body.style.color = 'rgba(0, 0, 0, 0.81)'
  }
}

//*************************************************map ********************************************************************

if (navigator.geolocation) {
  navigator.geolocation.getCurrentPosition(sucess, error, options);
} else {
  alert('Los servicios de geolocalizacion no estan disponible')
}

var options = {
  enableHighaccuracy: true,
  timeout: 5000,
  maximuAge: 0
}

function sucess(position) {
  var latitude = position.coords.latitude;
  var longitude = position.coords.longitude;
  //iniciamos el mapa en las cordenadas del usuario
  var map = L.map('map', {
    center: [latitude, longitude], zoom: 16
  });

  //aplicamos las capas
  L.tileLayer('https://tiles.stadiamaps.com/tiles/osm_bright/{z}/{x}/{y}{r}.png').addTo(map);
  var marker = L.marker([43.835726460845414, 4.361334216285879]).bindPopup('Aqui esta la tienda').openPopup().addTo(map);

  //trasamos la ruta 
  var control = L.Routing.control({
    waypoints: [
      L.latLng(latitude, longitude),
      L.latLng(43.835726460845414, 4.361334216285879)
    ],
    language: 'es'
  }).addTo(map);

}

function error() {
  var map = L.map('map', {
    center: [43.835726460845414, 4.361334216285879],
    zoom: 16
  });

  L.tileLayer('https://tiles.stadiamaps.com/tiles/osm_bright/{z}/{x}/{y}{r}.png').addTo(map);
  marker = L.marker([43.835726460845414, 4.361334216285879]).bindPopup('Aqui esta la tienda').openPopup().addTo(map);

}



