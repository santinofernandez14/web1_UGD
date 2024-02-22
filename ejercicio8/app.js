/*Realice una página que permita al usuario cargar en un array una 
cantidad variable de
números. Una vez finalizada la carga 
la página debe mostrar un resumen estadístico

compuesto de los siguientes parámetros: Promedio, 
Mediana, Mínimo, Máximo y desviación
estándar.*/

let array = new Array(Number(prompt('ingrese un tamaño')));
for(let i=0; i<array.length; i++){
    if(isNaN(array[i])){
    array[i]=Number(prompt('ingrese los numeros'))
    }
}
let numero=Math.max(...array);
console.log("el valor maximo es "+numero)
let e=Math.min(...array);
console.log("el valor minimo es "+e)
let media = 0;
let diferencias = [];

// Calcular la media
for (let elemento of array) {
    media = media + elemento;
}


media = media / array.length;

//media=Math.floor(media)
console.log("Media:", media);


// Calcular las diferencias
let clon = array.slice();

for (let i = 0; i < clon.length; i++) {
    diferencias[i] = media - clon[i];
    diferencias[i]=diferencias[i]*diferencias[i]
   
}

console.log("Diferencias:", diferencias);
let media2=0;
for (let elemento of diferencias) {
    media2 = media2 + elemento;
}

media2=media2/5
console.log("la media de los cuadrados es "+media2)

let desviacion=Math.sqrt(media2)
console.log("la desviacion estandar es "+ desviacion)



