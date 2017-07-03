/*Debemos lograr tomar el importe por ID ,
transformarlo a entero (parseInt), luego
mostrar el importe con un aumento del 10 %
en el cuadro de texto "RESULTADO".*/
function MostrarAumento()
{
    var NumUno=document.getElementById("sueldo").value;
    var Resultado;

    NumUno=parseInt(NumUno);
    Resultado=parseInt(NumUno+(NumUno*10/100));
    document.getElementById("resultado").value=Resultado;


	
}
