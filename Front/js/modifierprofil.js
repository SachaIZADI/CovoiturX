

function modifierProfil() {

        document.getElementById('inputNom').innerHTML = "<input class='form-control modif_profil' type='text'>";
        document.getElementById('inputPromo').innerHTML = "<input class='form-control modif_profil' type='text'>";
        document.getElementById('inputSection').innerHTML = "<input class='form-control modif_profil' type='text'>";
        document.getElementById('inputTel').innerHTML = "<input class='form-control modif_profil' type='text'>";
        document.getElementById('modifier_profil').innerHTML =null;
        document.getElementById('soumettre_modif').innerHTML = " <button type='button' onClick='soumettreModif()' class='btn btn-primary btn-lg outline btn-block propositionButton'>Soumettre les modifications</button><br/> ";
    
}

function soumettreModif() {
    if (checkInputDataProfil()) {
        var newElement_input = document.getElementsByClassName('modif_profil');
        var element_input = document.getElementsByClassName('p_valeur');
        for (var i = 0; i < 4; i++) {
            element_input[i].textContent = newElement_input[i].value;
        }
        document.getElementById('inputNom').innerHTML =null;
        document.getElementById('inputPromo').innerHTML = null;
        document.getElementById('inputSection').innerHTML = null;
        document.getElementById('inputTel').innerHTML = null;
        document.getElementById('modifier_profil').innerHTML =" <button type='button' onClick='modifierProfil()' class='btn btn-primary btn-lg outline btn-block propositionButton'> Modifier le profil   </button> ";
    } else {
        document.getElementById('modifier_profil').innerHTML ="<h3 style='display: center;'> Attention aux champs vides</h3>";
    }
}