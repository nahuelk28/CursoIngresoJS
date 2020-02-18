/*4.	Para el departamento de iluminación:
Tomando en cuenta que todas las lámparas están en oferta al mismo precio de $35 pesos final.
A.	Si compra 6 o más  lamparitas bajo consumo tiene un descuento del 50%. 
B.	Si compra 5  lamparitas bajo consumo marca "ArgentinaLuz" se hace un descuento del 40 % y si es de otra marca el descuento es del 30%.
C.	Si compra 4  lamparitas bajo consumo marca "ArgentinaLuz" o “FelipeLamparas” se hace un descuento del 25 % y si es de otra marca el descuento es del 20%.
D.	Si compra 3  lamparitas bajo consumo marca "ArgentinaLuz"  el descuento es del 15%, si es  “FelipeLamparas” se hace un descuento del 10 % y si es de otra marca un 5%.
E.	Si el importe final con descuento suma más de $120  se debe sumar un 10% de ingresos brutos en informar del impuesto con el siguiente mensaje:
 ”Usted pago X de IIBB.”, siendo X el impuesto que se pagó. 

 */
 function CalcularPrecio()
{
	var cantidadDeLamparas;
	var marca;
	var precioBruto;
	var descuento;
	var precioFinal;


	
	cantidadDeLamparas=parseInt(cantidadDeLamparas);
    marca = document.getElementById('Marca').value;
	cantidadDeLamparas=document.getElementById('Cantidad').value;
	precioBruto = cantidadDeLamparas=35;

	console.log(precioDescuento);

	//descuento=0;

	switch(cantidadDeLamparas)
	{
		case 5:
			descuento=40;	

			break;
		case 4:
			switch(marca)
			{

				case "ArgentinaLuz":
				case "FelipeLamparas":
					precioDescuento=25;
					break;
				default:
					precioDescuento=20;	

			}

			break;
		case 3:
			switch(marca)
			{

				case "ArgentinaLuz":
					precioDescuento=15;
					break;
				case "FelipeLamparas":
					precioDescuento=10;
					break;
				default:
					precioDescuento=5;	

			}
			break;
		case 1:
		case 2:
			descuento=0;
			break;
		default:
			descuento=50;	

	}




	if (cantidad >5)
	{	
		descuento=50;
	}else
	{
		if (cantidad==5)
		{
			switch(marca)
			{

				case "ArgentinaLuz":
				case "FelipeLamparas":
					precioDescuento=25;
					break;
				default:
					precioDescuento=20;	

			}
		}else
		{
			if (cantidad==4)
			{
				if (marca=="ArgentinaLuz" || marca=="FelipeLamparas")
				{
					precioDescuento=25;
				}else
				{
					precioDescuento=20;
				}
			}else
			{
				if(cantidad==3)
				{
					if(marca=="ArgentinaLuz")
					{
						precioDescuento=15;
					}else
					{
						if(marca=="FelipeLamparas")
						{
							precioDescuento=10;
						}else
						{
							precioDescuento=5;
						}
					}
				}//if (cantidad==3)
			}//if (cantidad==4)
		}//if (cantidad==5)
	}//if (cantidad >5)

	

	

}
        


