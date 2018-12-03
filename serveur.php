<?php

include("objet.class.php");
include("lienObjet.class.php");
include("codeObjet.class.php");

function getObjetFromDB($id) {
  $link = pg_connect("host=localhost port=5432 dbname=projet user=postgres password=postgres");
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
  $link = pg_connect("host=localhost port=5432 dbname=projet user=postgres password=postgres");
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
  return $lienObjet;
}

function getCodeFromDB($idBloque) {
  $link = pg_connect("host=localhost port=5432 dbname=projet user=postgres password=postgres");
  /*if(!$link){
    die("Erreur de connexion");
  }else{
    echo "<p>Connexion établie</p>";
  }*/
  $requete = "SELECT idBloque, code, texteDebloque FROM codeobjets WHERE idBloque=".$idBloque;
  $result = pg_query($link, $requete);
  $codeObjet = new CodeObjet (-1, -1, null);
  while ($row = pg_fetch_row($result)) {
    $codeObjet = new CodeObjet ($row[0], $row[1], $row[2]);
  }
  return $codeObjet;
}

function updateScoreFromDB($pseudo, $temps) {
  $link = pg_connect("host=localhost port=5432 dbname=projet user=postgres password=postgres");
  /*if(!$link){
    die("Erreur de connexion");
  }else{
    echo "<p>Connexion établie</p>";
  }*/
  $requete = "INSERT INTO classement (identifiant, temps) VALUES ('".$pseudo."', '".$temps."')";
  $result = pg_query($link, $requete);
  return '{"resulat"="Ok"}';
}

if (isset($_GET['id'])){
  echo getObjetFromDB($_GET['id']);
}

if (isset($_GET['idBloque'])){
  $newLienObjet = getObjetBloquantFromDB($_GET['idBloque']);
  if ($newLienObjet->idBloque != -1){
    /*Il existe un objet bloquant*/
    echo $newLienObjet->toString();
  }else {
    /*Il n'y a pas d'objet bloquant, on cherche donc si l'objet est bloqué par un code*/
    echo getCodeFromDB($_GET['idBloque'])->toString();
  }
}

if (isset($_GET['pseudo']) && isset($_GET['temps'])) {
  $pseudo = $_GET['pseudo'];
  $temps = $_GET['temps'];
  echo updateScoreFromDB($pseudo, $temps);
}

?>
