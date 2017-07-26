function Mostrar()
{
var num=prompt("Ingrese un número.");
var contador=0;
for(i=1;i<=num;i++)
{
    if(num%i==0)
    {
        contador++;
    }
}
        alert("Existen "+contador+" numeros divisores.");


}//FIN DE LA FUNCIÓN