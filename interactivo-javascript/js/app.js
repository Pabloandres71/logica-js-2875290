document.addEventListener('DOMContentLoaded', (event) => {
    var parrafo = document.getElementById('descripcion-principal');
    var pantalla = document.getElementById('pantalla-principal');
    var miniaturas = document.getElementsByClassName('miniatura');

    function cambiar() {
        var atributo = this.getAttribute('src');
        var titulo = this.getAttribute('name');
        pantalla.setAttribute('src', atributo);
        parrafo.innerText = titulo;
    }

    for (var i = 0; i < miniaturas.length; i++) {
        miniaturas[i].addEventListener('click', cambiar);
    }
});