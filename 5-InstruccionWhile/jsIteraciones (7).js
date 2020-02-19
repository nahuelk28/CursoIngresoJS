function mostrar()
{

	var contador=0;
	var acumulador=0;
	var respuesta='si';
	var numeroIngresado;

	while(repuesta=="si")
	{
		numeroIngresado=prompt("ingrese un numero");
		numeroIngresado=parseInt(numeroIngresado);
		contador = contador +1;
		acumulador = acumulador + numeroIngresado;
		repuesta =prompt("ingrese 'si' o se termina");
	}

   document.getElementById('suma').value=acumulador;
   document.getElementById('promedio').value=acumulador/contador;

}//FIN DE LA FUNCIÓN