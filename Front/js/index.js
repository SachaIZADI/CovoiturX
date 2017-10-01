
window.addEventListener('load', function () {
                        new FastClick(document.body);
                        }, false);

$(window).on('hashchange', route);


var machine = "temporal";
var monServeur ="http://"+machine+".polytechnique.fr/~sacha.izadi/CovoiturX/";
sessionStorage['log']='#tpl-login';
sessionStorage['idMonProfil'] = 0;


function start(){
    $.get('js/templates.html', function(templates) {
          var page = $(templates).filter('#tpl-accueil1').html();
          $('#container').html(page);
          }, 'html');
}

function route() {
    var page, hash = window.location.hash;
    
    switch (hash) {
            
        case "#Frankiz":
            $.get('js/templates.html', function(templates) {
                  var page = $(templates).filter('#tpl-accueil1').html();
                  $('#container').html(page);
                  }, 'html');
            
            break;

        
        case "#Demander":
            $.get('js/templates.html', function(templates) {
                  var page = $(templates).filter('#tpl-nav').add($(templates).filter('#tpl-demander').html());
                  $('#container').html(page);
                  }, 'html');
            
            break;
        
        
        case "#Proposer":
            $.get('js/templates.html', function(templates) {
                  var page = $(templates).filter('#tpl-nav').add($(templates).filter('#tpl-proposer').html());
                  $('#container').html(page);
                  }, 'html');
            
            break;
            
            
        case "#Covoits":
            $.get('js/templates.html', function(templates) {
                  var template = $(templates).filter('#tpl-covoitEnCours').html();
                  $.getJSON(monServeur+"covoitEnCours.php?id_user="+sessionStorage['idMonProfil'], function(covoit) {
                            page = Mustache.render(template, covoit);
                            document.getElementById("container").innerHTML = page;
                            });
                  }, 'html');
            break;

            
        case "#VosPropositions":
            $.get('js/templates.html', function(templates) {
                  var template = $(templates).filter('#tpl-VosPropositions').html();
                  $.getJSON(monServeur+"detailCovoit.php?id_user="+sessionStorage['idMonProfil']+"&id_covoit="+sessionStorage['idCovoit'], function(detail) {
                            page = Mustache.render(template, detail);
                            document.getElementById("container").innerHTML = page;
                            });
                  }, 'html');
            break;

            
        case "#CovoitRejoint":
            $.get('js/templates.html', function(templates) {
                  var template = $(templates).filter('#tpl-CovoitRejoint').html();
                  $.getJSON(monServeur+"detailCovoit.php?id_user="+sessionStorage['idMonProfil']+"&id_covoit="+sessionStorage['idCovoit'], function(detail) {
                            page = Mustache.render(template, detail);
                            document.getElementById("container").innerHTML = page;
                            });
                  }, 'html');
            break;

            
        case "#AutreProposition":
            $.get('js/templates.html', function(templates) {
                  var template = $(templates).filter('#tpl-AutreProposition').html();
                  $.getJSON(monServeur+"detailCovoit.php?id_user="+sessionStorage['idMonProfil']+"&id_covoit="+sessionStorage['idCovoit'], function(detail) {
                            page = Mustache.render(template, detail);
                            document.getElementById("container").innerHTML = page;
                            });
                  }, 'html');
            break;
            

        case "#Demandes":
            $.get('js/templates.html', function(templates) {
                  var template = $(templates).filter('#tpl-demandesEnCours').html();
                  $.getJSON(monServeur+"demandeEnCours.php?id_user="+sessionStorage['idMonProfil'], function(demandes) {
                            page = Mustache.render(template, demandes);
                            document.getElementById("container").innerHTML = page;
                            });
                  }, 'html');
            break;
            

        case "#VosDemandes":
            $.get('js/templates.html', function(templates) {
                  var template = $(templates).filter('#tpl-VosDemandes').html();
                  $.getJSON(monServeur+"detailDemande.php?id_user="+sessionStorage['idMonProfil']+"&id_covoit="+sessionStorage['idDemande'], function(demandes) {
                            page = Mustache.render(template, demandes);
                            document.getElementById("container").innerHTML = page;
                            });
                  }, 'html');
            break;
            
            
        case "#AutresDemandes":
            $.get('js/templates.html', function(templates) {
                  var template = $(templates).filter('#tpl-AutresDemandes').html();
                  $.getJSON(monServeur+"detailDemande.php?id_user="+sessionStorage['idMonProfil']+"&id_covoit="+sessionStorage['idDemande'], function(demandes) {
                            page = Mustache.render(template, demandes);
                            document.getElementById("container").innerHTML = page;
                            });
                  }, 'html');
            break;

        
        case "#monProfil":
            $.get('js/templates.html', function(templates) {
                  var template = $(templates).filter('#tpl-monProfil').html();
                  $.getJSON(monServeur+"afficheProfil.php?id_membre="+sessionStorage['idMonProfil'], function(profil) {
                            page = Mustache.render(template, profil);
                            document.getElementById("container").innerHTML = page;
                            });
                  }, 'html');
            break;

            
        case "#Profil":
            $.get('js/templates.html', function(templates) {
                  var template = $(templates).filter('#tpl-profil').html();
                  $.getJSON(monServeur+"afficheProfil.php?id_membre="+sessionStorage['idProfil'], function(profil) {
                            page = Mustache.render(template, profil);
                            document.getElementById("container").innerHTML = page;
                            });
                  }, 'html');
            break;

            
        case "#Messages":
            alert("La fonction message n'est pas encore disponible. On y travaille (promis) !");
            break;

            
            
        case "#Login":
            $.get('js/templates.html', function(templates) {
                  var page = $(templates).filter('#tpl-login').html();
                  $('#container').html(page);
                  }, 'html');
            
            break;
        
        case "#Connexion":
            login();
            break;
            
            
        case "#Inscription":
            $.get('js/templates.html', function(templates) {
                  var page = $(templates).filter('#tpl-form-monProfil').html();
                  $('#container').html(page);
                  }, 'html');
            break;
    
    
        default:
            $.get('js/templates.html', function(templates) {
                  var page = $(templates).filter('#tpl-nav').add($(templates).filter('#tpl-home').html());
                  $('#container').html(page);
                  }, 'html');
            break;
    }
}





start();

//route();







