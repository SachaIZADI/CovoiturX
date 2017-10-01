


function checkNumberValidity(num_tel) {
	var regex = new RegExp(/^(01|02|03|04|05|06|08|09)[0-9]{8}/gi);
 
	var match = false;
	if(regex.test(num_tel)) {
		match = true;
	}
	else {
		match = false;
	}
	return match;
}
function checkPromotionValidity(promotion) {
	var regex = new RegExp(/^(20|19)[0-9]{2}/gi);
 
	var match = false;
	if(regex.test(promotion)) {
		match = true;
	}
	else {
		match = false;
	}
	return match;
}


var check = {};
check['lastName'] = function (id) {

    var name = document.getElementById(id), //c est un element HTML 
            tooltip = document.getElementById('tooltip_'+id);


    if (name.value.length >= 2 && name.value.length <= 50 ) {
        tooltip.innerHTML='';
        return true;
    } else {
        tooltip.innerHTML = 'Un nom doit faire plus de deux caractères';
        return false;
    }

};

check['firstName'] = check['lastName']; // La fonction pour le prénom est la même que celle du nom


check['telephone'] = function () {

    var name = document.getElementById('telephone'), //c est un element HTML 
            tooltip = document.getElementById('tooltip_telephone');


    if (checkNumberValidity(name.value) && name.value.length===10) {
        tooltip.innerHTML='';
        return true;
    } else {
        tooltip.innerHTML = 'Le numero doit comprendre 10 chiffres et commencer par 0';
        return false;
    }

};
check['promotion'] = function () {

    var name = document.getElementById('promotion'), //c est un element HTML 
            tooltip = document.getElementById('tooltip_promotion');


    if (checkPromotionValidity(name.value)) {
        tooltip.innerHTML='';
        return true;
    } else {
        tooltip.innerHTML = "La promotion doit etre sous forme d'annee (ex:2015)";
        return false;
    }

};
check["pwd1"] = function () {

    var name = document.getElementById('pwd1'), //c est un element HTML 
            tooltip = document.getElementById('tooltip_pwd1');


    if (name.value.length >= 4 && name.value.length < 15) {
        tooltip.innerHTML=null;
        return true;
    } else {
        tooltip.innerHTML = "Le mot de passe doit faire entre 4 et 15 caractères";
        return false;
        }
};
check["pwd2"] = function () {

    var pwd2 = document.getElementById('pwd2'),
            pwd1 = document.getElementById('pwd1'),//c est un element HTML 
            tooltip = document.getElementById('tooltip_pwd2');


    if (pwd1.value == pwd2.value && pwd2.value != '') {
        tooltip.innerHTML=null;
        return true;
    } else {
         tooltip.innerHTML = "Les deux mots de passe doit etre les memes";
        return false;
    }

};


// Mise en place des événements



function verifyForm() {

    var myForm = document.getElementById('myForm'),
            inputs = document.querySelectorAll('input[type=text], input[type=password]'),
            inputsLength = inputs.length;

    for (var i = 0; i < inputsLength; i++) {
        inputs[i].addEventListener('keyup', function (e) {
            check[e.target.id](e.target.id); // "e.target" représente l'input actuellement modifié
        });
    }
    document.getElementById('button_soummettre').addEventListener('click', function (e) {

        var result = true;

        for (var i in check) {
            result = check[i](i) && result;
        }

        if (result) {
             var login = $("input[name='login']").val();
             var password = $("input[name='pwd1']").val();
             var nom = $("input[name='lastName']").val();
             var prenom = $("input[name='firstName']").val();
             var section = $("input[name='section']").val();
             var telephone = $("input[name='telephone']").val();
             var promotion = $("input[name='promotion']").val();
             $.post("http://frontal.polytechnique.fr/~sacha.izadi/CovoiturX/", {password: password, promotion:promotion, nom: nom, prenom: prenom,  num_tel : telephone});
             // on enregistre le login, ça peut servir
           
            sessionStorage['login'] = $("input[name='login']").val();
            // on redirige vers la page principale
            location.hash="#Annonces";
           
           
        }

        e.preventDefault();

            });

}

verifyForm();
