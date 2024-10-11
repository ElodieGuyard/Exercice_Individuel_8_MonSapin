
<?php
session_start();
?>
<form action="admin.php" method="post">
    <p>Votre nom : <input type="text" name="first_name" /></p>
    <p><input type="submit" value="OK"></p>
</form>
   
<form action="admin.php" method="post">
    <p><input type="submit" name="ResetBtn" value="RESET"></p>
</form>

<?php

if (!empty($_GET['first_name'])) {
    echo "Bonjour " . $_GET['first_name']; //récupère la chaîne de caractère après "?first_name=" dans l'URL
} else if (!empty($_SESSION["newsession"])){
    echo "Bonjour " . $_SESSION["newsession"]; //récupère la chaîne de caractère après "?first_name=" dans l'URL
} else if (!empty($_POST['first_name'])) {
    echo "Bonjour " . $_POST['first_name']; //récupère la valeur de la variable sotckée dans first_name depuis l'envoi du formulaire où il y a un cham d'input et un bouton por valider le formulaire
    $_SESSION["newsession"]=$_POST['first_name'];
} else {
    echo "Bonjour Anonyme"; 
}

if(isset($_POST['ResetBtn'])) {
    session_destroy();
    header("Refresh:0");
}
?>

