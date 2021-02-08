type Empleado = {
    id:number;
    nombre:string;
}
type Salario={
    id:number;
    salario:number;
}
const empleados:Empleado[] = [
    {
        id: 1,
        nombre: "Fernanda"
    },
    {
        id: 2,
        nombre: "Omaro"
    },
    {
        id: 3,
        nombre: "Juan"
    },
];

const salarios:Salario[] = [
    {
        id: 1,
        salario: 1000
    },
    {
        id: 2,
        salario: 1500
    }
];

const getEmpleado = (id:number, callbackEmpleado:Function)=>{
    const empleado = empleados.find(e => e.id === id);
    if(empleado){
        callbackEmpleado(null, empleado);
    }else{
        callbackEmpleado(`Empleado con id ${id} no existe.`);
    }
}
const getSalario = (id:number, callbackSalario:Function)=>{
    const salario = salarios.find(x => x.id === id);
    if(salario){
        callbackSalario(null, salario);
    }else{
        callbackSalario(`No existe el salario del empleado con el id ${id}`);
    }
}

const id:number = 3;
getEmpleado(id,(err:any, empleado:Empleado)=>{
    if(err){
        console.log('ERROR');
        return console.log(err);
    }else{ 
        console.log(empleado);
    }
});

getSalario(id,(err:any, salario:Salario)=>{
    if(err){
        console.log("ERROR");
        return console.log(err);
    }else{
        console.log(salario);
    }
})