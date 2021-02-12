const { 
    inquirerMenu, 
    pausar 
} = require("./helpers/inquirer");
const Busquedas = require("./models/busquedas");

const main = async ()=>{
    const busqueda = new Busquedas();
    let opt ;
    do {
        opt = await inquirerMenu();
        switch (opt) {
            case 1:
                console.log({opt});
                break;
        
            case 2:
                console.log({opt});
                break;
        }
        await pausar();
    } while (opt!=0);
}

main();