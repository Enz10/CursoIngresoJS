function Mostrar()
{
	var importe=prompt("Ingrese su importe.");
	var importefinal=0;

	importefinal=parseInt(importefinal);
	importefinal=importe-(importe*0.25);
	document.getElementById("importeFinal").value=importefinal;
}
