function quitterCovoit(){
    $.post(monServeur+"quitterCovoit.php?id_user="+sessionStorage['idMonProfil']+"&id_covoit="+sessionStorage['idCovoit']);
}

function quitterDemande(){
    $.post(monServeur+"quitterCovoit.php?id_user="+sessionStorage['idMonProfil']+"&id_covoit="+sessionStorage['idDemande']);
}


function rejoindreCovoit(){
    $.getJSON(monServeur+"rejoindreCovoit.php?id_user="+sessionStorage['idMonProfil']+"&id_covoit="+sessionStorage['idCovoit'], function(data){
              alert(data["result"]);
              });
}
    
function rejoindreDemande(){
    $.getJSON(monServeur+"rejoindreCovoit.php?id_user="+sessionStorage['idMonProfil']+"&id_covoit="+sessionStorage['idDemande'], function(data){
          alert(data["result"]);
          });
}

function accepterDemande(){
    $.post(monServeur+"accepterDemande.php?id_user="+sessionStorage['idMonProfil']+"&id_covoit="+sessionStorage['idDemande']);
}

