/*Al comenzar el juego generaremos un número 
RANDOM del 1 al 3 para la selección de la máquina, 
siendo 1 para “piedra”, el 2 para “papel” y 3 para “tijera”.
El jugador seleccionará una imagen correspondiente 
a su opción  y le informaremos si ganó, empató o perdió.
*/

function comenzar()
{
    var acum=0;
    var usuario;


}//FIN DE LA FUNCIÓN
function piedra()
{
    	var numero=parseInt(Math.random()*3)+1;
        console.log(numero);
	switch(numero)
    {
        case 1 :
        alert("Empató");
        break;

        case 2:
        alert("Perdió");
        break;

        case 3:
        alert("Ganador");
        break;
    }
}//FIN DE LA FUNCIÓN
function papel()
{
    	var numero=parseInt(Math.random()*3)+1;
        console.log(numero);

    switch(numero)
    {
        case 1:
        alert("Ganador");
        break;

        case 2:
        alert("Empató");
        break;

        case 3:
        alert("Perdedor");
        break;
    }


}//FIN DE LA FUNCIÓN
function tijera()
{
    	var numero=parseInt(Math.random()*3)+1;
        console.log(numero);
	switch(numero)
    {
        case 1:
        alert("Perdió");
        break;

        case 2:
        alert("Ganador");
        break;

        case 3:
        alert("Empató.");
        break;
    }

}//FIN DE LA FUNCIÓN