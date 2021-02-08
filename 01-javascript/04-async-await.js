const estudiantes = [
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
const notas = [
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
const setEstudiante = (id) => {
    const estudiante = estudiantes.find(e => e.id === id);
    return new Promise((resolve, reject) => {
        (estudiante)
            ? resolve(estudiante)
            : reject(`No existe un estudiante con el id ${id}.`);
    });
};
const setNota = (id) => {
    const nota = notas.find(e => e.id === id);
    return new Promise((resolve, reject) => {
        (nota)
            ? resolve(nota)
            : reject(`No existen notas registradas con el estudiante id ${id}.`);
    });
};
const getInfoUsuario = async (id) => {
    try {
        const estudiante = await setEstudiante(id);
        const nota = await setNota(id);
        return `El estudiante ${estudiante.nombre} tiene una nota final ${nota.nota}.`;
    }
    catch (error) {
        return error;
    }
};
const idEstudiante = 2;
getInfoUsuario(idEstudiante)
    .then(msg => console.log(msg))
    .catch(error => console.log(error));
