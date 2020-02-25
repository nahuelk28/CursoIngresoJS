/*Debemos lograr tomar el importe por ID.
Transformarlo a entero (parseInt), luego
mostrar el importe con un Descuento del 25 %
en el cuadro de texto "RESULTADO"*/
function mostrarAumento()
{
	var importe;
	var resultado;
	var descuento;

	importe=document.getElementById('importe').value;
	importe=parseInt(importe);

	descuento=importe*25/100;
	resultado=importe-descuento;
	resultado=importe*0.25;

	console.log(resultado)

	document.getElementById('resultado').value=resultado;
	
}
