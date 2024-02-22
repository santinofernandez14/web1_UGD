function dibujarRectangulo(base, altura) {


    for (let i = 0; i < altura; i++) {
        let linea = '';
        for (let j = 0; j < base; j++) {
            linea += '* ';
        }
        console.log(linea)
    }
}

let base = parseInt(prompt("Ingresa la base del rectángulo:"));


let altura = parseInt(prompt("Ingresa la altura del rectángulo:"));


dibujarRectangulo(base, altura);