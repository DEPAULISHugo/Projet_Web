var listObjets = [];

function getObjetByID(id){
  var ajax = new XMLHttpRequest();
  ajax.open('GET', 'serveur.php/?id='+id);
  ajax.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
  ajax.addEventListener('load',  function () {
    var objet = JSON.parse(ajax.response);
    listObjets[listObjets.length] = new Objet(objet.id, objet.name, objet.latitude, objet.longitude, objet.minZoom, objet.icone);
    console.log(objet);
  });
  ajax.send("id="+id);
}

class Objet {
  constructor (id, name, lat, lng, minZoom, icone) {
    this.id = id;
    this.name = name;
    this.lat = lat;
    this.lng = lng;
    this.minZoom = minZoom;
    this.icone = icone;
  }
  afficherObjet(){
    var marker = L.marker([this.lat, this.lng]).addTo(layerMarkers);
  }
}
