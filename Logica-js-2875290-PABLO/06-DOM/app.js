/*
const  pantalla = document.getElementById('titulo');
const  miBtn = document.getElementById('btn');


// crear el evento 
miBtn.addEventListener('click',function(){

    pantalla.style.color = 'blueviolet'; // cambiar el color
    pantalla.innerText =  "Ejecuctando script 😎"; // cambiar el texto dentro de la etiqueta
    pantalla.style.fontFamily = 'Calibri';
    pantalla.style.textAlign = 'center';
})
*/


/*
let p ={
    style: {
        color: 'rojo'
        fontSize: '3em' 

    },
    innerText: 'holamundo',
    onclick: 'función'
}

p.style.color = 'blue'*/
/*
var btnIncrementar = document.getElementById('incrementar');
var btnDecrementar = document.getElementById('decrementar');
var contadorElemento = document.getElementById('contador');

var contador = 0;

function incrementar(){
    if (contador < 20) {
    contador++;
    contadorElemento.textContent = contador;
    }
}

function decrementar(){
    if (contador > 0){
        contador--;
        contadorElemento.textContent = contador
    }
}

btnIncrementar.addEventListener('click', incrementar);
btnDecrementar.addEventListener('click',decrementar);

*/

const numero = document.getElementById('pantalla');
const mas = document.getElementById('mas');
const menos = document.getElementById('menos');
let i = 0;
//2. Creación de funciones
function incrementar() {
    if (i < 20) {
        i++;
        numero.innerText = i;
    }
}
function decrementar() {
    if (i > 0) {
        i--;
        numero.innerText = i;
    }
}
//3. Llamado y eventos
mas.addEventListener('click', incrementar);
menos.addEventListener('click', decrementar);