require("colors");
const {inquirerMenu, pausar} = require("./helpers/inquirer");
const Tareas = require("./models/tareas")
const main = async() =>{
    let apt= '';
    const tareas =  new Tareas();
    
    do {
        apt = await inquirerMenu();
        console.log({apt});
        await pausar();
    } while (apt !== '0');
}

main();