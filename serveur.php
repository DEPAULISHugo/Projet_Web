<?php

include("objet.class.php");

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
  return $objet;
}

if (isset($_GET['id'])){
  echo getObjetFromDB($_GET['id'])->toString();
}

/*echo getObjetFromDB(0)->toString();*/

/*if (isset($_SESSION['id']) && !(empty($_SESSION['id']))){
  $link = pg_connect("port=5432 dbname=postgis_24_sample user=postgres password=postgres");
  echo "<p>Connexion établie</p>";
  $idObjet = $_SESSION["id"];
  $requete = "SELECT srid, auth_name FROM spatial_ref_sys LIMIT 20";
  if ($result = pg_query($link, $requete)) {
    while ($row = pg_fetch_row($result)) {
      echo "Auteur: $row[0]  E-mail: $row[1]";
      echo "<br />\n";
    }
  }
}*/
?>
