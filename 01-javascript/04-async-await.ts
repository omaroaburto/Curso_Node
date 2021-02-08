type Estudiante = {
    id:number;
    nombre:string;
}
type Nota = {
    id:number;
    nota:number;
}

const estudiantes:Estudiante[] = [
    {
        id: 1,
        nombre: "Omaro Aburto"
    },
    {
        id: 2,
        nombre: "Juan Leiva"
    },
    {
        id: 3,
        nombre: "Héctor Cristi"
    }
];

const notas:Nota[] = [
    {
        id: 1,
        nota: 7
    },
    {
        id: 2,
        nota: 5
    },
    {
        id: 3,
        nota: 4.2
    },
];

const setEstudiante = (id:number) => {
    const estudiante = estudiantes.find(e => e.id === id);
    return new Promise((resolve:Function, reject:Function)=>{
        (estudiante)
            ?resolve(estudiante)
            :reject(`No existe un estudiante con el id ${ id }.`);
    });
}

const setNota = (id:number) =>{
    const nota = notas.find(e=>e.id === id);
    return new Promise((resolve:Function, reject:Function)=>{
        (nota)
            ?resolve(nota)
            :reject(`No existen notas registradas con el estudiante id ${ id }.`);
    })
}

const getInfoUsuario = async (id:number) => {
    try {
        const estudiante:any = await setEstudiante(id);
        const nota:any = await setNota(id);
        return `El estudiante ${estudiante.nombre} tiene una nota final ${nota.nota}.`;
    } catch (error) {
        return error;
    }
}

const idEstudiante:number = 2;
getInfoUsuario(idEstudiante)
    .then(msg => console.log(msg))
    .catch(error => console.log(error));

