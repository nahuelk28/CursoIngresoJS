function mostrar()
{
//tomo la edad  
	var edad;
	var estadoCivil;

		edad=document.getElementById('edad').value;
	
		estadoCivil=document.getElementById('estadoCivil').value;


		if(edad <18 && estadoCivil !="soltero")
		{
			alert("eres muy pequeño para NO ser solter");
		}

	


}//FIN DE LA FUNCIÓN