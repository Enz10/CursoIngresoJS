function Mostrar()
{

	var respuesta=true;
	var canPos=0;
	var canNeg=0;
	var acumNeg=0;
	var acumPos=0;


	contador=parseInt(contador);

	while(respuesta==true)
	{
		numero=prompt("Ingrese un número");
		numero=parseInt(numero);

		if(numero<0)
		{
			acumNeg+=numero
		}
		else
		{
			acumPos+=numero
		}
		contador++;

	        respuesta=confirm("¿Desea seguir ingresando números?")
		

	}




}//FIN DE LA FUNCIÓN