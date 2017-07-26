function Mostrar()
{
  var importe=0;
  var importefinal=0;

  importe=prompt("Ingrese su importe.");

  importefinal=parseInt(importefinal);

  importefinal=importe*1.21;

  document.getElementById("importeFinal").value=importefinal;
}