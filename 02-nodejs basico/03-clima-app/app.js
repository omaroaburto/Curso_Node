require('dotenv').config();
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
                const lugarSeleccionado = lugares.find(l => l.id === idSeleccionado);
      
                //desplegar información de lugar seleccionado
                console.log("\nInformación de la ciudad");
                console.log('Ciudad : ', lugarSeleccionado.nombre);
                console.log('Lat :', lugarSeleccionado.lng);
                console.log('Lng : ', lugarSeleccionado.lat);
                console.log('Temperatura : ',);
                console.log('Mínima : ',);
                console.log('Máxima : ',);
                console.log('\n');
                break;
        
            case 2:
                console.log({opt});
                break;
        }
        await pausar();
    } while (opt!=0);
}

main();