const {v4: uuidv4} = equire("uuid");

class tarea{
    id =  "";
    descripcion = "";
    completado = null;
    
    constructor(descripcion){ 
        this.uuidv4();
        this.descripcion = descripcion;
        this.completado = null; 
    }
}

module.exports = tarea;