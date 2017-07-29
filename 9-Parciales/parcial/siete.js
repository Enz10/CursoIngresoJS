function Mostrar()
{
  var prom;
  var notas=0;
  var sexo;
  var alum=0;
  var bandera=true;
  var menorNota;
  var varones=0;
  var acumNotas=0;

  while(alum<3)
  {
      alum++;
      notas=prompt("Ingrese su nota");
      notas=parseInt(notas);

      while(isNaN(notas) || notas<0 || notas>10)
        {
      notas=prompt("Ingrese solo números del 0 al 10.");
      notas=parseInt(notas);  
        }
      sexo=prompt("Ingrese su sexo('f' o 'm'");

      while(sexo!="f" || sexo!="m")
        {
          sexo=prompt("Ingrese su sexo como 'f' o 'm'");
        }

      if(bandera)
        {
          bandera=false;
          menorNota=notas;
          menorNota=parseInt(menorNota);
        }

        if(nota<menorNota)
          {
            menorNota=notas;
            alert("La menor nota es: "+ menorNota);
          }

        if( sexo=="m" && nota>=6)
          {
            varones++;
            varones=parseInt(varones);
            alert("La cantidad de varones que sacaron 6 o más es: "+varones);
          }

          acumNotas=notas+acumNotas;
          alert("El promedio de todos los alumnos es: "+acumNotas);
  }
        prom=acumNotas/alum;
}
