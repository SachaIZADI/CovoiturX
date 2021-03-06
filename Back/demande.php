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
   require('Database.php');
   $dbh = Database::connect();
 
 
    // Vérification des champs input envoyés par POST
    
    if (isset($_POST['lieu_depart'], $_POST['lieu_arrivee'], $_POST['date'], $_POST['horaire'], $_POST['id_user']) && !empty($_POST['lieu_depart']) &&  !empty($_POST['lieu_arrivee']) &&  !empty($_POST['date']) &&  !empty($_POST['horaire']) &&  !empty($_POST['id_user'])) {
        $date=$_POST['date'];
        $heure=$_POST['horaire'];
        $lieu_depart=$_POST['lieu_depart'];
        $lieu_arrivee=$_POST['lieu_arrivee'];
        $statut="D";
        $id_membre1=$_POST['id_user'];
                // $query à écrire
        $query = "INSERT INTO `covoiturage` (date, heure, lieu_depart, lieu_arrivee, statut, id_membre1) VALUES (?, ?, ?, ?, ?, ?)";
        $sth = $dbh->prepare($query);
        // $query à executer
        $sth->execute(array($date, $heure,$lieu_depart, $lieu_arrivee, $statut,$id_membre1));

        $msg = array('result' => 'Demande enregistree');
        }
    else{
        $msg = array('result' => 'Erreur');
    }

 
// on affiche l'erreur ou le succès
echo json_encode($msg);
