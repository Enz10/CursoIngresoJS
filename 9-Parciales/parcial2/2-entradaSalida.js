//Debemos lograr mostrar un mensaje al presionar el botón  'MOSTRAR'.
function Mostrar()
{
    var importe=prompt("Ingrese un importe");
    var aumento;

    aumento=parseInt(aumento);
    aumento=importe*1.21;

    document.getElementById("importe").value=aumento
}

