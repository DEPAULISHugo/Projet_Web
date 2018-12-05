<!DOCTYPE html>
<html lang="fr" dir="ltr">
  <head>
    <meta charset="utf-8">
    <title>Mission papillon</title>
    <link rel="stylesheet" href="acceuil.css">
    <link rel="shortcut icon" href="icone.png">
  </head>
  <body>

    <div id="histoire">
      <h1>Il faut sauver le papillon</h1>
      <p>Le réseau de distribution d’eau potable de la Guadeloupe a
        été contaminé par un poison mortel. Afin de mettre fin à la
        propagation de cette substance sur l’ensemble de l’île, un
        chercheur a mit au point une antidote. Par mesure de sécurité,
        le remède a été enfermé dans un coffre qui a été enterré quelque
        part sur l’île. À vous de retrouver les indices qui vous permettrons
        de retrouver ce coffre et récupérer l'antidote.
      </p>
    </div>

    <div>
      <input class="boutons" id="bouton-instruction" type=button onclick=window.location.href='instruction.html'; value=Instructions />
      <input class="boutons" id="bouton-jouer" type=button onclick=window.location.href='enregistrement.html'; value=Jouer />
    </div>

    <div>
      <img src="classement.png" alt="image" class="classement">
      <div class="score">
        <h1>Meilleurs <br> scores</h1>
        <table>

          <?php
            $link = pg_connect("host=localhost port=5432 dbname=projet user=postgres password=postgres");

            $requete = "SELECT * FROM classement ORDER BY temps LIMIT 3";
            $result = pg_query($link, $requete);
            echo "<tr>"."<th>"."Identifiant"."</th>"."<th>"."Temps"."</th>"."<tr>";
            if ($result) {
               while ($row = pg_fetch_row($result)) {
                 echo "<tr>";
                 echo '<td>'.$row[0].'</td>';
                 echo "<td>".$row[1]."</td>";
                 echo "</tr>";
               }
             }
          ?>

        </table>
      </div>
    </div>

    <div id="chargement">
      <h3>Chargement de la base de données...</h3>
    </div>


    <script type="text/javascript">
    var ajax = new XMLHttpRequest();
    ajax.open('GET', 'initBDD.php');
    ajax.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
    ajax.addEventListener('load',  function () {
      var response = JSON.parse(ajax.response);
      alert(response.resultat);
      if (response.resultat == "Ok"){
        alert("Base chargée");
        var charg = document.getElementById("chargement");
        alert(charg.innerHTML);
        charg.innerHTML = "<h3>Base de données chargée</h3>";
      }

    });
    ajax.send("");
    </script>

  </body>
</html>
