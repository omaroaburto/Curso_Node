const axios = require("axios");
class Busquedas{
    historial = ["Coronel", "Concepción", "Lota"];
    constructor (){
        //leer db
    }
    get paramsMapBox(){
        return{
            'access_token':process.env.MAPBOX_KEY,
            'limit': 5,
            'language':'es'
        }
    }

    async ciudad( lugar ='' )
    {
        try {
            //petición http 
            const instance = axios.create({
                baseURL:`https://api.mapbox.com/geocoding/v5/mapbox.places/${lugar}.json`,
                params: this.paramsMapBox
            })
            const respuesta = await instance.get(); 
            return respuesta.data.features.map(lugar =>({
                id : lugar.id,
                nombre: lugar.place_name,
                lng: lugar.center[0],
                lat: lugar.center[1]
            }));
        } catch (error) {
            console.log(error);
            return [];
        }
    }
}
module.exports = Busquedas;