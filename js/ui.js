class Interfaz {

    constructor() {
        this.init()
    }
    init() {
        this.construirSelect()
    }

    mostrarMensaje(mensaje, clases) {
        const div = document.createElement('div')
        div.className = clases
        div.appendChild(document.createTextNode(mensaje))


        //seleccionar mensajes

        const divMensaje = document.querySelector('.mensajes')
        divMensaje.appendChild(div)

        setTimeout(() => {
            document.querySelector('.mensajes div').remove()
        }, 2000)
    }

    construirSelect() {
        cotizador.obtenerMonedasApi()
            .then(monedas => {

                //Recorrer un objeto
                let objetos = Object.entries(monedas.monedas.Data)
                    //Crear selec
                const select = document.getElementById('criptomoneda')
                    //iterar en los resultados de la api, puesto que la variables objetos almacena el array de los objetos
                objetos.forEach((objeto, index) => {

                    // crear el option del select con su  value y su texto

                    if (objeto[1].Symbol === 'BTC' || objeto[1].Symbol === 'ETH') {
                        const opcion = document.createElement('option')
                        opcion.value = objeto[1].Symbol
                        opcion.appendChild(document.createTextNode(objeto[1].CoinName))
                        select.appendChild(opcion)
                    }


                })
            })
    }

    imprimirResultadoCriptomoneda(resultado, moneda, criptomoneda) {
        console.log("El valor de metodo imprimir esultado ")
        console.log(resultado[criptomoneda][moneda])
        const datosMonedas = resultado[criptomoneda][moneda]
            // marcar resultado anterior
        const resultadoAnterior = document.querySelector('#resultado > div')

        //recortar digitos de precios
        let precio = datosMonedas.PRICE.toFixed(2)
        let porcentaje = datosMonedas.CHANGEPCTDAY.toFixed(2)
        let actualizado = new Date(datosMonedas.LASTUPDATE * 1000).toLocaleDateString('es-VE')


        // construir template
        console.log(datosMonedas.FROMSYMBOL)
        let templateHTML = `<div class ="card bg-warning">
                  <div class="card-body text-light">
                        <h2 class="card-title">El resultado:</h2>
                  <p>El precio de ${datosMonedas.FROMSYMBOL} a moneda   ${datosMonedas.TOSYMBOL} es de ${precio}</p>
                  <p>Variacion del ultimo dia % ${porcentaje}</p>
                  <p>Ultima actualizacion ${actualizado}</p>
                  </div>
            </div>`


        this.SpinnerVisible('block')

        setTimeout(() => {
            document.getElementById('resultado').innerHTML = templateHTML
            this.SpinnerVisible('none')
        }, 3000)


        //borrar resultado anterior
        if (resultadoAnterior) {
            resultadoAnterior.remove()
        }

    }

    SpinnerVisible(vista) {
        const spinner = document.querySelector('.contenido-spinner')
        spinner.style.display = vista
    }

    // en caso de un resultado anterior



}