function Mostrar()
{

	var contador=1;
	var acumulador=0;
	var promedio=0;

	while(contador<=5)
	{
		contador=prompt("Ingrese un número.");
		acumulador=(acumulador+acumulador+acumulador+acumulador+acumulador);
		promedio=acumulador/5;
		continue;

		

	}





document.getElementById('suma').value=acumulador;
document.getElementById('promedio').value=promedio;

}//FIN DE LA FUNCIÓN