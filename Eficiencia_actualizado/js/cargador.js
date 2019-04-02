$(document).ready(function (e) {
    $('#cargador').load('login.html', function (data) {
        $(this).html(data);
    });
	});
	
	
	
	
function Login(){ 
var done=0; 
var usuario=document.login.usuario.value; 
var password=document.login.password.value; 
if (usuario=="marc" && password=="tuentaxi1") { 

$(document).ready(function (e) {
 
    
        $('#cargador').load('consul.html', function (data) {
            $(this).html(data);
        });
	});

} 
if (usuario=="pablo" && password=="tuentaxi2") { 
$(document).ready(function (e) {
 
    
        $('#cargador').load('consul.html', function (data) {
            $(this).html(data);
        });
	});
} 
if (usuario=="" && password=="") { 
$(document).ready(function (e) {
 
    
        $('#cargador').load('consul.html', function (data) {
            $(this).html(data);
        });
	});
}
if (usuario=="victor" && password=="tuentaxi3") { 
$(document).ready(function (e) {
 
    
        $('#cargador').load('index.html', function (data) {
            $(this).html(data);
        });
	});
} 
if (usuario=="a" && password=="a") { 
window.location="errorpopup.html"; 
} 
} 


