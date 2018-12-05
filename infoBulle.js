var i=false; // La variable i nous dit si la bulle est visible ou non

function move(e) {
  if(i) {  // Si la bulle est visible, on calcul en temps reel sa position ideale
    if(document.documentElement.clientWidth>0) {
      document.getElementById("curseur").style.left=20+event.x+document.documentElement.scrollLeft+"px";
      document.getElementById("curseur").style.top=10+event.y+document.documentElement.scrollTop+"px";
    }
    else {
      document.getElementById("curseur").style.left=20+event.x+document.body.scrollLeft+"px";
      document.getElementById("curseur").style.top=10+event.y+document.body.scrollTop+"px";
    }
  }
}

function montre(text) {
  if(i==false) {
    document.getElementById("curseur").style.visibility="visible"; // Si il est caché on le rend visible.
    document.getElementById("curseur").innerHTML = text; // on copie notre texte dans l'élément html
    i=true;
  }
}

function cache() {
  if(i==true) {
    document.getElementById("curseur").style.visibility="hidden"; // Si la bulle est visible on la cache
    i=false;
  }
}
document.onmousemove=move; // dès que la souris bouge, on appelle la fonction move pour mettre à jour la position de la bulle.
