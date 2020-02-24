function mostrar()
{

	var numero;

	numero = prompt("ingrese un número entre 0 y 9.");
	numero =parseint(numero);

	while(numero <0 || numero >9)
	{
		numero = prompt("error ,reingrese un número entre 0 y 9.");
		numero =parseint(numero);
	}

	alert("exito usted ingreso el "+numero);



}//FIN DE LA FUNCIÓN