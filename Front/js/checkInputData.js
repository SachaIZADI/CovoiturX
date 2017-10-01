function checkInputDataProposer() {
    var inElementDep = document.getElementById("depart");
    var inElementArr = document.getElementById("arrivee");
    var inElementNbPlace = document.getElementById("nombre_place");
    var inElementComment = document.getElementById("comment");
    var inElementDate = document.getElementById("date");
    var inElementHoraire = document.getElementById("horaire");
    var alertElements = document.getElementsByClassName("message_erreur_saisie");// classe pcq il peut y en avoir plusieurs 

    var errorText = "";
    var isValid = true;

    if (inElementDep.value.length == 0 || inElementArr.value.length == 0 || inElementNbPlace.value.length == 0 || inElementDate.value.length == 0 || inElementHoraire.value.length == 0) {
        errorText = "(Un champ obligatoire n'est pas complete)";
        isValid = false;
    } else if (inElementNbPlace.value > 9) {
        errorText += "(trop de places disponibles)";
        isValid = false;
    } else if (inElementComment.value.length > 300) {
        errorText += "(Commentaire trop long)";
        isValid = false;
    }

    if (isValid === true) {
        var $texte = $("#check_message");
        $texte.css("color", "red");
        $texte.html("");

        for (var i = 0; i < alertElements.length; i++) {
            var msg = alertElements[i];
            msg.innerHTML = "";
        }
        proposer();
        

    } else {
        var $texte = $("#check_message");
        $texte.css("color", "red");
        $texte.html("erreur de saisie" + errorText);

        for (var i = 0; i < alertElements.length; i++) {
            var msg = alertElements[i];
            msg.innerHTML = "Erreur de saisie: assurez vous d'avoir bien saisi toutes les donn&eacutees";
        }
    }
}
function checkInputDataDemander() {
    var inElementDep = document.getElementById("d_depart");
    var inElementArr = document.getElementById("d_arrivee");
    //var inElementComment = document.getElementById("comment");
    var inElementDate = document.getElementById("d_date");
    var inElementHoraire = document.getElementById("d_horaire");
    var alertElements = document.getElementsByClassName("d_message_erreur_saisie");// classe pcq il peut y en avoir plusieurs 

    var errorText = "";
    var isValid = true;

    if (inElementDep.value.length == 0 || inElementArr.value.length == 0 || inElementDate.value.length == 0 || inElementHoraire.value.length == 0) {
        errorText = "(Un champ obligatoire n'est pas complete)";
        isValid = false;
    } //else if (inElementComment.value.length > 300) {
    // errorText += "(Commentaire trop long)";
    // isValid = false;
    //}

    if (isValid === true) { // si succes
        var $texte = $("#d_check_message");
        $texte.html("");

        for (var i = 0; i < alertElements.length; i++) {
            var msg = alertElements[i];
            msg.innerHTML = "";
        }

        demander();

    } else {
        var $texte = $("#d_check_message");
        $texte.css("color", "red");
        $texte.html("erreur de saisie" + errorText);

        for (var i = 0; i < alertElements.length; i++) {
            var msg = alertElements[i];
            msg.innerHTML = "Erreur de saisie: assurez vous d'avoir bien saisi toutes les donnees";
        }
    }
}
function checkInputDataProfil(){
    if(document.getElementById('inputNom').innerHTML && document.getElementById('inputSection').innerHTML&& document.getElementById('inputTel').innerHTML && document.getElementById('inputPromo').innerHTML )
            return true;
    else return false;
}


    
    
    

function echangeLieu() {

        
       var tmp = document.getElementById('d_depart').value;
       document.getElementById('d_depart').value = document.getElementById('d_arrivee').value;
      document.getElementById('d_arrivee').value = tmp;
      
       
}