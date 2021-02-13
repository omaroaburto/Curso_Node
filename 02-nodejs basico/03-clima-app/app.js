require('dotenv').config();
require('colors');
const { 
    inquirerMenu, 
    pausar, 
    leerInput,
    listarLugares
} = require("./helpers/inquirer");
const Busquedas = require("./models/busquedas");

const main = async ()=>{
    const busqueda = new Busquedas();
    let opt ;
    do {
        opt = await inquirerMenu();
        switch (opt) {
            case 1:
                //mostrar mensajes
                const terminoBusqueda = await leerInput('Ciudad: ');
                //buscar lugares    
                const lugares = await busqueda.ciudad(terminoBusqueda);
                //seleccionar el lugar
                const idSeleccionado = await listarLugares(lugares);
                if(idSeleccionado==='0') continue;
                const lugarSeleccionado = lugares.find(l => l.id === idSeleccionado);
                //guardar búsqueda en db
                busqueda.agregarHistorial(lugarSeleccionado.nombre);
                //obtener clima de lugar seleccionado
                const clima = await busqueda.climaLugar(lugarSeleccionado.lat, lugarSeleccionado.lng);
     
                //desplegar información de lugar seleccionado
                console.log("\nInformación de la ciudad");
                console.log('Ciudad : ', lugarSeleccionado.nombre);
                console.log('Lat :', lugarSeleccionado.lng);
                console.log('Lng : ', lugarSeleccionado.lat);
                console.log('Temperatura : ',clima.temperatura );
                console.log('Mínima : ',clima.minima);
                console.log('Máxima : ', clima.maxima);
                console.log('clima: ', clima.desc);
                console.log('\n');
                break;
        
            case 2:
                busqueda.historialCapitalizado.forEach((lugar, index) =>{
                    const idx = `${index+1}).`.green;
                    console.log(`${idx} ${lugar}.`)
                })
                break;
        }
        await pausar();
    } while (opt!=0);
}

main();