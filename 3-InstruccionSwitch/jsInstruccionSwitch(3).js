function mostrar()
{
//tomo la edad  
var mesDelAño = document.getElementById('mes').value;

//alert (mesDelAño);
  switch(mesDelAño)
	{
		case"enero" :
		case"marzo" :
		case"abril" :
		case"mayo" :
		case"junio" :
		case"julio" :
		case"agosto" :
		case"septiembre" :
		case"octubre" :
		case"noviembre" :
		case"diciembre" :
		    alert("este mes tiene mas de 30 dias")
		    break;
		case"febrero" :
		    alert("este mes tiene 29 dias")
		    break;
	}
	


}//FIN DE LA FUNCIÓN