function mostrar()
{
//tomo la edad  
var laHora = document.getElementById('hora').value;

	switch(laHora)
	{
		case"7" :
		case"8" :
		case"9" :
		case"10" :
		case"11" :
			alert("es de mañana")
			break;
		case"20" :
		case"21" :
		case"22" :
		case"23" :
			alert("es de noche")
			break;
		default :
			alert("es de tarde")
			break;
	}



}//FIN DE LA FUNCIÓN