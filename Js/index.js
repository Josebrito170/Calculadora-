const displayValorAnterior = document.getElementById('valor-anterior');
const displayValorNuevo = document.getElementById('valor-actual');
const botonesNumeros = document.querySelectorAll('.numer');
const botonesOperadores = document.querySelectorAll('.operador');

const display = new Display(displayValorAnterior, displayValorNuevo);

botonesNumeros.forEach(boton => {
    boton.addEventListener('click', () => {
        display.agregarNumero(boton.innerHTML);
    });
});

botonesOperadores.forEach(boton => {
    boton.addEventListener('click', () => {
        display.computar(boton.value);
    });   
});