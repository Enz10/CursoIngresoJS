function Mostrar()
{
  var prom;
  var notas=0;
  var sexo;
  var alum=0;
  var acumNotas=0;

  while(alum<100)
  {
      alum++;
      notas=prompt("Ingrese su nota");
      sexo=prompt("Ingrese su sexo");
  if(notas>=0 && notas<=10 && sexo=="f" || sexo=="m")
   {
      acumNotas+=notas;
      prom=notas/alum;
      alert("su prom es" +prom);      
   }
  }
}
