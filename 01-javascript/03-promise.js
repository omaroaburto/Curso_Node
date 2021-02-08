const mascotas = [
    {
        id: 1,
        nombre: "pelusa"
    },
    {
        id: 2,
        nombre: "choco"
    },
    {
        id: 3,
        nombre: "chanchoman"
    },
];
const edades = [
    {
        id: 1,
        edad: 12
    },
    {
        id: 2,
        edad: 2
    },
    {
        id: 3,
        edad: 5
    }
];
const getMascota = (id) => {
    const mascota = mascotas.find(e => e.id === id);
    return new Promise((resolve, reject) => {
        (mascota)
            ? resolve(mascota.nombre)
            : reject(`No existe la mascota con id ${id}`);
    });
};
const getEdad = (id) => {
    const edad = edades.find(e => e.id === id);
    return new Promise((resolve, reject) => {
        (edad)
            ? resolve(edad.edad)
            : reject(`No existe una mascota con el id ${id}`);
    });
};
const idMascota = 12;
let nombre;
getMascota(idMascota)
    .then(mascota => {
    nombre = mascota;
    return getEdad(idMascota);
})
    .then(edad => console.log(`La edad de ${nombre} es ${edad}.`))
    .catch(err => console.log(err));
