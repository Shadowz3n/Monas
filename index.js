(function(global){
	"use strict";
	
	window.onerror	= function(what, line, file){
		alert(what+'; '+line+'; '+file);
	}
	
	document.addEventListener('deviceready', function(){
		if(navigator.connection.type == 'none'){
			alert("Sem conexão com a internet.");
		}else{
			var win = window.open("http://dpcontrol.com.br", "_self", 'location=no');
			win.onload	= function(){
				document.getElementById("loading_div").className		= 'hideLoading';
			}
			/*win.addEventListener('loadstart', function(){
				document.getElementById("loading_div").className		= 'showLoading';
			});
			win.addEventListener('loadstop', function(){
				document.getElementById("loading_div").className		= '';
			});*/
		}
	}, false);
})(window);
