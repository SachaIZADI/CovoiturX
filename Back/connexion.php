<?php
header('Cache-Control: no-cache, must-revalidate');
header('Expires: Mon, 01 Jul 1980 05:00:00 GMT');
header('Content-type: application/json; charset=utf-8');
header('Access-Control-Allow-Origin:*'); ///<-Attention, ne pas oublier cette ligne!!!
require('Database.php');
$dbh = Database::connect();



if (isset($_POST['login'], $_POST['password']) && !empty($_POST['login']) &&  !empty($_POST['password'])) {
    $login=$_POST['login'];
    $password=SHA1($_POST['password']);
    $query = "SELECT * FROM `membres` WHERE `login`=? AND `password`=?";
    $sth = $dbh->prepare($query);
    $sth->execute(array($login, $password));
    $result = $sth->rowCount();
        
    if ($result === 1) {
        $result = $sth->fetchAll(PDO::FETCH_ASSOC);
        foreach($result as $value){
            $resultBis = $value;
        }
        $data = array('result'=>$resultBis['id_membre']);
        echo json_encode($data);
    } 
    else {
        $data = array('result'=>'error');
        echo json_encode($data);
    }
 }
 else {
        $data = array('result'=>'error');
        echo json_encode($data);
 }


