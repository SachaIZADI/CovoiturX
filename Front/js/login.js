

function login(){
    var login = $("input[id='login']").val();
    var password = $("input[id='password']").val();
    $.post(monServeur+"connexion.php", {login: login, password: password},
           function(retour){
                if(retour['result']==='error'){
                    alert("Erreur dans le login ou le password");
                }
                else{
                    alert("Connexion réussie");
                    sessionStorage['idMonProfil']=retour['result'];
                    sessionStorage['log']='#tpl-home';
                }
           $.get('js/templates.html', function(templates) {
                 var page = $(templates).filter(sessionStorage['log']).html();
                 $('#container').html(page);
                 }, 'html');
           });
}



function logout(){
    sessionStorage['idMonProfil']=0;
    sessionStorage['log']='#tpl-login';;
}