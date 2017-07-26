function Mostrar()
{
  var numUno;
  var numDos;
  var multi;
  var resta;
  var suma;

  numUno=prompt("Ingrese su primer número.");
  numDos=prompt("Ingrese su segundo número");
  numUno=parseInt(numUno);
  numDos=parseInt(numDos);

  if(numUno==numDos)
  {
      multi=parseInt(numUno*numDos);
      console.log(multi);
    document.write("El resultado es "+multi);

  }

  else if(numUno>numDos)
  {
      resta=parseInt(numUno-numDos);
      console.log(resta);
    document.write("El resultado es "+resta);

  }

  else
  {
      suma=parseInt(numUno+numDos);
    document.write("El resultado es "+suma);

  }


}
