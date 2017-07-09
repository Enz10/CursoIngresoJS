function Mostrar()
{

	var contador=0;
	var acumulador=0;
	var respuesta=true;
	var promedio;
	var total=0;

	
	total=parseInt(total);
	contador=parseInt(contador);

	while(respuesta==true)
	{
		contador++;
		acumulador=prompt("Ingrese un número.");
		acumulador=parseInt(acumulador);
		total=total+acumulador;
        
		
        respuesta=confirm("¿Desea seguir ingresando números?")

	}

	promedio=total/contador;


document.getElementById('suma').value=total;
document.getElementById('promedio').value=promedio;

}//FIN DE LA FUNCIÓN