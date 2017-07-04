function Mostrar()
{

var clave = prompt("Ingrese el número clave.");

while (clave!=("utn750"))
{
    clave = prompt("Ingrese la clave.");
}

document.getElementById("mostrar").innerHTML = "La clave ingresada es "+clave;
alert("La clave es: "+clave);

}//FIN DE LA FUNCIÓN
