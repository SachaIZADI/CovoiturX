<?php
    ini_set('session.use_cookies', 0);
    ini_set('session.use_only_cookies', 0);
    ini_set('session.use_trans_sid', 1);
    session_name('MODAL');
    session_start();
 
    header('Cache-Control: no-cache, must-revalidate');
    header('Expires: Mon, 01 Jul 1980 05:00:00 GMT');
    header('Content-type: application/json; charset=utf-8');
    header('Access-Control-Allow-Origin:*'); ///<-Attention, ne pas oublier cette ligne!!!
 
    // tableau pour la gestion des erreurs
    $msgJson = array();
 
    // on stocke l'id de session et on l'ajoute à l'affichage JSON
    // cet ID va suivre l'utilisateur pendant toute sa "session" sur l'application
    $msg = array('session_id' => session_id());
    array_push($msgJson, $msg);
 
    // Vérification des champs input envoyés par POST
    if (isset($_POST['login'], $_POST['password']) && !empty($_POST['login']) &&  !empty($_POST['password'])) {
        require('Database.php');
        $dbh = Database::connect();
        $log=$_POST['login'];
        $pass=SHA1($_POST['password']);
        // $query à écrire
        $query = "SELECT * FROM `membres` WHERE login=? AND password=?";
        $sth = $dbh->prepare($query);
        // $query à executer
        $sth->execute(array($log, $pass));
        // Notez ici l'utilisation de rowCount qui permet de renvoyer le nombre de lignes générées par la requête
        $result = $sth->rowCount();
        // si on a un et un seul compte correspondant au login et mot de passe
        if ($result === 1) {
            // on stocke un message de succès dans un tableau
            $msg = array('success' => 'Success');
            // on enregistre le login dans $_SESSION
            $_SESSION['login'] = $_POST['login'];
        } else {
            $msg = array('error' => 'Fail');
        }
    } else {
        $msg = array('error' => 'Login or password is not set');
    }
 
// on affiche l'erreur ou le succès
array_push($msgJson, $msg);
echo json_encode($msgJson);