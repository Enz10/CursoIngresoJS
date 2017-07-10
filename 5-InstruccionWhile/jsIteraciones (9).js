function Mostrar()
{

	var numero=0;
	var maximo;
	var minimo;
	var respuesta=true;
	var primera=true;

	while(respuesta==true)
	{
		numero=prompt("Ingrese un número.");
		if(primera)
		{
			maximo=numero;
			minimo=numero;
			primera=false;// bandera:cuando ocurre algo por primera vez, luego le cambiamos el valor y seguimos con el programa
		}
		else if(numero<minimo)
		{
	       minimo=numero;
		}
		else if(numero>maximo)
		{
			maximo=numero;
		}
		respuesta=confirm("¿Desea seguir ingresando números?");

		
	
	}

        document.getElementById("maximo").value=maximo;
		document.getElementById("minimo").value=minimo;


}//FIN DE LA FUNCIÓN