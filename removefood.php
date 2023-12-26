<?php
if($_SERVER["REQUEST_METHOD"]=="POST"){
    $recipe=$_POST["remove-recipe"];
    $conn=new mysqli("localhost","root","sdcweb","canteen");
    $sql="delete from foods where rcp='$recipe';";
    if($conn -> query($sql)){
        echo "Recipe removed Succesfully";
    }
}

?>