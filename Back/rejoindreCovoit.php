<?php
header('Cache-Control: no-cache, must-revalidate');
header('Expires: Mon, 01 Jul 1980 05:00:00 GMT');
header('Content-type: application/json; charset=utf-8');
header('Access-Control-Allow-Origin:*'); ///<-Attention, ne pas oublier cette ligne!!!
require('Database.php');
$dbh = Database::connect();
$userID=$_GET['id_user'];
$covoitID=$_GET['id_covoit'];


$query = "SELECT `id_membre1`,`id_membre2`,`id_membre3`, `id_membre4`, `id_membre5`, `id_membre6`, `nb_places` FROM `covoiturage` WHERE `id_covoit`=$covoitID";
$sth = $dbh->prepare($query);
$sth->execute();
$result = $sth->fetchAll(PDO::FETCH_ASSOC);

$resultBis=array();

foreach($result as $value){
    $resultBis = $value;
    }

$sum=0;
$position=0;
$flag=true;


for($i=1;$i < 7;$i++){
    if ($resultBis['id_membre'.$i]!=0){
        $sum+=1;
    }
    else if ($flag){
      $position=$i;
      $flag=false;
    }
}


if($sum<$resultBis['nb_places']){
   
    $query = "UPDATE covoiturage SET `id_membre$position`=$userID WHERE `id_covoit`=$covoitID";
    $sth = $dbh->prepare($query);
    $sth->execute();
    //echo "success";
    $data = array('result'=>'Bienvenue dans ce groupe');
    echo json_encode($data);
}
else{
     //echo "failed";
    $data = array('result'=>'Ce groupe est complet. Desole.');
    echo json_encode($data);
}
?>