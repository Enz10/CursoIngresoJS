//Debemos lograr mostrar un mensaje al presionar el botón  'MOSTRAR'.
function Mostrar()
{
	var importe;
	var cont=0;
	var bandera=true;
	var mayor;
	var menor;

	importe=parseInt(importe);


		while(cont<7)
	    {
		importe=prompt("Ingrese el importe de las ventas.");
		cont++;

		while(importe<0)
		{
			importe=prompt("Ingrese un importe mayor a cero.");
		}

		if(bandera)
		{
			bandera=false;
			mayor=importe;
			menor=importe;
		}

		else if(importe>mayor)
		{
			mayor=importe;
		}

		else if(importe<menor)
		{
			menor=importe;
		}

        }
			alert("El importe mayor fue "+mayor+" y el importe menor fue "+menor);

	
}

