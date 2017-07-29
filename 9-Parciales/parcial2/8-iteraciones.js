//Debemos lograr mostrar un mensaje al presionar el botón  'MOSTRAR'.
function Mostrar()
{
	var numPos;
	var respuesta=true;
	var canPares=0;
	var sumPos;
	var total=0;
	var bandera=true;
	var max;
	var min;

	while(respuesta==true)
	{
		numPos=prompt("Ingrese número positivos");
		numPos=parseInt(numPos);
		total=total+numPos;
		while(numPos<0)
		{
			numPos=prompt("Ingrese números únicamente positivos");
		}

		if(numPos%2==0)
		{
			canPares++;
		}

		if(bandera)
		{
			bandera=false;
			max=numPos;
			min=numPos;
		}

		else if(max>numPos)
		{
			max=numPos;
		}

		else if(min<numPos)
		{
			min=numPos;
		}



		respuesta=confirm("¿Desea seguir ingresando más números?");

	}

	prom=total/numPos;

	alert("El promedio de sus números es "+prom);
	alert("La cantidad de números pares es "+canPares);
	alert("La suma de sus números es "+total);
	alert("El menor número ingresado es "+min);
	alert("El mayor número ingresado es "+max);


}

