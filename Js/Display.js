class Display {
    constructor(displayValorAnterior, displayValorNuevo) {
        this.displayValorAnterior = displayValorAnterior;
        this.displayValorNuevo = displayValorNuevo;
        this.calculador = new Calculadora();
        this.valorActual = '';
        this.valorAnterior = '';
        this.tipoOperacion = undefined;
        this.signos = {
            sumar: '+',
            dividir: '%',
            multiplicar: 'x',
            restar: '-', 
        }
    }

    imprimirNumeros() {
        this.displayValorNuevo.textContent = this.valorActual;
        this.displayValorAnterior.textContent = this.valorAnterior;
    }

    agregarNumero(numero) {
        if (numero === '.' && this.valorActual.includes('.')) return
        this.valorActual = this.valorActual.toString() + numero.toString();
        this.imprimirNumeros();
    }

    borrar() {
        this.valorActual = this.valorActual.toString().slice(0,-1);
        this.imprimirNumeros();
    }

    borrarTodo() {
        this.valorActual = '';
        this.valorAnterior = '';
        this.tipoOperacion = undefined;
        this.imprimirNumeros();
    }

    calcular() {
        const valorActual = parseFloat(this.valorActual);
        const valorAnterior = parseFloat(this.valorAnterior);

        if( isNaN(valorActual)  || isNaN(valorAnterior) ) return
        this.valorActual = this.calculador[this.tipoOperacion](valorAnterior, valorActual);

    }

    computar(tipo) {
        this.tipoOperacion !== 'igual' && this.calcular();
        this.tipoOperacion = tipo;
        this.valorAnterior = this.valorActual || this.valorAnterior;
        this.valorActual = '';
        this.imprimirNumeros();
    }
}