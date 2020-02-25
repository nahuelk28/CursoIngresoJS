function mostrar()
{
	var precio;
	var descuento;
	var precioFinal;


	
	precio=parseInt(precio);
	precio=prompt("ingrese precio"); 

	descuento=prompt("ingrese descuento");
	descuento=parseInt(descuento);

	precioFinal=((precio * descuento)/100)


	document.getElementById('elPrecioFinal').value=precio-descuento;



}
