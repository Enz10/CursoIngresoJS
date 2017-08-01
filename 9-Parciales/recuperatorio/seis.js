function Mostrar()
{
    var cont=0;
    var kilos;
    var bandera=true;
    var menosPe;
    var masPe;

    while(cont<5)
        {
            kilos=parseInt(prompt("Ingrese el peso en kilos."));
            while(kilos<0)
                {
                    kilos=parseInt(prompt("Ingrese un valor mayor a cero."));
                }
            cont++;

                if(bandera)
                {
                    bandera=false;
                    masPe=kilos;
                    menosPe=kilos;
                }
                
                else if(kilos>masPe)
                    {
                        masPe=kilos;
                    }

                else if(kilos<menosPe)
                    {
                        menosPe=kilos;
                    }
        }
    
    alert("El peso más pesado fue "+masPe+" y el menos pesado "+menosPe+" ");
}
