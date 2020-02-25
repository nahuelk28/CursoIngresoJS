/*Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt),realizar la operación correcta y 
mostrar el resulto por medio de "ALERT"
ej.: "la Resta es 750"*/ 
function sumar()
{	
	var primerNumero;
	var segundoNumero;
	var suma;

	primerNumero=document.getElementById('numeroUno').value;
	primerNumero=parseInt(primerNumero);

	segundoNumero=document.getElementById('numeroDos').value;
	segundoNumero=parseInt(segundoNumero);

	suma=primerNumero + segundoNumero;

	alert("la suma es " + suma);

	
}

function restar()
{
	var primerNumero;
	var segundoNumero;
	var restar;

	primerNumero=document.getElementById('numeroUno').value;
	primerNumero=parseInt(primerNumero);

	segundoNumero=document.getElementById('numeroDos').value;
	segundoNumero=parseInt(segundoNumero);

	restar=primerNumero - segundoNumero;

	alert("la resta es " + restar);

	
}

function multiplicar()
{ 
	var primerNumero;
	var segundoNumero;
	var multiplicar;

	primerNumero=document.getElementById('numeroUno').value;
	primerNumero=parseInt(primerNumero);

	segundoNumero=document.getElementById('numeroDos').value;
	segundoNumero=parseInt(segundoNumero);

	multiplicar=primerNumero * segundoNumero;

	alert("la multiplicacion es " + multiplicar);

	
}

function dividir()
{
	var primerNumero;
	var segundoNumero;
	var dividir;

	primerNumero=document.getElementById('numeroUno').value;
	primerNumero=parseInt(primerNumero);

	segundoNumero=document.getElementById('numeroDos').value;
	segundoNumero=parseInt(segundoNumero);

	dividir=primerNumero / segundoNumero;

	alert("la division es " + dividir);

	
}

