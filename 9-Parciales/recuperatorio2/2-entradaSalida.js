//Debemos lograr mostrar un mensaje al presionar el botón  'MOSTRAR'.
function Mostrar()
{
	var importe=prompt("Ingrese su importe.");
	var importeF;

	importeF=parseFloat(importe*1.21);

	document.getElementById("importe").value=importeF;


}

