const getUsuarioById = (id:number, callback:Function)=>{
    const usuario:{id:number, nombre:string} ={
        id,
        nombre: "Omaro",
    }
    setTimeout(()=>{
        callback(usuario)
    },1500)
}
getUsuarioById(10, (usuario:any):void=>{
    console.log(usuario.id)
    console.log(usuario.nombre)
});