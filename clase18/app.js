/*Crear una función de nombre validar que reciba una cadena, 
chequear que la cadena comience con 2 números, luego siga con cuatro letras mayúsculas y 
finalice con 1 número; si la cadena es valida, es decir, cumple con ese patrón muestre un díalogo informando 
el éxito; caso contrario lance una excepción y en el catch muestre el mensaje de fracaso. */

   
/*function validar(cadena){
        try{
          let patron=/^[0-9]{2}[A-Z]{4}[0-9]{1}$/
        if(patron.test(cadena)){
            alert("felicidades")

      }else{
        throw new Error('error')
      } 
      
    }catch(error){
        console.log('error')
    }
    

}
        
     
validar('2AAAA4')*/


function validar(cadena){
        
  let patron=/^[0-9]{2}[A-Z]{4}[0-9]{1}$/
  try{
  if(patron.test(cadena)){
      alert("felicidades")
      
  }else{
       throw new Error("error")
 
  }
 }catch(error){
  console.log(error.message)
 }

}


  
  validar("22AAAA4")