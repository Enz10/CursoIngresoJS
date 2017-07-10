function Mostrar()
{

	var contador=1;
	var acumulador=0;
	var promedio=0;
	var numero=0;

	

	while(contador<=5)
	{
		numero=parseInt(prompt("Ingrese un número."));
		while(isNaN(numero))
		{
			numero=parseInt(prompt("No funk"));
			console.log(numero);
		}
		acumulador+=numero;
		contador++;		

		

	}
promedio= acumulador/5;





document.getElementById('suma').value=acumulador;
document.getElementById('promedio').value=promedio;

}//FIN DE LA FUNCIÓN