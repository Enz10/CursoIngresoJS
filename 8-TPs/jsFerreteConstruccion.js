/*2.	Para el departamento de Construcción:
A.	 Mostrar la cantidad de alambre a comprar  si se ingresara el largo y el ancho de un terreno rectangular y se debe alambra con tres hilos de alambre.
B.	Mostrar la cantidad de alambre a comprar  si se ingresara el radio  de un terreno circular y se debe alambra con tres hilos de alambre.
C.	Para hacer un contrapiso de 1m x 1m se necesitan 2 bolsas de cemento y 3 de cal, debemos mostrar cuantas bolsas se necesitan de cada uno para las medidas que nos ingresen.
*/

function Rectangulo () 
{
    var Largo=document.getElementById("Largo").value;
    var Ancho=document.getElementById("Ancho").value;
    var Resultado= (2*Largo+2*Ancho)*3

    Largo=parseInt(Largo);
    Ancho=parseInt(Ancho);
    Resultado=parseInt(Resultado);

    alert(Resultado);

}
function Circulo () 
{
	var Radio=document.getElementById("Radio").value;
    var Resultado=(2*(Math.PI)*Radio)*3;

    Radio=parseInt(Radio);
    Resultado=parseInt(Resultado);

    alert(Resultado);

}
function Materiales () 
{
	var Largo=document.getElementById("Largo").value;
    var Ancho=document.getElementById("Ancho").value;
    var Area=Largo*Ancho;
    var Cemento=Area*2;
    var Cal=Area*3;

    Largo=parseInt(Largo);
    Ancho=parseInt(Ancho);
    Cemento=parseInt(Cemento);
    Cal=parseInt(Cal);
    Area=parseInt(Area);

    alert("La cal que se necesitará será "+Cal+" y de cemento "+Cemento);

    




}