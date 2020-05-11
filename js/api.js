class Api {
    constructor(apikey) {
            this.apikey = apikey
        }
        //obtener todas las monedas

    async obtenerMonedasApi() {
        const url = 'https://min-api.cryptocompare.com/data/all/coinlist?api_key=${this.apikey}'

        //Fetch a la api
        const urlObtenerMonedas = await fetch(url)
            // respuesta en json 
        const monedas = await urlObtenerMonedas.json()
        return {
            monedas
        }
    }

    async obtenerValores(moneda, criptomoneda) {
        const url = `https://min-api.cryptocompare.com/data/pricemultifull?fsyms=${criptomoneda}&tsyms=${moneda}&api_key=${this.apikey}`

        //consultar la rest api 

        const urlConvertir = await fetch(url)
        console.log('conversion de urlConvertir')
        console.log(urlConvertir)
        const resultado = await urlConvertir.json()

        console.log("El resultados")
        console.log(resultado)
        return {
            resultado
        }
    }
}