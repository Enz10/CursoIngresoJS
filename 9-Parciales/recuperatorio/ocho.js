function Mostrar()
{
    var respuesta=true;
    var nums;
    var contPar=0;
    var acumNum=0;
    var promedio;
    var bandera=true;
    var numMin;
    var numMax;

    while(respuesta==true)
        {
            nums=parseInt(prompt("Ingrese un número positivo."));
            acumNum=acumNum+nums;

            while(nums<0)
                {
                    nums=parseInt(prompt("Ingrese únicamente números positivos."));
                }


            if(nums%2==0)
                {
                    contPar++;
                }

            if(bandera)
                {
                    bandera=false;
                    numMin=nums;
                    numMax=nums;
                }

            else if(nums<numMin)
                {
                    numMin=nums;
                }

            else if(nums>numMax)
                {
                    numMax=nums;
                }

            respuesta=confirm("¿Desea seguir ingresando números?");
        }
    promedio=acumNum/nums;

    document.write("La cantidad de números pares es "+contPar+"<br>");
    document.write("El promedio de todos los números ingresados es "+promedio+"<br>");
    document.write("La suma de todos los números es "+acumNum+"<br>");
    document.write("El número máximo es "+numMax+" y el número mínimo es "+numMin);
}
