function Mostrar()
{
    var precio1=document.getElementById("precioUno").value;
    var precio2=document.getElementById("precioDos").value;
    var precio3=document.getElementById("precioTres").value;
    var suma;
    var promedio;

    precio1=parseInt(precio1);
    precio2=parseInt(precio2);
    precio3=parseInt(precio3);

    suma=parseInt(suma);
    suma=precio1+precio2+precio3;

    promedio=parseInt(promedio);
    promedio=suma/3;

    alert("La suma de los precios es "+suma+" y el promedio es "+promedio);


}
