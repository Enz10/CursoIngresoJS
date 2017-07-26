function Mostrar()
{
  var nums;
  var respuesta=true;
  var canPares=0;
  var prome=0;
  var Suma=0;
  var numMax=0;
  var numMin=0;
  var acumNums=0;
  var cantNums=0;

  while(respuesta==true)
  {
  nums=prompt("Ingrese un número.");
  if(nums>0)
  {
     if(nums%2==0)
     {
         canPares++;
     }

     acumNums+=nums;
     cantNums++;

     prome=acumNums/cantNums;

     Suma=nums+


  }

  else
  {
      alert("Ingrese únicamente números positivos.");
  }


  	respuesta=confirm("¿Desea seguir ingresando números?");
  }

}
