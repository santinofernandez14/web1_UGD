let nombre=prompt('ingrese su nombre');
let edad=new Date(prompt('ingrese su edad'));
let fecha=new Date();

if(edad!=null){
    let dias=fecha-edad;
    alert('hola mi nombre es '+nombre+'y he vivido '+dias+'dias')
}


