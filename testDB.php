<?php
$db=pg_connect("host=localhost port=5433 user=postgres password=postgres");
pg_query("CREATE DATABASE projet");
/*$link = pg_connect("host=localhost port=5433 dbname=projet user=postgres password=postgres");
$requete = "CREATE TABLE classement (identifiant character varying(100),temps time without time zone)";
pg_query($link,$requete);
echo "requete effectuee";*/

function executeQueryFile($filesql) {
    $link = pg_connect("host=localhost port=5433 dbname=projet user=postgres password=postgres");
    $query = file_get_contents($filesql);
    $array = explode(";", $query);
    for ($i=0; $i < count($array) ; $i++) {
        $requete = $array[$i];
        echo "<p>".$requete."</p>";
        pg_query($link,$requete);
    }
}
executeQueryFile("bddProjet.sql");


 ?>
