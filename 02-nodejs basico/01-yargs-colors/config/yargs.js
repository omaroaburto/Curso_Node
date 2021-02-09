const argv = require("yargs")
        .options({
            'b':{
                alias: 'base',
                type: 'number',
                demandOption: true,
                describe: "Es la base de la sumatoria"  
            },
            'l':{
                alias: 'listar',
                type: 'boolean', 
                default: false,
                describe: "Es la opción para imprimir la lista"
            },
            'h':{
                alias: 'hasta',
                type: 'number', 
                default: 10,
                describe: "Es el n de la sumatoria"
            }

        })
        .check((argv,options)=>{
            if(isNaN(argv.b)){
                throw "La base tiene que ser un número".red.bold; 
            }else{
                return true;
            }
        })
        .argv;
module.exports = argv;