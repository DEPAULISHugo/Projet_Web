<!DOCTYPE html>
<html lang="en" dir="ltr">
  <head>
    <meta charset="utf-8">
    <title>HELLO</title>
  </head>
  <body>

    <?php

      $link = pg_connect("host=localhost port=5433 dbname=projet user=postgres");
      $requete = "SELECT * FROM classement ORDER BY temps LIMIT 3";
      $result = pg_query($link, $requete);

      if ($result) {
         echo "<ol>";
         while ($row = pg_fetch_row($result)) {
           echo $row[0];
           echo '<li>'.$row.'</li>';
         }
         echo '</ol>';
       }

       else {
         echo 'nul';
       }

     ?>

  </body>
</html>
