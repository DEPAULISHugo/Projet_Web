<?php

$_SESSION['id'] = 1;

if (isset($_SESSION['id']) && !(empty($_SESSION['id']))){
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
}
?>
