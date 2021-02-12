const Tarea =  require('./tarea');
require('colors')

class Tareas{
    _listado = {};

    constructor(){
        this._listado = {};
    }

    get listadoArr(){
        const listado = [];
        Object.keys(this._listado).forEach(key =>{
            const taks = this._listado[key];
            listado.push(taks);
        });
        return listado; 
    }

    crearTarea(descripcion = ''){
        const tarea = new Tarea(descripcion);
        this._listado[tarea.id] = tarea;
    }

    cargarTareasFromArray( tarea = [] ){
        tarea.forEach( tarea =>{
            this._listado[tarea.id] = tarea;
        });
    }

    listadoCompleto(){
        let datos = '';    
        this.listadoArr.forEach((tarea, i)=>{    
            let {descripcion, completado} = tarea; 
            datos += `${(i+1).toString().green}). ${descripcion} :: ${(completado)?'Completada'.green:'Finalizada'.red}\n`; 
        })
        console.log(datos);
    }

    listarPendienteCompletada( completada = true){
        let datos = '';  
        let i =1;  
        this.listadoArr.forEach((tarea)=>{    
            let {descripcion, completado} = tarea; 
            if(completada){
                if(completado){
                    datos += `${(i++).toString().green}). ${descripcion} :: ${'Completada'.green}\n`;
                }
            }else{
                if(!completado){
                    datos += `${(i++).toString().green}). ${descripcion} :: ${'Finalizada'.red}\n`;
                }
            }
        })
        console.log(datos);
    }

    borrarTarea( id = '' ){
        if(this._listado[id]){
            delete this._listado[id];
        }
    }

    toggleCompletadas(ids = []){
        ids.forEach(id => {
            const tarea = this._listado[id];
            if(!tarea.completado){
                tarea.completado = new Date().toISOString();
            }
        });
        this.listadoArr.forEach( tarea =>{

            if(!ids.includes(tarea.id)){
                this._listado[tarea.id].completado = null;
            }

        });
    }
    
}

module.exports = Tareas;