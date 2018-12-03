<?php

function getClassement(){
  $link = pg_connect("host=localhost port=5433 dbname=projet user=postgres password=postgres");

  if (!$link) {
    die('Erreur de connexion');
  } else {
    echo 'Succès... ';
  }

  /**$requete = "SELECT * FROM classement ORDER BY temps  LIMIT 3";
  $result = pg_query($link, $requete);
  $classement =
  if ($result){
    echo '<ol>';
    while ($row = pg_fetch_row($result)) {
      echo $row;
      //echo '<li>' .$row .'</li>';

    }
    //echo '</ol>'
  }**/


}



 ?>
