function mostrar()
{

	var contador=0;
	var positivo=0;
	var negativo=1;
	var numeroIngresado;


	var respuesta='si';
	while(repuesta =="si")

		numeroIngresado=pormt("ingrese un numero: ");
		numeroIngresado=parseInt(numeroIngresado);
		contador = contador+1;

		if(numeroIngresado>0)
		{
			positivo=positivo+numeroIngresado;
		}
		if(numeroIngresado<0)
		{
			negativo=negativo*numeroIngresado
		}



document.getElementById('suma').value=positivo;
document.getElementById('producto').value=negativo;

}//FIN DE LA FUNCIÓN