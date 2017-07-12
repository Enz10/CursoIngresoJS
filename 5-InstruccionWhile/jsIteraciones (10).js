function Mostrar()
{
    var numero;
	var respuesta=true;
	var canPos=0;//inicializo porque vamos a sumar
	var canNeg=0;
	var canCeros=0;
	var canPares=0;
	var acumNeg=0;
	var acumPos=0;
	var promPos=0;
	var promNeg=0;
	var difPosNeg=0;


	while(respuesta==true)
	{
		numero=prompt("Ingrese un número.");
		numero=parseInt(numero);
		console.log(numero);
		while(isNaN(numero))
			{
				numero=prompt("Ingrese únicamente números.");
                numero=parseInt(numero);
			}

		if(numero<0)
		{
			acumNeg+=numero;//sumo neg  acumneg=acumneg+num
			canNeg++;       //cuento neg
		}
		else if(numero>0)
		{
			acumPos+=numero;//sumo pos
			canPos++;       //cuento pos
		}
		else
		{
			canCeros++;  // cantidad de 0
		}

		if(numero%2==0)
		{
			canPares++;
		}

	        respuesta=confirm("¿Desea seguir ingresando números?")
		
	}


	if(canNeg>0)// o != porque es un contador nunca empieza en negativo
	{
		promNeg=acumNeg/canNeg;//para que no de NaN
	}
	else
	{
		promNeg=("No ingresó números negativos");
	}

	if(canPos>0)
	{
		promPos=acumPos/canPos;
	}
	else
	{
		promPos=("No ingresó números positivos.");
	}


	difPosNeg=canPos-canNeg;


	if(difPosNeg<0)
	{
		difPosNeg=difPosNeg*-1;//para que se haga positivo
	}

	else
	{
		difPosNeg=difPosNeg*+1;
	}


	document.write("La suma de números negativos es: "+acumNeg+ "<br>");
	document.write("La suma de números positivos es: "+acumPos+ "<br>");
	document.write("La cantidad de números postivos es: "+canPos+ "<br>");
	document.write("La cantidad de números negativos es: "+canNeg+ "<br>");
	document.write("La cantidad de ceros es: "+canCeros+ "<br>");
	document.write("La cantidad de números pares es: "+canPares+ "<br>");
	document.write("El promedio de números positivos es: "+promPos+ "<br>");
	document.write("El promedio de números negativos es: "+promNeg+ "<br>");
	document.write("La diferencia entre números negativos y positivos es: "+difPosNeg);


}//FIN DE LA FUNCIÓN