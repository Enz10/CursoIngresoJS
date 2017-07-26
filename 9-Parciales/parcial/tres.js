function Mostrar()
{
  var largo=document.getElementById("alrgo").value;
  var ancho=document.getElementById("ancho").value;
  var perim=0;

  largo=parseInt(largo);
  ancho=parseInt(ancho);
  perim=parseInt(perim);
  
  perim=(largo*2+ancho*2)*3;

  alert("Usted necesitará "+perim+" metros de alambre");
}
