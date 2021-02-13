const inquirer = require("inquirer"); 
require("colors");

const preguntas = [
    {
        type: 'list',
        name: 'opcion',
        message: '¿Qué desea hace?',
        choices: [
            {
                value: 1,
                name: `${'1.'.green} Buscar ciudad`
            },
            {
                value: 2,
                name: `${'2.'.green} Ver historial`
            },
            {
                value: 0,
                name: `${'0.'.green} Salir`
            } 
        ]
    }
];
const inquirerMenu = async ()=>{
    console.clear();
    console.log("__________________________".green);
    console.log("  Selecciones una opción  ".blue);
    console.log("__________________________\n".green);
    const {opcion} = await inquirer.prompt(preguntas);  
    return opcion;
}

const pausar = async () =>{
    const pausaOp = [
        {
            type: 'input',
            name: 'enter',
            message: `Presione ${'enter'.green} para continuar ....`
        }
    ];
    await inquirer.prompt(pausaOp); 
}

const leerInput = async (message) =>{
    const question = [
        {
            type : 'input',
            name: 'descripcion',
            message,
            validate(value){
                if(value.length === 0){
                    return 'Ingrese un valor';
                }
                return true;
               
            }
        }
    ];
    const {descripcion} = await inquirer.prompt(question);
    return descripcion;
}

const listarLugares = async(lugares = [])=>{
    const choices = lugares.map((lugar, index) =>{
        const i = `${index+1}`.green;
        return {
            value: lugar.id,
            name: `${i} ${lugar.nombre}`.green
        }
    });

    choices.unshift({
        value:'0',
        name: '0.'.green+' Cancelar'
    });

    const question = [
        {
            type:'list',
            name: 'id',
            message: 'Seleccione lugar:',
            choices
        }
    ];
    const {id} = await inquirer.prompt(question);  
    return id;
}

const confirmar = async (message) =>{
    const question = [
        {
            type: 'confirm',
            name: 'ok',
            message
        }
    ];

    const {ok} = await inquirer.prompt(question);  
    return ok;
}


const mostrarListadoCheckList = async(tareas = [])=>{
    const choices = tareas.map((tarea, index) =>{
        const i = `${index+1}`.green;
        return {
            value: tarea.id,
            name: `${i} ${tarea.descripcion}`,
            checked: (tarea.completado)?true: false
        }
    }); 

    const question = [
        {
            type:'checkbox',
            name: 'ids',
            message: 'Selecciones',
            choices
        }
    ];
    const {ids} = await inquirer.prompt(question);  
    return ids;
}

module.exports = {
    inquirerMenu,
    pausar,
    leerInput,
    listarLugares,
    confirmar,
    mostrarListadoCheckList
}