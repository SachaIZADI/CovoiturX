<?php
header('Cache-Control: no-cache, must-revalidate');
header('Expires: Mon, 01 Jul 1980 05:00:00 GMT');
header('Content-type: application/json; charset=utf-8');
header('Access-Control-Allow-Origin:*'); ///<-Attention, ne pas oublier cette ligne!!!
require('Database.php');
$dbh = Database::connect();
$userID=$_GET['id_user'];
$covoitID=$_GET['id_covoit'];
/******************modifier statut du covoit et du conducteur**************/
$query = "UPDATE covoiturage SET `statut`='C' WHERE `id_covoit`=$covoitID";
$sth = $dbh->prepare($query);
$sth->execute();
$query = "UPDATE covoiturage SET `id_conducteur`=$userID WHERE `id_covoit`=$covoitID";
$sth = $dbh->prepare($query);
$sth->execute();
//* Idealement il faudrait aussi modifier le nombre de places disponibles dans la voiture, ce qui signifie qu'il faut supprimer les personnes en trop ... 
//Pour simplifier on dit que le covoiturage est accepte avec 4 places .. et on s'arrange par message ...
?>