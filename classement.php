<?php

function getClassement(){
  $link = pg_connect("host=localhost port=5433 dbname=projet user=postgres password=postgres");

  $requete = "SELECT * FROM classement ORDER BY temps LIMIT 3"
  $result = pg_query($link, $requete);

  if ($result){
    while ($row = pg_fetch_row($result)) {
      echo $row;
    }
  }

}



 ?>
