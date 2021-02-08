type Animal={
    id:number;
    nombre:string;
}
type Edad = {
    id:number;
    edad:number;
}

const mascotas:Animal[]=[
    {
        id:1,
        nombre:"pelusa"
    },
    {
        id:2,
        nombre:"choco"
    },
    {
        id:3,
        nombre:"chanchoman"
    },
];

const edades:Edad[] = [
    {
        id:1,
        edad:12
    },
    {
        id:2,
        edad:2
    },
    {
        id:3,
        edad:5
    }
];

const getMascota = (id:number)=>{
    const mascota =  mascotas.find(e=>e.id===id);
    return new Promise((resolve:Function, reject:Function)=>{
        (mascota)
            ?resolve(mascota.nombre)
            :reject(`No existe la mascota con id ${id}`);  
    });
     
};

const getEdad = (id:number) =>{
    const edad = edades.find(e=>e.id === id);
    return new Promise((resolve:Function, reject:Function)=>{
        (edad)
            ?resolve(edad.edad)
            :reject(`No existe una mascota con el id ${id}`);
    });
}

const idMascota:number=12;
let nombre:any;
getMascota(idMascota)
    .then(mascota =>{
        nombre = mascota;
        return getEdad( idMascota );
    })
    .then(edad => console.log(`La edad de ${nombre} es ${edad}.`))
    .catch(err => console.log(err));

/*
getMascota(idMascota)
    .then( mascota =>console.log(mascota) )
    .catch( err => console.log(err) );


getEdad(idMascota)
    .then( edad => console.log(edad) )
    .catch( err =>console.log(err) )

getMascota(idMascota)
    .then(mascota=> {
        getEdad(idMascota)
            .then(edad => console.log(`La mascota ${mascota} tiene una edad de ${edad} años.`))
            .catch(err => console.log(err))
    })
    .catch(err => console.log(err))
*/

