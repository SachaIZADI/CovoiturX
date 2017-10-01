<?php
header('Cache-Control: no-cache, must-revalidate');
header('Expires: Mon, 01 Jul 1980 05:00:00 GMT');
header('Content-type: application/json; charset=utf-8');
header('Access-Control-Allow-Origin:*'); ///<-Attention, ne pas oublier cette ligne!!!
require('Database.php');
$dbh = Database::connect();
$userID=$_GET['id_user'];
$covoitID=$_GET['id_covoit'];
/******************Selection infos**************/
$query = "SELECT `date`,`heure`,`lieu_depart`,`lieu_arrivee`, `commentaire` FROM `covoiturage` WHERE `id_covoit`=$covoitID";
$sth = $dbh->prepare($query);
$sth->execute();
$result = $sth->fetchAll(PDO::FETCH_ASSOC);
$retour['infos']=$result;
/******************Selection conducteur**************/
$query = "SELECT `id_conducteur`,`nom`,`prenom`,`photo` FROM `covoiturage` JOIN `membres` ON id_conducteur=id_membre WHERE `id_covoit`=$covoitID";
$sth = $dbh->prepare($query);
$sth->execute();
$result = $sth->fetchAll(PDO::FETCH_ASSOC);
$retour['conducteur']=$result;
/******************Selection passagers**************/
//membre1
$query = "SELECT `id_membre1`,`nom`,`prenom`,`photo` FROM `covoiturage` JOIN `membres` ON id_membre1=id_membre WHERE `id_covoit`=$covoitID";
$sth = $dbh->prepare($query);
$sth->execute();
$result1 = $sth->fetchAll(PDO::FETCH_ASSOC);
//membre2
$query = "SELECT `id_membre2`,`nom`,`prenom`,`photo` FROM `covoiturage` JOIN `membres` ON id_membre2=id_membre WHERE `id_covoit`=$covoitID";
$sth = $dbh->prepare($query);
$sth->execute();
$result2 = $sth->fetchAll(PDO::FETCH_ASSOC);
//membre3
$query = "SELECT `id_membre3`,`nom`,`prenom`,`photo` FROM `covoiturage` JOIN `membres` ON id_membre3=id_membre WHERE `id_covoit`=$covoitID";
$sth = $dbh->prepare($query);
$sth->execute();
$result3 = $sth->fetchAll(PDO::FETCH_ASSOC);
//membre4
$query = "SELECT `id_membre4`,`nom`,`prenom`,`photo` FROM `covoiturage` JOIN `membres` ON id_membre4=id_membre WHERE `id_covoit`=$covoitID";
$sth = $dbh->prepare($query);
$sth->execute();
$result4 = $sth->fetchAll(PDO::FETCH_ASSOC);
//membre5
$query = "SELECT `id_membre5`,`nom`,`prenom`,`photo` FROM `covoiturage` JOIN `membres` ON id_membre5=id_membre WHERE `id_covoit`=$covoitID";
$sth = $dbh->prepare($query);
$sth->execute();
$result5 = $sth->fetchAll(PDO::FETCH_ASSOC);
//membre6
$query = "SELECT `id_membre6`,`nom`,`prenom`,`photo` FROM `covoiturage` JOIN `membres` ON id_membre6=id_membre WHERE `id_covoit`=$covoitID";
$sth = $dbh->prepare($query);
$sth->execute();
$result6 = $sth->fetchAll(PDO::FETCH_ASSOC);
$retour['passagers']=array_merge($result1,$result2,$result3,$result4,$result5,$result6);
$modif = json_encode($retour);
$modif = str_replace ( 'id_membre1', 'id_membre', $modif);
$modif = str_replace ( 'id_membre2', 'id_membre', $modif);
$modif = str_replace ( 'id_membre3', 'id_membre', $modif);
$modif = str_replace ( 'id_membre4', 'id_membre', $modif);
$modif = str_replace ( 'id_membre5', 'id_membre', $modif);
$modif = str_replace ( 'id_membre6', 'id_membre', $modif);
echo $modif;
?>
