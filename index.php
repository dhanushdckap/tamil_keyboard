<?php

try{
    $tamil = new PDO("mysql:host=localhost;dbname=tamil","root","nice");
}
catch(tamil $e){
    die($e->getMessage());
}

$enter = $_POST["enter"];
$text_area = $_POST["text_area"];   

try{
    $insert = $tamil -> prepare("INSERT INTO store(inputs) VALUES('$text_area')");
    $insert -> execute();

    $insert2 = $tamil->prepare("SELECT * FROM store");
    $insert2->execute();

    $display = $insert2->fetchAll($tamil::FETCH_OBJ);
    
    // var_dump($insert2->fetchall($tamil::FETCH_OBJ));

}
catch(information $e){
    die($e->getMessage());
}

require ("index.html")

?>