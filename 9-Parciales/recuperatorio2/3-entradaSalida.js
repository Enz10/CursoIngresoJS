//Debemos lograr mostrar un mensaje al presionar el botón  'MOSTRAR'.
function Mostrar()
{
	var largo=document.getElementById("largo").value;
	var ancho=document.getElementById("ancho").value;
	var perim;

	perim=parseInt(2*largo+2*ancho)*6;

	alert("Se necesitan "+perim+" metros de alambrado.");


}

