<?php
header('Cache-Control: no-cache, must-revalidate');
header('Expires: Mon, 01 Jul 1980 05:00:00 GMT');
header('Content-type: application/json; charset=utf-8');
header('Access-Control-Allow-Origin:*'); ///<-Attention, ne pas oublier cette ligne!!!
require('Database.php');
$dbh = Database::connect();



if (isset($_GET['login'], $_GET['password']) && !empty($_GET['login']) &&  !empty($_GET['password'])) {
    $login=$_GET['login'];
    $password=SHA1($_GET['password']);
    $query = "SELECT * FROM `membres` WHERE `login`=? AND `password`=?";
    $sth = $dbh->prepare($query);
    $sth->execute(array($login, $password));
    $result = $sth->rowCount();
        
    if ($result === 1) {
        $result = $sth->fetchAll(PDO::FETCH_ASSOC);
        foreach($result as $value){
            $resultBis = $value;
        }
        echo $resultBis['id_membre'];
    } 
    else {
        echo('error');
    }
 }
 else {
        echo('error');
 }


