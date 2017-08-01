function Mostrar()
{
    var edades;
    var cont=0;
    var sexo;
    var acumEd=0;
    var bandera=true;
    var edadmin;
    var cantvar=0;

    while(cont<5)
        {
            edades=parseFloat(prompt("Ingrese su edad"));
            while(edades<0 && edades>100)
                {
                    edades=parseFloat(prompt("Ingrese una edad válida entre 0 y 100."));
                }

            acumEd=acumEd+edades;

            sexo=prompt("Ingrese su sexo como f o m.");
            while(!(sexo=="f" || sexo=="m"))
                {
                    sexo=prompt("Ingrese un sexo válido.");
                }
            
            cont++;

            if(bandera)
                {
                    bandera=false;
                    edadmin=edades;
                }

            else if(edades<edadmin)
                {
                    edadmin=edades;
                }
            
            if(sexo=="m" && edades>=20)
                {
                    cantvar++;
                }
        
        }

    promedio=parseFloat(acumEd/cont);

    alert("El promedio de edades es "+promedio+" ,la edad mínima es "+edadmin+" la cantidad de varones mayor o igual a 20 es "+cantvar);
}
