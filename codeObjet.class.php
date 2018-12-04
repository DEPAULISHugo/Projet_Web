<?php
  class CodeObjet{

    public $idBloque;
    public $code;
    public $texteDebloque;

    public function __construct($idBloque, $code, $texteDebloque){
      $this->idBloque = $idBloque;
      $this->code = $code;
      $this->texteDebloque = $texteDebloque;
    }

    public function toString(){
      return '{"idBloque":'.$this->idBloque.', "code":"'.$this->code.'", "texteDebloque":"'.$this->texteDebloque.'", "type":"code"}';
    }
}
?>
