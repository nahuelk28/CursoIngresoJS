function mostrar()
{
//tomo la edad  
var mesDelAño = document.getElementById('mes').value;

   switch(mesDelAño)
  {
	case"Julio" :
	case"Agosto" :
	    alert("Abrigate que hace frio.")
	    break;
	case"Abril" :
	case"Mayo" :
	case"Junio" :
	    alert("Falta para el invierno.")
	    break;
    default:
    	alert("verano")
  }






}//FIN DE LA FUNCIÓN


//al seleccionar un mes informar.
//si estamos en Invierno: "Abrigate que hace frio."
//si aún no llego el Invierno: "Falta para el invierno."
//si ya paso el Invierno: "Ya pasamos el frio, ahora calor!!!."
//ACLARAcIÓN: tomamos a Julio y Agosto como los meses de Invierno.