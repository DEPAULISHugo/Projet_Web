<!DOCTYPE html>
<html lang="fr" dir="ltr">

  <head>

    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/leaflet/0.7.7/leaflet.css" />
    <script src="https://cdnjs.cloudflare.com/ajax/libs/leaflet/0.7.7/leaflet.js"></script>

    <link rel="stylesheet" href="Carte.css">

    <title>Mission papillon</title>
  </head>

  <body>

    <div id="macarte"></div>
    <script src="objets.js" charset="utf-8"></script>

    <form name="chrono">
      <input type="text" name="chrono" id="compteur" value="15:00"/>
      <input id="stop" type=button onclick="redirection()"; value="" />
    </form>

    <div class="barre">
      <div class="progres" >
        <div class="valeur">
            0%
        </div>
      </div>
    </div>

    <div id="audio">
      <audio id="son" autoplay loop preload="auto">
        <source src="Lava Laboratory - Roblox Escape Room Music.mp3" type="audio/mp3" />
      </audio>

      <input type="range" min="0" max="1" step="0.1" value="1" id="volume" onchange="changeVolume()">
    </div>

    <div>
      <div class="rangement" id="boite1"><img src="shadow.png" class=imageObjets alt="Oups !"></div>
      <div class="rangement" id="boite2"><img src="shadow.png" class=imageObjets alt="Oups !"></div>
      <div class="rangement" id="boite3"><img src="shadow.png" class=imageObjets alt="Oups !"></div>
      <div class="rangement" id="boite4"><img src="shadow.png" class=imageObjets alt="Oups !"></div>
      <div class="rangement" id="boite5"><img src="shadow.png" class=imageObjets alt="Oups !"></div>
      <div class="rangement" id="boite6"><img src="shadow.png" class=imageObjets alt="Oups !"></div>
      <div class="rangement" id="boite7"><img src="shadow.png" class=imageObjets alt="Oups !"></div>
    </div>


    <script src="carte.js" charset="utf-8"></script>
  </body>

</html>
