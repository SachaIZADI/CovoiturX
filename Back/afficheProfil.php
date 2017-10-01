<?php
header('Cache-Control: no-cache, must-revalidate');
header('Expires: Mon, 01 Jul 1980 05:00:00 GMT');
header('Content-type: application/json; charset=utf-8');
header('Access-Control-Allow-Origin:*'); ///<-Attention, ne pas oublier cette ligne!!!
require('Database.php');
$dbh = Database::connect();
$membreID=$_GET['id_membre'];
/******************Selection infos**************/
$query = "SELECT `nom`,`prenom`,`promo`,`section`, `num_tel`, `photo` FROM `membres` WHERE `id_membre`=$membreID";
$sth = $dbh->prepare($query);
$sth->execute();
$result = $sth->fetchAll(PDO::FETCH_ASSOC);
echo json_encode($result);
?>