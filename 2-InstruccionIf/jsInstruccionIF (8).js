function mostrar()
{
  //tomo la edad   
  var edad;
  var estadoCivil;

  edad=document.getElementById('edad').value;
  estadoCivil=document.getElementById('estadoCivil').value;

  if(!(edad <18 && (estadoCivil != soltero)))
  {
  	alert("nada")  //ESTA MAL
  }else
  {
  	if(edad >18 && (estadoCivil == soltero))
  	{
  		alert("es soltero y no es menor de edad")
  	}
  }
  
  


	


 
 } 