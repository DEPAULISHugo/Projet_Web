//Affichage de la carte
var carte = L.map('macarte').setView([16.165, -61.5], 10);
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
  maxZoom: 19,
  attribution: ' <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(carte);

//Gestion des objets
var listLayers = [];

for (var i = 0 ; i < 19 ; i++){
  listLayers[i] = new L.LayerGroup();
  /*carte.addLayer(listLayers[i]);*/
}
carte.addLayer(listLayers[0]);
var listObjets = [];
var listObjetsPossedes = [];
var objetUtilise = null;
var pseudo = window.location.search.split("=")[1];

function getObjetByID(id){
  var ajax = new XMLHttpRequest();
  ajax.open('GET', 'serveur.php/?id='+id);
  ajax.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
  ajax.addEventListener('load',  function () {
    var objet = JSON.parse(ajax.response);
    var newObjet = new Objet(objet.id, objet.name, objet.latitude, objet.longitude, objet.minZoom, objet.icone, objet.texte);
    listObjets[listObjets.length] = newObjet;
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
    this.code = null;
    this.texteDebloque = null;
    this.iconMap = L.icon({
      iconUrl: this.icone,
      shadowUrl: 'shadow.png',

      iconSize:     [50, 50], // size of the icon
      shadowSize:   [50, 50], // size of the shadow
      iconAnchor:   [25, 25], // point of the icon which will correspond to marker's location
      shadowAnchor: [25, 25],  // the same for the shadow
      popupAnchor:  [0, -25] // point from which the popup should open relative to the iconAnchor
    });
  this.marker = L.marker([this.lat, this.lng], {icon: this.iconMap});
  }
  afficherObjet(){
    this.marker.bindPopup(this.texte);
    this.marker.addTo(listLayers[this.minZoom - 1]).on("click", markerOnClick);
    this.marker.on("mouseover", markerMouseOver);
    this.marker.on("mouseout", markerMouseOut);
  }
  retirerObjet(){
    listLayers[this.minZoom - 1].removeLayer(this.marker);
  }
  recupererObjet(){
    increment(10);
    this.retirerObjet();
    if (this.id == 0){
      getObjetByID(2);
      this.icone = "code1.png";
    }
    else if (this.id == 2){
      getObjetByID(4);
      this.icone = "code2.png";
    }
    else if (this.id == 4){
      getObjetByID(6);
      this.icone = "carte.png";
    }
    this.retirerObjet();
    listObjetsPossedes[listObjetsPossedes.length] = this;
    var cadre = document.getElementById("boite"+listObjetsPossedes.length);
    cadre.innerHTML = '<img src="'+this.icone+'" class=imageObjets alt="Oups !">';
    cadre.addEventListener("click", function(){
      var idObjet = listObjetsPossedes[this.id.charAt(5) - 1].id;
      if (objetUtilise == null){
        objetUtilise = idObjet;
        this.style.backgroundColor = "rgb(0, 98, 115)";
      }
      else if (objetUtilise == idObjet){
        objetUtilise = null;
        this.style.backgroundColor = "white";
      }
      else{
        var ancienCadre = getCadreObjetUtilise();
        ancienCadre.style.backgroundColor = "white";
        objetUtilise = idObjet;
        this.style.backgroundColor = "rgb(0, 98, 115)";
      }
    });
    if (this.id == 6){
       finDeJeu();
    }
  }
  debloquerObjet(clickedMarker){
    this.idBloquant = null;
    clickedMarker.bindPopup(this.texteDebloque).openPopup();
    var cadreObjetUtilise = getCadreObjetUtilise();
    cadreObjetUtilise.style.backgroundColor = "white";
    objetUtilise = null;
  }
  action() {
    /*Recherche de ce qui pourrait bloquer l'objet : autre objet ou code*/
    var ajax = new XMLHttpRequest();
    ajax.open('GET', 'serveur.php/?idBloque='+this.id);
    ajax.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
    ajax.addEventListener('load',  function () {
      var response = JSON.parse(ajax.response);
      if (response.idBloque != -1) {
        /*L'objet est bien bloqué par quelque chose*/
        if (response.type == "objet"){
          /*L'objet est bloqué par un autre objet*/
          listObjets[response.idBloque].idBloquant = response.idBloquant;
          listObjets[response.idBloque].texteDebloque = response.texteDebloque;
          getObjetByID(response.idBloquant);
        }
        else if (response.type == "code"){
          /*L'objet est bloqué par un code*/
          listObjets[response.idBloque].code = response.code;
          listObjets[response.idBloque].texteDebloque = response.texteDebloque;
        }
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
  if (objet.idBloquant == null && objet.code == null){
    /*L'objet n'est bloqué ni par un code ni par un objet, on peut donc le récupérer*/
    objet.recupererObjet();
  }
  else if (objet.idBloquant != null && objet.idBloquant == objetUtilise){
    /*L'objet est bloqué, mais on a l'objet pour le débloquer*/
    objet.debloquerObjet(clickedMarker);
  }
  else if (objet.code != null){
    /*L'objet est bloqué par code*/
    var formulaire = '<input type="text" name="code" id="code'+objet.id+'"><button type="button" value="'+objet.id+'" name="'+objet.id+'" id="valider">Valider</button>';
    clickedMarker.bindPopup(formulaire).openPopup();
    var buttonValider = document.getElementById("valider");
    buttonValider.addEventListener("click", function(){
      var idObjet = this.value;
      var objet = listObjets[idObjet];
      var codeEntre = document.getElementById("code"+idObjet).value;
      if (codeEntre == objet.code){
        objet.code = null;
        objet.marker.bindPopup(objet.texteDebloque).openPopup();
      }else {
        markerOnClick(e);
      }
    });
  }
}

function markerMouseOver(e) {
  var clickedMarker = e.target;
  var objet = getObjetByMarker(clickedMarker);
  clickedMarker.openPopup();
  if (objet.vu == false) {
    objet.vu = true;
    objet.action();
  }
}

function markerMouseOut(e) {
  var clickedMarker = e.target;
  var objet = getObjetByMarker(clickedMarker);
  if (clickedMarker._popup._content.indexOf("<input") == -1){
    clickedMarker.closePopup();
  }
}

function getObjetByMarker(marker){
  for (var i = 0 ; i < listObjets.length ; i++) {
    if (listObjets[i].lat == marker._latlng.lat && listObjets[i].lng == marker._latlng.lng){
      return listObjets[i];
    }
  }
}

function getCadreObjetUtilise(){
  var id;
  for (var i = 0 ; i < listObjetsPossedes.length ; i++){
    if (objetUtilise == listObjetsPossedes[i].id){
      id = i;
    }
  }
  var cadreObjetUtilise = document.getElementById("boite"+(id+1));
  return cadreObjetUtilise;
}

function finDeJeu(){
  var time = document.getElementById('compteur').value;
  time = time.split(":");
  var minutes = 14 - time[0];
  var secondes = 60 - time[1];
  if(secondes < 10){
    secondes = "0" + secondes;
  }
  if(minutes < 10){
    minutes = "0" + minutes;
  }
  var temps = "00:" + minutes + ":" + secondes;
  var ajax = new XMLHttpRequest();
  ajax.open('GET', 'serveur.php/?pseudo='+pseudo+'&&temps='+temps);
  ajax.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
  ajax.addEventListener('load',  function () {
  });
  ajax.send('pseudo='+pseudo+'&&temps='+temps);
  alert("Bravo ! Tu as terminé la Mission Papillon !");
  document.location.href='acceuil.php';
}

getObjetByID(0);
