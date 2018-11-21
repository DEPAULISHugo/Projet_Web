function getObjetByID(id){
  var ajax = new XMLHttpRequest();
  ajax.open('GET', 'serveur.php/?id='+id);
  ajax.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
  ajax.addEventListener('load',  function () {
    var objet = JSON.parse(ajax.response);
    console.log(objet);
  });
  ajax.send("id="+id);
}

var test = getObjetByID(1);
