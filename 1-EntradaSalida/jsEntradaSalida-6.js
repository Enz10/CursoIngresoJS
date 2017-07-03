/*Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt) y Sumarlos.
Mostar el resulto por medio de "ALERT"*/
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

