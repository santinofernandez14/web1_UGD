/*5) El programa “elige” un número al azar entre uno y un millón y pregunta por el mismo. El
visitante intenta acertar en una ventana emergente. Tras cada respuesta, una nueva
ventana dice “el número es Mayor” o “el número es Menor” y se pide un nuevo número,
hasta que el usuario lo acierta. En ese momento una ventana lo felicita y muestra el número
de intentos que ha realizado hasta el acierto.*/

let num=Math.floor(Math.random() * 10);
let numIng;
let contador=0;

numeroAleatorio();

function numeroAleatorio(){
    do{
    numIng=parseInt(prompt("Ingrese un numero "));

    if (isNaN(numIng)){
       alert("Debes ingresar un numero")
    }else if (numIng>num){
            alert("El numero ingresado es mayor al numero aleatorio")
        } else if(numIng<num){
            alert("El numero ingresado es menor al numero aleatorio")
        }else {
            alert("Acertaste el numero en "+ contador +" intentos")
            break;
        }
        contador++;
        
       }while (true)
    }