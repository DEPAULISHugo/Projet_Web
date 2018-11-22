//Chrono
var startTime = 0
var start = 0
var end = 0
var diff = 0
var timerID = 0

window.onload = chronoStart;

function chrono(){
	end = new Date()
	diff = end - start
	diff = new Date(diff)
	var msec = diff.getMilliseconds()
	var sec = diff.getSeconds()
	var min = diff.getMinutes()
	var hr = diff.getHours()-1
	if (min < 10){
		min = "0" + min
	}
	if (sec < 10){
		sec = "0" + sec
	}
	if(msec < 10){
		msec = "00" +msec
	}
	else if(msec < 100){
		msec = "0" +msec
	}
	document.getElementById("chrono").value = hr + ":" + min + ":" + sec + ":" + msec
	timerID = setTimeout("chrono()", 10)
}

function chronoStart(){
	start = new Date()
	chrono()
}

function redirection(){
  var confirmation = confirm('Voulez-vous abandonner la partie en cours ?')
  if (confirmation){ //S'il décide de quitter la partie ..
    document.location.href='acceuil.html' //Le joueur est renvoyé vers la page d'acceuil
  }
  else { //S'il veut reprendre la partie
    start = new Date()-diff
    start = new Date(start)
    chrono() //Le chrono repart où il s'était arrété
  }
}

//Gestion du volume de la musique de fond
function changeVolume() {
	var audio = document.getElementById("son");
	var audioVolume = document.getElementById("Volume");

	audio.volume = audioVolume.value;
}
