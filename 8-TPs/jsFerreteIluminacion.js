/*4.	Para el departamento de iluminación:
Tomando en cuenta que todas las lámparas están en oferta al mismo preciodesc de $35 pesos final.
A.	Si compra 6 o más  lamparitas bajo consumo tiene un descuento del 50%. 
B.	Si compra 5  lamparitas bajo consumo marca "ArgentinaLuz" se hace un descuento del 40 % 
y si es de otra marca el descuento es del 30%.
C.	Si compra 4  lamparitas bajo consumo marca "ArgentinaLuz" o “FelipeLamparas” se hace un descuento
 del 25 % y si es de otra marca el descuento es del 20%.
D.	Si compra 3  lamparitas bajo consumo marca "ArgentinaLuz"  el descuento es del 15%, si es  “FelipeLamparas”
 se hace un descuento del 10 % y si es de otra marca un 5%.
E.	Si el importe final con descuento suma más de $120  se debe sumar un 10% de ingresos brutos en informar del
 impuesto con el siguiente mensaje:
 ”Usted pago X de IIBB.”, siendo X el impuesto que se pagó. 

 */
function CalcularPrecio () 
{
    var Marca=document.getElementById("Marca").value;
    var lamp=35;
    var preciodesc=0;
    var cant=document.getElementById("Cantidad").value;

    preciodesc=parseInt(preciodesc);
    lamp=parseInt(lamp);


    if(cant>=6)
    {
        preciodesc=(cant*lamp-(cant*lamp*50/100));
    }

    else if(cant==5)
    {
        if(Marca=="ArgentinaLuz")
        {
            preciodesc=(cant*lamp-(cant*lamp*40/100));
        }
        else
        {
            preciodesc=(cant*lamp-(cant*lamp*30/100));
        }
    }

    else if(cant==4)
    {
       if(Marca=="ArgentinaLuz" || Marca=="FelipeLamparas")
       {
            preciodesc=(cant*lamp-(cant*lamp*25/100));
       }
       else
       {
            preciodesc=(cant*lamp-(cant*lamp*20/100));
       }
    }
    
    else if(cant==3)
    {
        if(Marca=="ArgentinaLuz")
        {
             preciodesc=(cant*lamp-(cant*lamp*15/100));
        }
        else if(Marca=="FelipeLamparas")
        {
             preciodesc=(cant*lamp-(cant*lamp*10/100));
        }
        else
        {
             preciodesc=(cant*lamp-(cant*lamp*5/100));
        }    
    }
    else
    {
        preciodesc=(cant*lamp);
        alert("Precio sin descuento.");
    }

    if(preciodesc>120)
    {
        preciodesc=(preciodesc+(preciodesc*10/100));
        alert("Usted pago de IIBB.");
    }

    document.getElementById("precioDescuento").value=preciodesc;


}

