<?php
  class Objet{

    public $id;
    public $name;
    public $lat;
    public $lng;
    public $minZoom;
    public $icone;
    public $texte;

    public function __construct($id,  $name, $lat, $lng, $minZoom, $icone, $texte){
      $this->id = $id;
      $this->name = $name;
      $this->lat = $lat;
      $this->lng = $lng;
      $this->minZoom = $minZoom;
      $this->icone = $icone;
      $this->texte = $texte;
    }

    public function toString(){
      return '{"id":'.$this->id.', "name":"'.$this->name.'" ,"latitude":'.$this->lat.' ,"longitude":'.$this->lng.' ,"minZoom":'.$this->minZoom.' ,"icone":"'.$this->icone.'" ,"texte":"'.$this->texte.'"}';
    }
}

/*$objet = new Objet(1, "nom", 50.123, 45.987, 5, "icone.png");

echo "<p>Nom : " . $objet->id . "</p>";
echo "<p>Nom : " . $objet->name . "</p>";
echo "<p>Latitude : " . $objet->lat . "</p>";
echo "<p>Longitude : " . $objet->lng . "</p>";
echo "<p>Zoom minimal : " . $objet->minZoom . "</p>";
echo "<p>Icone : " . $objet->icone . "</p>";
*/
?>
