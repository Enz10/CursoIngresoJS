//Debemos lograr mostrar un mensaje al presionar el botón  'MOSTRAR'.
function Mostrar()
{
	var notas;
	var cont=0;
	var sexo;
	var prom;
	var bandera=true;
	var masbaja;
	var conVar=0;
	var total=0;

	while(cont<6)
	{
		cont++;
		notas=prompt("Ingrese sus notas.");
		notas=parseInt(notas);
		total=total+notas;

		while(notas<0 || notas>10)
		{
			notas=prompt("Ingrese su nota ENTRE 0 y 10");
		}

        sexo=prompt("Ingrese su sexo");
        while(sexo!="f" && sexo!="m")
		{
			sexo=prompt("Ingrese su sexo SOLO como f o m");
		}

		if(bandera)
		{
			bandera=false;
			masbaja=notas;
		}

		else if(notas<masbaja)
		{
			masbaja=notas;
		}



		if(notas>=6 && sexo=="m")
		{
			conVar++;
			conVar=parseInt(conVar);
		}

	}

		prom=total/cont;
		prom=parseInt(prom);

	alert("El promedio de las notas es "+prom);
	alert("La nota más baja es "+masbaja);
	alert("La cantidad de varones con nota mayor a 6 es "+conVar);
}

