<?php

/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

* // A modifier
        $date=$_POST['date'];
        $heure=$_POST['horaire'];
        $lieu_depart=$_POST['lieu_depart'];
        $lieu_arrivee=$_POST['lieu_arrivee'];
        $statut="D";
        $id_membre1=$_POST['id_user'];
        // $query à écrire
        $query = "INSERT INTO `covoiturage` (date, heure, lieu_depart, lieu_arrivee, statut, id_membre1)
VALUES (?, ?, ?, ?, ?, ?)";
        $sth = $dbh->prepare($query);
        // $query à executer
        $sth->execute(array($date, $heure,$lieu_depart, $lieu_arrivee, $statut,$id_membre1));
        $msg = array('result' => 'Demande enregistree');
        }
    else{
        $msg = array('result' => 'Erreur');
        // on affiche l'erreur ou le succès
//echo json_encode($msg);