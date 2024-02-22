/*Realiza una página que muestre un formulario y verifique 
la entrada de un número que
esté comprendido entre 1 y 100.*/ 

function validar(numero){
    if(numero>=1 && numero<=100){
        alert('ingresaste correctamente')
    }else{
        alert('volve a ingresar el numero')
    }
}