function Mostrar()
{
    var num1=prompt("Ingrese el primer número");
    var num2=prompt("Ingrese el segundo número");

    num1=parseInt(num1);
    num2=parseInt(num2);
    suma=num1+num2;

    if(suma>0)
        {
            document.write(suma+" Es positivo");
        }
    else if(suma<0)
        {
            document.write(suma+" Es negativo");
        }
    else
        {
            document.write("Es cero");
        }
}
