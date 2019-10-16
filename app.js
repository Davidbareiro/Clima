
const axios = require('axios')
const lugar = require ('./lugar/lugar.js')
const clima = require ('./clima/clima.js')

const argv = require('yargs').options ({
    direccion: {
        alias:'d', 
        desc: 'Nombre de la ciudad para obtener el clima', 
        demand: true

    }
}).argv;





const getInfo = async (ciudad) => {

    try {

        const coordenadas = await lugar.getLugarLatLng (ciudad); 
        const temp        = await clima.getClima (coordenadas.lat, coordenadas.lng);
        
        return `La temperatura de la ciudad ${ciudad}  es de ${temp}.`

    } catch (error) {
        return (`No se pudo obtener la temperatura de la ciudad ${ciudad}`)        
    }
}

getInfo(argv.direccion)
.then (console.log )
.catch (console.log )
