

// ************** Demander ***************************************************


function demander() {
    var params = {};
    params.lieu_depart = $("input[id='d_depart']").val();
    params.lieu_arrivee = $("input[id='d_arrivee']").val();
    params.date = $("input[id='d_date']").val();
    params.horaire = $("input[id='d_horaire']").val();
    params.id_user = sessionStorage['idMonProfil'];
    
    $.post(monServeur+"demande.php", params, function(resultat){
           alert(resultat['result']);
           if(resultat['result']==="Demande enregistree"){
           $.get('js/templates.html', function(templates) {
                 var page = $(templates).filter('#tpl-nav').add($(templates).filter('#tpl-home').html());
                 $('#container').html(page);
                 }, 'html');
           }
           });
}


// ************** Proposer ***************************************************


function proposer() {
    var params = {};
    params.lieu_depart = $("input[id='d_depart']").val();
    params.lieu_arrivee = $("input[id='d_arrivee']").val();
    params.date = $("input[id='date']").val();
    params.horaire = $("input[id='horaire']").val();
    params.nbPlaces = $("input[id='nombre_place']").val();
    params.comment = $("input[id='comment']").val();
    
    params.id_user = sessionStorage['idMonProfil'];
    
    $.post(monServeur+"propose.php", params, function(resultat){
           alert(resultat['result']);
           if(resultat['result']==="Proposition enregistree"){
           $.get('js/templates.html', function(templates) {
                 var page = $(templates).filter('#tpl-nav').add($(templates).filter('#tpl-home').html());
                 $('#container').html(page);
                 }, 'html');
           }
           });
}