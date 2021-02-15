const Role = require('../models/role');
const Usuario = require('../models/usuario');
const isRoleValidate = async (rol ='') =>{
    const existRol = await Role.findOne({rol});
    if(!existRol){
        throw new Error(`El rol ${rol} no está registrado en la base de datos.`);
    }
}
const existEmail = async (email)=>{
    const existe = await Usuario.findOne({ email});
    if( existe){
        throw new Error(`El correo ${email} ya está registrado`);   
    }
}

module.exports = {
    isRoleValidate,
    existEmail
}