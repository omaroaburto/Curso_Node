require("colors");
const {mostrarMenu, pausa} = require("./helpers/mensajes")
const main = async() =>{
    let apt= '';
    do {
        apt = await mostrarMenu();
        console.log({apt})
        if(apt==='0')await pausa();
    } while (apt !== '0');
}

main();