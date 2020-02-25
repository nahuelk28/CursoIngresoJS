function mostrar()
{
//tomo la edad  
var mesDelAño = document.getElementById('mes').value;

//alert (mesDelAño);
	switch(mesDelAño)
	{
		case"Febrero" :
			alert("tiene 28 dìas")
			break;
		case"Abril" :
		case"Junio" :
		case"Septiembre" :
		case"Noviembre" :
			alert("tiene 30 dìas")
			break;
		default:
			alert("tiene 31 dìas")
	}
	
	



}//FIN DE LA FUNCIÓN