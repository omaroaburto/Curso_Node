require("colors");
const { guardarDB, LeerDB } = require("./helpers/guardarArchivo");
const {
    inquirerMenu, 
    pausar, 
    leerInput,
    listadoTareasBorrar,
    confirmar,
    mostrarListadoCheckList
} = require("./helpers/inquirer"); 
const Tareas = require("./models/tareas")

const main = async() =>{
    
    let opt= '';
    const tareas =  new Tareas();
    const tareasDB = LeerDB();

    if(tareasDB){
        tareas.cargarTareasFromArray(tareasDB);   
    }
    
    do {
        opt = await inquirerMenu(); 

        switch (opt) {
            case '1'://crear tarea            
                const des = await leerInput('Descripción: ');
                tareas.crearTarea(des);
                break;
            case '2': //lista de tareas
                tareas.listadoCompleto();
                break;
            case '3'://listado de tareas completadas
                tareas.listarPendienteCompletada(true);
                break;
            case '4'://listado de tareas pendientes
                tareas.listarPendienteCompletada(false);
                break;  
            case '5'://cambiar estado de tarea
                const ids = await mostrarListadoCheckList(tareas.listadoArr);
                tareas.toggleCompletadas(ids);
                break;
            case '6'://borrar tarea
                const id = await listadoTareasBorrar(tareas.listadoArr);
                if(id!=='0'){
                    const confirmDelete = await confirmar('¿Está seguro?');
                    if(confirmDelete){
                        tareas.borrarTarea( id );
                        console.log('Tarea Borrada');
                    }
                }
                break;  
        }
        
        guardarDB(tareas.listadoArr);
        await pausar();
    } while (opt !== '0');
}

main();