function Mostrar()
{
  var importe;
  var cont=0;
  var max;
  var min;
  var bandera=true;

  while(cont<24)
  {
      importe=prompt("Ingrese el importe.");
      cont++;
      while(importe<0)
      {
          importe=prompt("Ingrese un valor mayor a 0.");
      }

      if(bandera)
     {
      bandera=false;
      max=importe;
      min=importe;
     }

  else
  {
      if(importe>max)
      {
          max=importe;
      }
      if(importe<min)
      {
          min=importe;
      }
  }
    document.getElementById("importeFinal").value=("El valor maximo es "+max+" y el valor mínimo "+min);

  }

}