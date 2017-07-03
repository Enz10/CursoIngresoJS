/*Debemos lograr tomar el importe por ID.
Transformarlo a entero (parseInt), luego
mostrar el importe con un Descuento del 25 %
en el cuadro de texto "RESULTADO"*/
function MostrarAumento()
{
	var Importe=document.getElementById("importe").value;
    var Resultado;

    Importe=parseInt(Importe);
    Resultado=parseInt(Importe-(Importe*25/100));
    document.getElementById("resultado").value=Resultado;
}
