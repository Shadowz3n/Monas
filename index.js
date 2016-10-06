(function(global){
	"use strict";
	
	window.onerror	= function(what, line, file){
		alert(what+'; '+line+'; '+file);
	}
	
	document.addEventListener('deviceready', function(){
		if(navigator.connection.type == 'none'){
			alert("Sem conexão com a internet.");
		}else{
			var ref = window.open("http://dpcontrol.com.br", "_self", 'location=no, hidden=yes');
			ref.addEventListener('loadstart', function(){
				document.getElementById("loading_div").className		= '';
			});
			ref.addEventListener('loadstop', function(){
				setTimeout(function(){
					document.getElementById("loading_div").className		= 'hideLoading';
				}, 1000);
			});
		}
	}, false);
})(window);
