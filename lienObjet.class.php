<?php
  class LienObjet{

    public $idBloque;
    public $idBloquant;
    public $texteDebloque;

    public function __construct($idBloque, $idBloquant, $texteDebloque){
      $this->idBloque = $idBloque;
      $this->idBloquant = $idBloquant;
      $this->texteDebloque = $texteDebloque;
    }

    public function toString(){
      return '{"idBloque":'.$this->idBloque.', "idBloquant":'.$this->idBloquant.', "texteDebloque":"'.$this->texteDebloque.'", "type":"objet"}';
    }
}
?>
