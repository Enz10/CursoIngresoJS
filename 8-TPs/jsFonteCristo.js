/*El departamento de NUMEROS ESPECIALES  del instituto matemático  FonteCristo  nos está pidiendo una aplicación que verifique las distintas cualidades de los números.

13.	Para cada una de estas acciones  debemos realizar la lógica para verificar las cualidades pedidas:
a.	Se pedirán un número positivo y se mostrará la cantidad de números pares desde el número ingresado hasta el cero.
b.	Se pedirán un número positivo y se mostrará la cantidad de números pares desde el número ingresado hasta el cero.
c.	Se pedirán un número positivo y se mostrará la cantidad de números divisibles de este número que se encuentran desde el 1 al 100.
d.	Se pedirán un número positivo y se mostrará si el número es un número primo o no.
e.	Se pedirán un número positivo y se mostrará la cantidad de números Primos desde el número ingresado hasta el cero.
*/
function ComenzarIngreso () 
{
 	
}

function NumerosPares()
{
    var numero=document.getElementById("numero").value;
    var contadorPar=0;


    if(numero<1)
    {
        alert("Ingrese un número positivo.")
    }
    else
    {
        for(i=1;i<numero;i++)
        {
            if(i%2==0)
            {
                contadorPar++;
                alert("Hay "+contadorPar+" números pares.");
            }
        }
    }
}

function NumerosImpares()
{
    var numero=document.getElementById("numero").value;
    var contadorImpares=0;

    if(numero<1)
    {
        alert("Ingrese un número positivo");
    }

    else
    {
        for(i=1;i<numero;i++)
        {
            if(i%2==1)
            {
                contadorImpares++;
                alert("Hay "+contadorImpares+" números impares.");
            }
        }
    }
}

function NumerosDivisibles()
{
    var numero=document.getElementById("numero").value;
    var contadorDiv=0;

    if(numero<1)
        {
            alert("Ingrese un número positivo.");
        }
    
    else
    {

     for(i=1;i<=numero;i++)
        {
            if(numero%i==0)
            {
                  contadorDiv++;
                  alert("Hay "+contadorDiv+" numeros divisibles");
            }
        }
    }
}

function VerificarPrimo()
{

}

function NumerosPrimos()
{

}