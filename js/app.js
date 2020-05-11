const cotizador = new Api('85884ab72a460e76c1c0fc3c5c6dc2a1b893a36189b6f39a5a919cb2edc6309f')
const ui = new Interfaz()


const formulario = document.getElementById('formulario')

formulario.addEventListener('submit', (e) => {

    e.preventDefault()

    //Leer monea seleccionada

    const monedaSelect = document.querySelector('#moneda')
        //agaro el valor de monedaSelect y lo mando a monedaSeleccionada para poder leer el elemento seleccionado del formulario
    const monedaSeleccionada = monedaSelect.options[monedaSelect.selectedIndex].value

    //Abajo lo repito
    const criptomonedaSelect = document.querySelector('#criptomoneda')
    const criptomonedaSeleccionada = criptomonedaSelect.options[criptomonedaSelect.selectedIndex].value


    if (monedaSeleccionada === '' || criptomonedaSeleccionada === '') {
        ui.mostrarMensaje('Ambos campos son obligatorios', 'alert bg-danger text-center')

    } else {
        cotizador.obtenerValores(monedaSeleccionada, criptomonedaSeleccionada)
            .then(monedas => {
                ui.imprimirResultadoCriptomoneda(monedas.resultado.RAW, monedaSeleccionada, criptomonedaSeleccionada)
            })
    }

})