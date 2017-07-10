function Mostrar()
{

	var acumuladorSum=0;
	var acumuladorNeg=1;
	var numero=0
	var respuesta=true;

	

	while(respuesta==true)
	{
		numero=prompt("Ingrese un número");
		numero=parseInt(numero);

		if(numero>=0)
		{
			acumuladorSum+=numero;

		}
		else
		{
			acumuladorNeg*=numero;
		}
		
				   respuesta=confirm("¿Desea seguir ingresando números?");


	}


document.getElementById('suma').value=acumuladorSum;
document.getElementById('producto').value=acumuladorNeg;

}//FIN DE LA FUNCIÓN