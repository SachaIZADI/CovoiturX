<?php
header('Cache-Control: no-cache, must-revalidate');
header('Expires: Mon, 01 Jul 1980 05:00:00 GMT');
header('Content-type: application/json; charset=utf-8');
header('Access-Control-Allow-Origin:*'); ///<-Attention, ne pas oublier cette ligne!!!
require('Database.php');
$dbh = Database::connect();
$userID=$_GET['id_user'];
// Selection vos propositions
$query = "SELECT `id_covoit`,`date`,`heure`,`lieu_depart`,`lieu_arrivee` FROM `covoiturage` WHERE `statut`='C' AND `id_conducteur`=$userID";
$sth = $dbh->prepare($query);
$sth->execute();
$result = $sth->fetchAll(PDO::FETCH_ASSOC);
$retour=array();
$retour['vos_propositions']=$result;
// Selection covoits rejoints
$query = "SELECT `id_covoit`,`date`,`heure`,`lieu_depart`,`lieu_arrivee` FROM `covoiturage` WHERE `statut`='C' AND `id_conducteur`!=$userID AND (`id_membre1`=$userID OR `id_membre2`=$userID OR `id_membre3`=$userID OR `id_membre4`=$userID OR `id_membre5`=$userID OR `id_membre6`=$userID)";
$sth = $dbh->prepare($query);
$sth->execute();
$result = $sth->fetchAll(PDO::FETCH_ASSOC);
$retour['covoit_rejoints']=$result;
// Selection Autres covoits
$query = "SELECT `id_covoit`,`date`,`heure`,`lieu_depart`,`lieu_arrivee` FROM `covoiturage` WHERE `statut`='C' AND `id_conducteur`!=$userID AND `id_membre1`!=$userID AND `id_membre2`!=$userID AND `id_membre3`!=$userID AND `id_membre4`!=$userID AND `id_membre5`!=$userID AND `id_membre6`!=$userID";
$sth = $dbh->prepare($query);
$sth->execute();
$result = $sth->fetchAll(PDO::FETCH_ASSOC);
$retour['autres_covoit']=$result;
echo json_encode($retour);
?>