/*1.	Para el departamento de facturación:
A.	Ingresar tres precios de productos y mostrar la suma de los mismos.
B.	Ingresar tres precios de productos y mostrar el promedio de los mismos.
C.	ingresar tres precios de productos  y mostrar precio final (más IVA 21%).
*/
function Sumar () 
{
	var NumeroUno=document.getElementById("PrecioUno").value;
    var NumeroDos=document.getElementById("PrecioDos").value;
    var NumeroTres=document.getElementById("PrecioTres").value;
    var Resultado=NumeroUno+NumeroDos+NumeroTres

    NumeroUno=parseInt(NumeroUno);
    NumeroDos=parseInt(NumeroDos);
    NumeroTres=parseInt(NumeroTres);

    Resultado=parseInt(NumeroUno+NumeroDos+NumeroTres);

    alert(Resultado);
}
function Promedio () 
{
	var NumeroUno=document.getElementById("PrecioUno").value;
    var NumeroDos=document.getElementById("PrecioDos").value;
    var NumeroTres=document.getElementById("PrecioTres").value;
    var Resultado=NumeroUno+NumeroDos+NumeroTres/3;

    NumeroUno=parseInt(NumeroUno);
    NumeroDos=parseInt(NumeroDos);
    NumeroTres=parseInt(NumeroTres);

    Resultado=parseInt(NumeroUno+NumeroDos+NumeroTres)/3;

    alert(Resultado);
}
function PrecioFinal () 
{
	var NumeroUno=document.getElementById("PrecioUno").value;
    var NumeroDos=document.getElementById("PrecioDos").value;
    var NumeroTres=document.getElementById("PrecioTres").value;
    var Resultado1=NumeroUno+NumeroDos+NumeroTres;
    var Aumento=Resultado1*1.21;

    NumeroUno=parseInt(NumeroUno);
    NumeroDos=parseInt(NumeroDos);
    NumeroTres=parseInt(NumeroTres);
    Resultado1=parseInt(NumeroUno+NumeroDos+NumeroTres);
    Aumento=parseInt(Resultado1*1.21);

    alert(Aumento);


}