/*Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt),realizar la operación correcta y 
mostrar el resto entre el dividendo y el divisor.
ej.: "El resto es 0 ."*/
function SacarResto()
{
	var PrimerNumero=document.getElementById("numeroDividendo").value;
    var SegundoNumero=document.getElementById("numeroDivisor").value;
    var Resultado= PrimerNumero%SegundoNumero;

    PrimerNumero=parseInt(PrimerNumero);
    SegundoNumero=parseInt(SegundoNumero);
    Resultado=parseInt(PrimerNumero%SegundoNumero);

    alert("El resto es"+" "+Resultado)
}
