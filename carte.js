//Chrono
var duree = 900;
var progression = 20;

function t(){
  var secondes = duree;
  var minutes = 0;
  var delai = 0;

  if(secondes <0){
    alert("Le temps imparti est écoulé.");
    document.location.href='acceuil.php';
  }
  else{
    if(secondes > 59){
      minutes = Math.floor(secondes / 60);
      secondes = secondes - minutes * 60;
    }
    if(secondes < 10){
      secondes = "0" + secondes;
    }
    if(minutes < 10){
      minutes = "0" + minutes;
    }
    document.getElementById('compteur').value = minutes + ":" + secondes;
  }
  duree = duree - 1;
}
delai = window.setInterval("t()",1000);

function redirection(){
  var confirmation = confirm('Voulez-vous abandonner la partie en cours ?');
  if (confirmation){
    document.location.href='acceuil.php';
  }
}

//Reglage du volume de la musique de fond
function changeVolume() {
	var audio = document.getElementById("son");
	var audioVolume = document.getElementById("volume");

	audio.volume = audioVolume.value;
}

//Evolution de la barre de progression
function increment(progres) {
  var evolution = document.getElementsByClassName('progres')[0];
  var valeur = document.getElementsByClassName('valeur')[0];
  progression += progres;
  evolution.style.width = progression+"%";
  valeur.innerHTML = progression+" %";
};
increment(10);
