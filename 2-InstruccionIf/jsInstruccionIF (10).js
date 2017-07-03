function Mostrar()
{
	//Genero el número RANDOM entre 1 y 10 
	var Nota=Math.floor(Math.random()*10)+1;


	if(Nota==9 || Nota==10)
	{
		alert(Nota + " Excelente");
	}

	else if(Nota>=4)
	{
		alert(Nota+ " Aprobó");
	}

	else
	{
		alert(Nota +" Vamos, la proxima se puede.");
	}

}//FIN DE LA FUNCIÓN