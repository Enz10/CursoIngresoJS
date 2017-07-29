//Debemos lograr mostrar un mensaje al presionar el botón  'MOSTRAR'.
function Mostrar()
{
	var largo=document.getElementById("largo").value;
	var ancho=document.getElementById("ancho").value;
    var perim;

	perim=parseInt(perim);
	perim=(2*ancho+2*largo)*6

	alert("Se necesitan "+perim+" metros de alambre para su perímetro.");
		
}

