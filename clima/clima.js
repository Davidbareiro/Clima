

const axios = require('axios');

const getClima = async (lat, lng) => {

  const resp = await  axios.get (`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=ec8d83cdce2fac9cab5ac8cd1cb89280&units=metric`)

    return resp.data.main.temp


}

module.exports = {
    getClima
}