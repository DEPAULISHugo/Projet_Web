<?php

include("objet.class.php");

function getObjetFromDB($id) {
  $link = pg_connect("port=5432 dbname=projet user=postgres password=postgres");
  echo "<p>Connexion établie</p>";
  $idObjet = $_SESSION["id"];
  $requete = "SELECT * FROM objet WHERE id={$id}";
  if ($result = pg_query($link, $requete)) {
    while ($row = pg_fetch_row($result)) {
      echo new Objet(row[0], row[1], row[2], row[3], row[4], row[5]);
    }
  }
}


$_SESSION['id'] = 1;

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
