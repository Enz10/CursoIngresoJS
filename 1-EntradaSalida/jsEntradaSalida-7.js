/*Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt),realizar la operación correcta y 
mostar el resulto por medio de "ALERT"
ej.: "la Resta es 750"*/ 
function sumar()
{	
	var PrimerNumero=document.getElementById("numeroUno").value;
    var SegundoNumero=document.getElementById("numeroDos").value;
    var Resultado= PrimerNumero+SegundoNumero;

    PrimerNumero=parseInt(PrimerNumero);
    SegundoNumero=parseInt(SegundoNumero);
    Resultado=parseInt(PrimerNumero+SegundoNumero);

    alert("La suma es"+" "+Resultado);
}

function restar()
{
	var PrimerNumero=document.getElementById("numeroUno").value;
    var SegundoNumero=document.getElementById("numeroDos").value;
    var Resultado= PrimerNumero-SegundoNumero;

    PrimerNumero=parseInt(PrimerNumero);
    SegundoNumero=parseInt(SegundoNumero);
    Resultado=parseInt(PrimerNumero-SegundoNumero);

    alert("La resta es"+" "+Resultado);
}

function multiplicar()
{ 
    var PrimerNumero=document.getElementById("numeroUno").value;
    var SegundoNumero=document.getElementById("numeroDos").value;
    var Resultado= PrimerNumero*SegundoNumero;

	PrimerNumero=parseInt(PrimerNumero);
    SegundoNumero=parseInt(SegundoNumero);
    Resultado=parseInt(PrimerNumero*SegundoNumero);

    alert("La multiplicación es"+" "+Resultado);
}

function dividir()
{
	var PrimerNumero=document.getElementById("numeroUno").value;
    var SegundoNumero=document.getElementById("numeroDos").value;
    var Resultado= PrimerNumero/SegundoNumero;

    PrimerNumero=parseInt(PrimerNumero);
    SegundoNumero=parseInt(SegundoNumero);
    Resultado=parseInt(PrimerNumero/SegundoNumero);

    alert("La división es"+" "+Resultado);
}

