//ejercicio del boton
//1. variables
const miInput = document.getElementById('boton');

//2.funciones
function cambiarValue() {
    console.log(miInput.value);
    miInput.value = 'sound Und 🎶';
}
//3. eventos
miInput.addEventListener('click',cambiarValue)

//ejercicios cuadro de colores

//1.variables
const CajaColor = document.getElementById('caja')
const botonesColores = document.querySelectorAll('.btnColores')

console.log(CajaColor)
console.log(botonesColores)

//2. funciones
function pintarCaja(e) {
    console.log(e.target.getAttribute('data-color'));
    let newColor = e.target.getAttribute('data-color');
    CajaColor.style.backgroundColor = newColor;
}

//3. eventos
botonesColores[0].addEventListener('click', pintarCaja);
botonesColores[1].addEventListener('click', pintarCaja);
botonesColores[2].addEventListener('click', pintarCaja);
botonesColores[3].addEventListener('click', pintarCaja);



// Mover pelota

//1. Variables
const pelota = document.querySelector('#circulo');
const btnMover = document.querySelector('#btnMover');
let e = 0;
//2. funciones
function mover() {

    if (e == 0) {
        pelota.style.marginLeft = '400px';
        pelota.style.backgroundColor = 'yellow';
        pelota.style.transitionDuration = '.5s';
        e = 1;
    } else {
        pelota.style.marginLeft = '0px';
        pelota.style.backgroundColor = '#232323';
        pelota.style.transitionDuration = '.5s';
        e = 0;
    }
}
//3. Eventos

btnMover.addEventListener('click', mover);

//cambiar imagen

const pantallaImg = document.querySelector('#miImagen')
const btnCambiar = document.querySelector('#btnCambiar');
let estado = 0;

function cambiarImagen(){
  pantallaImg.setAttribute('src','imagen2.jpg')
}

btnCambiar.addEventListener('click',cambiarImagen)