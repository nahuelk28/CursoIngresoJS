function mostrar()
{
	//Genero el número RANDOM entre 1 y 10 
	var random;
	random=Math.floor((Math.random() * 10 ) + 1);

	if(random >8)
	{
		alert("excelente")
    }else
    {
    	if(random <5)
    	{
    		alert("vamos la proxima se puede")

    	}else
    	{
    		alert("aprobaste")
    	}
    }


	console.log(random);

}//FIN DE LA FUNCIÓN