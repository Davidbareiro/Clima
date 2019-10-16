

const axios = require('axios')



const  getLugarLatLng =  async (dir) => {

    
const encodeUrl = encodeURI(dir)
 

const instance = axios.create({
    baseURL: `https://devru-latitude-longitude-find-v1.p.rapidapi.com/latlon.php?location=${encodeUrl}`,
 
    headers: {'x-rapidapi-key': 'adebcd238emsh73b2df5797a57d4p1c8b89jsn063f3f9a440a'}
  });

 const resp =  await instance.get () 

  if (resp.data.Results.length===0 ) {
      throw new Error (`No hay datos para ${ dir}` )
  }

  const data = resp.data.Results[0]

  const direccion = data.name
  const lat = data.lat
  const lng = data.lon

  return {
      direccion, 
      lat,  
      lng

  }

}


module.exports =  {

    getLugarLatLng
}