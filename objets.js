//Affichage de la carte
var carte = L.map('macarte').setView([16.165, -61.5], 10);
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
  maxZoom: 19,
  attribution: ' <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(carte);

var listLayers = [];

for (var i = 0 ; i < 19 ; i++){
  listLayers[i] = new L.LayerGroup();
  carte.addLayer(listLayers[i]);
}

var listObjets = [];
var listObjetsPossedes = [];
var objetUtilise = null;

function getObjetByID(id){
  var ajax = new XMLHttpRequest();
  ajax.open('GET', 'serveur.php/?id='+id);
  ajax.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
  ajax.addEventListener('load',  function () {
    var objet = JSON.parse(ajax.response);
    var newObjet = new Objet(objet.id, objet.name, objet.latitude, objet.longitude, objet.minZoom, objet.icone, objet.texte);
    listObjets[listObjets.length] = newObjet;
    console.log(objet);
    newObjet.afficherObjet();
  });
  ajax.send("id="+id);
}

class Objet {
  constructor (id, name, lat, lng, minZoom, icone, texte) {
    this.id = id;
    this.name = name;
    this.lat = lat;
    this.lng = lng;
    this.minZoom = minZoom;
    this.icone = icone;
    this.texte = texte;
    this.vu = false;
    this.idBloquant = null;
    this.texteDebloque = null;
    this.iconMap = L.icon({
      iconUrl: this.icone,
      shadowUrl: 'shadow.png',

      iconSize:     [50, 50], // size of the icon
      shadowSize:   [50, 50], // size of the shadow
      iconAnchor:   [25, 25], // point of the icon which will correspond to marker's location
      shadowAnchor: [25, 25],  // the same for the shadow
      popupAnchor:  [0, 0] // point from which the popup should open relative to the iconAnchor
    });
  this.marker = L.marker([this.lat, this.lng], {icon: this.iconMap});
  }
  afficherObjet(){
    this.marker.addTo(listLayers[this.minZoom - 1]).on("click", markerOnClick);
  }
  retirerObjet(){
    listLayers[this.minZoom - 1].removeLayer(this.marker);
  }
  recupererObjet(){
    this.retirerObjet();
    listObjetsPossedes[listObjetsPossedes.length] = this;
    var cadre = document.getElementById("boite"+listObjetsPossedes.length);
    cadre.innerHTML = '<img src="'+this.icone+'" class=imageObjets alt="Oups !">';
    cadre.addEventListener("click", function(){
      var idObjet = listObjetsPossedes[this.id.charAt(5) - 1].id;
      if (objetUtilise == null){
        objetUtilise = idObjet;
        this.style.backgroundColor = "grey";
      }
      else if (objetUtilise == idObjet){
        objetUtilise = null;
        this.style.backgroundColor = "white";
      }
      else{
        var id;
        for (var i = 0 ; i < listObjetsPossedes.length ; i++){
          if (objetUtilise == listObjetsPossedes[i].id){
            id = i;
          }
        }
        var ancienCadre = document.getElementById("boite"+(i+1));
        alert("boite"+(i+1));
        ancienCadre.style.backgroundColor = "white";
        objetUtilise = idObjet;
        this.style.backgroundColor = "grey";
      }

    });
  }
  debloquerObjet(clickedMarker){
    this.idBloquant = null;
    clickedMarker.bindPopup(this.texteDebloque).openPopup();
  }
  action() {
    /*Recherche d'un objet bloquant*/
    var ajax = new XMLHttpRequest();
    ajax.open('GET', 'serveur.php/?idBloque='+this.id);
    ajax.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
    ajax.addEventListener('load',  function () {
      var lienObjet = JSON.parse(ajax.response);
      if (lienObjet.idBloquant != -1) {
        listObjets[lienObjet.idBloque].idBloquant = lienObjet.idBloquant;
        listObjets[lienObjet.idBloque].texteDebloque = lienObjet.texteDebloque;
        getObjetByID(lienObjet.idBloquant);
        listObjets[listObjets.length - 1].afficherObjet();
      }else{
      }
    });
    ajax.send("idBloque="+this.id);
  }
}

carte.on('zoomend', function() {
  for (var i = 0 ; i < 19 ; i++){
    if (carte.getZoom() > i){
        carte.addLayer(listLayers[i]);
      }
      else {
        carte.removeLayer(listLayers[i]);
      }
  }
});

function markerOnClick(e) {
  var clickedMarker = e.target;
  var objet = getObjetByMarker(clickedMarker);
  if (objet.vu == false) {
    objet.vu = true;
    clickedMarker.bindPopup(objet.texte).openPopup();
    objet.action();
  }
  else{
    if (objet.idBloquant == null){
      objet.recupererObjet();
    }
    else if (objet.idBloquant == objetUtilise){
      objet.debloquerObjet(clickedMarker);
    }
  }
}

function getObjetByMarker(marker){
  for (var i = 0 ; i < listObjets.length ; i++) {
    if (listObjets[i].lat == marker._latlng.lat && listObjets[i].lng == marker._latlng.lng){
      return listObjets[i];
    }
  }
}

getObjetByID(0);