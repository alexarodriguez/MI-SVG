window.onload = function()
 {
 	alert("Cargó...");
 	var color = "#FF0000";
 	var dibujar = SVG('divsvg');
 
 	var posOrg = [[0, 0], [200,0], [200, 300], [120, 300] , [120, 200], [80,200], [80, 300] , [0, 300], [0,0]];
 	var posDestino = [[0, 0], [250,0], [250, 180], [150, 180], [250, 300], [150, 300], [90, 200], [90, 300], [0, 300], [0, 0]];
 	var continua = dibujar.polyline(posOrg).fill("red").stroke({width : 4});
 	var animo = false;
 	nom_div("posLinea").addEventListener('click', function(event)
 	{
 		if(!animo)
 		{
 			continua.animate(2000).plot(posDestino);
 		}
 		else
 		{
 			continua.animate(1000).plot(posOrg);
 		}
 		animo = !animo;
 	});
 	function nom_div(div)
 	{
 		return document.getElementById(div);
 	}
 }
