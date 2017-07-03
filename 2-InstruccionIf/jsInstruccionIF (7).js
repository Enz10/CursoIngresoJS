function Mostrar()
{
//tomo la edad  

	var Edad=document.getElementById("edad").value;
    var EstadoCivil=document.getElementById("estadoCivil").value;

    if(Edad<18 && EstadoCivil!="Soltero")
    {
        alert("Es muy pequeño para NO ser soltero.");

    }

    else
    {}


}//FIN DE LA FUNCIÓN