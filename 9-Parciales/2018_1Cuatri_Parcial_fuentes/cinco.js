function mostrar()
{
	/*Bienvenidos (SWITCH).
pedir el ingreso de un planeta del sistema solar
Si es la tierra mostrar "acá vivimos".
Si está más cerca del sol, "acá hace más calor".
Si está más lejos del sol, "acá hace más frio".
Si no es un planeta valido informarlo.
Aclaración: los planetas se ingresan en minúscula (Mercurio y Venus están antes que la tierra).*/
	var planetas;

	planetas=prompt("ingrese un planeta");

	switch(planetas)
	{
		case"tierra":
			alert("aca vivimos")
			break;
		case"mercurio":
		case"venus":
			alert("aca hace mas calor")
			break;
		case"pluton":
		case"jupiter":
		case"neptuno":
		case"saturno":
			alert("aca hace mas frio")
			break;
		default:
			alert("no es un planeta valido")

	}


}
