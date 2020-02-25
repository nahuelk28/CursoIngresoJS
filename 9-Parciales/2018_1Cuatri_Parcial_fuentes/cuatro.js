function mostrar()
/*Bienvenidos (IF).
Pedir dos números y mostrar el resultado:
Si son iguales los muestro concatenados.
Si el primero es mayor, los resto,
de lo contrario los sumo.
Si la suma es mayor a 10 ,además de mostrar el resultado, muestro el mensaje
"la suma es xxx y supero el 10".*/
{

	var numeroUno;
	var numeroDos;
	var resto;
	var suma;

	numeroUno=prompt("ingrese primer numero");
	//numeroUno=parseInt(numeroUno);

	numeroDos=prompt("ingrese segundo numero");
	//numeroDos=parseInt(numeroDos);

	if(numeroUno == numeroDos)
	{
		alert(numeroUno+numeroDos)
    }else
    {
    	if(numeroUno > numeroDos)
    	{ 
    		numeroUno=parseInt(numeroUno);
    		numeroDos=parseInt(numeroDos);
			resto=(numeroUno - numeroDos)
    		alert(resto)

    	}else
    	{
    		if(numeroUno < numeroDos)
    		numeroUno=parseInt(numeroUno);
    		numeroDos=parseInt(numeroDos);
			suma=(numeroUno + numeroDos)	
    		alert(suma)
    	}
    	else
    	{
    		if(numeroUno + numeroDos >10)
    		{
    			alert("este numero es mayor a 10")
    		}
    	}
    }






}
