//Debemos lograr mostrar un mensaje al presionar el botón  'MOSTRAR'.
function Mostrar()
{
	var num1=prompt("Ingrese el primer número.");
	var num2=prompt("Ingrese el segundo número.");
	var mult;
	var resta;
	var suma;

	num1=parseInt(num1);
	num2=parseInt(num2);

	if(num1==num2)
	{
		mult=parseInt(mult);
		mult=num1*num2;
		document.write("La multiplicación es "+mult);
	}

	else if(num1>num2)
	{
		resta=parseInt(resta);
		resta=num1-num2;
		document.write("La resta es "+resta);
	}

	else
	{
		suma=parseInt(suma);
		suma=num1+num2;
		document.write("La suma es "+suma);
	}
}

