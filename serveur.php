<?php

include("objet.class.php");

function getObjetFromDB($id) {
  $link = pg_connect("host=localhost port=5433 dbname=projet user=postgres password=postgres");
  /*if(!$link){
    die("Erreur de connexion");
  }else{
    echo "<p>Connexion établie</p>";
  }*/
  $requete = "SELECT * FROM objets WHERE id=".$id;
  $result = pg_query($link, $requete);
  if ($result) {
    /*echo "<p>Requête réussie</p>";*/
    while ($row = pg_fetch_row($result)) {
      $objet = new Objet ($row[0], $row[1], $row[2], $row[3], $row[4], $row[5], $row[6]);
    }
  }/*else{
    echo "<p>Requête echouée</p>";
  }*/
  return $objet->toString();
}

function getObjetBloquantFromDB($idBloque) {
  $link = pg_connect("host=localhost port=5433 dbname=projet user=postgres password=postgres");
  /*if(!$link){
    die("Erreur de connexion");
  }else{
    echo "<p>Connexion établie</p>";
  }*/
  $requete = "SELECT idBloque, idBloquant, texteDebloque FROM lienObjets WHERE idBloque=".$idBloque;
  $result = pg_query($link, $requete);
  $lienObjet = new LienObjet (-1, -1, null);
  while ($row = pg_fetch_row($result)) {
    $lienObjet = new LienObjet ($row[0], $row[1], $row[2]);
  }
  return $lienObjet->toString();
}

if (isset($_GET['id'])){
  echo getObjetFromDB($_GET['id']);
}

if (isset($_GET['idBloque'])){
  echo getObjetBloquantFromDB($_GET['idBloque']);
}
?>
