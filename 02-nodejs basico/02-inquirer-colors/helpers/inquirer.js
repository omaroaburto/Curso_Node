const inquirer = require("inquirer");
const { pausa } = require("./mensajes");
require("colors");

const preguntas = [
    {
        type: 'list',
        name: 'opcion',
        message: '¿Qué desea hace?',
        choices: [
            {
                value: '1',
                name: `${'1.'.green} Crear tarea`
            },
            {
                value: '2',
                name: `${'2.'.green} Litar tareas`
            },
            {
                value: '3',
                name: `${'3.'.green} Listar Tareas completadas`
            },
            {
                value: '4',
                name: `${'4.'.green} Listar Tareas pendientes`
            },
            {
                value: '5',
                name: `${'5.'.green} Completar Tarea(s)`
            },
            {
                value: '6',
                name: `${'6.'.green} Borrar Tarea`
            },
            {
                value: '0',
                name: `${'0.'.green} Salir`
            },
        ]
    }
];

const pausaOp = [
    {
        type: 'input',
        name: 'pausa',
        message: `Presione ${'Enter'.green} para continuar ....`
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
    await inquirer.prompt(pausaOp);
    return pausa;
}

module.exports = {
    inquirerMenu,
    pausar
}