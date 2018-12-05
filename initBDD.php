<?php
function executeQueryFile($filesql) {
    $link = pg_connect("host=localhost port=5432 dbname=projet user=postgres password=postgres");
    $query = file_get_contents($filesql);
    $array = explode(";", $query);
    for ($i=0; $i < count($array) ; $i++) {
        $requete = $array[$i];
        echo "<p>".$requete."</p>";
        pg_query($link,$requete);
    }
}

$db=pg_connect("host=localhost port=5432 user=postgres password=postgres");
if (pg_query("CREATE DATABASE projet")){
  executeQueryFile("bddProjet.sql");
}
echo '{"resultat":"Ok"}';
 ?>
