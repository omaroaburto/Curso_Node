const argv = require("yargs")
        .options({
            'b':{
                alias: 'base',
                type: 'number',
                demandOption: true   
            },
            'l':{
                alias: 'listar',
                type: 'boolean',
                demandOption: true,
                default: false
            }

        })
        .check((argv,options)=>{
            if(isNaN(argv.b)){
                throw "La base tiene que ser un número"; 
            }else{
                return true;
            }
        })
        .argv;
module.exports = argv;