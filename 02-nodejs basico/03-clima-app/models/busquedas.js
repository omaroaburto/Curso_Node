const fs = require("fs");
const axios = require("axios");
class Busquedas{
    historial = []; 
    dbPath = './db/database.json';
    constructor (){
        //leer db
        this.leerDB();
    }
    get historialCapitalizado(){
        let aux = []
        for(let historia of this.historial){
            aux.push(historia.replace(/\w\S*/g, (w) => (w.replace(/^\w/, (c) => c.toUpperCase()))));
        }
        return aux;
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
            });
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

    get paramsOpenWeatherMap(){ 
        return({
            'appid':process.env.OPENWEATHERMAP_KEY,
            'units':'metric',
            'lang':'es'
        });
    }
    async climaLugar(lat=0, lon=0){ 
        
        try {
            const instance = axios.create({
                baseURL: `https://api.openweathermap.org/data/2.5/weather`,
                params: {...this.paramsOpenWeatherMap, lat, lon}
            });
            const respuesta = await instance.get();
            const { weather,main} = respuesta.data;
        
            return {
                desc: weather[0].description,
                temperatura: main.temp,
                minima: main.temp_min,
                maxima: main.temp_max,       
            };

        } catch (error) {   
            return [];
        }
            
    }
    agregarHistorial( lugar=''){
        if(this.historial.includes(lugar.toLocaleLowerCase())){
            return;
        }
        this.historial.unshift(lugar.toLocaleLowerCase());
        this.guardarDB();
    }
    guardarDB(){
        const payload = {
            historial: this.historial
        };
        fs.writeFileSync(this.dbPath, JSON.stringify(payload));
    }
    leerDB(){
        if(!fs.existsSync(this.dbPath)){
            return null;
        }
        const info = fs.readFileSync(this.dbPath,{encoding:'utf8'});
        const data = JSON.parse(info);
        this.historial = data.historial;
    }
    
}
module.exports = Busquedas;