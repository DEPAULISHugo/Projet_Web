//Chrono
var startTime = 0
var start = 0
var end = 0
var diff = 0
var timerID = 0

window.onload = t;
var duree = 900;

function t(){
  var secondes = duree;
  var minutes = 0;
  var delai = 0;

  if(secondes <0){

  }
  else{
    if(secondes > 59){
      minutes = Math.floor(secondes / 60);
      secondes = secondes - minutes * 60;
      console.log(minutes);
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
  delai = window.setTimeout("t()",999);
}

function chronoStart(){
	duree = 900;
	chrono()
}

function redirection(){
  var confirmation = confirm('Voulez-vous abandonner la partie en cours ?')
  if (confirmation){
    document.location.href='acceuil.html'
  }
}

//Gestion du volume de la musique de fond
function changeVolume() {
	var audio = document.getElementById("son");
	var audioVolume = document.getElementById("Volume");

	audio.volume = audioVolume.value;
}
