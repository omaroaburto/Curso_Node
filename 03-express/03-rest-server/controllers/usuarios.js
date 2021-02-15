const {
    request,
    response
} = require("express");
const bcryptjs =  require('bcryptjs');
const Usuario = require('../models/usuario');

const getUsuarios = (req = request, res = response)=>{
    const body =  req.query;
    res.json({
        msg:"api get",
        body
    });
}

//post usuarios 
const postUsuarios = async (req = request, res = response)=>{
    const {name, email, password, role} = req.body;
    const usuario = new Usuario({name, email, password, role});
    //verificar si el correo existe
    
    //encriptar contraseña
    const salt = bcryptjs.genSaltSync();//nivel de encriptación
    usuario.password = bcryptjs.hashSync(password, salt);//encriptar contraseña
    //guardar en base de datos
    await usuario.save();
    res.json({ 
        usuario
    });
}

const putUsuarios = (req = request, res = response)=>{
    const id = req.params;
    res.json({
        msg:"api put"
    });
}

const deleteUsuarios = (req = request, res = response)=>{
    res.json({
        msg:"api delete"
    });
}

const patchUsuarios = (req = request, res = response)=>{
    res.json({
        msg:"api patch"
    });
}

module.exports = {
    getUsuarios,
    postUsuarios,
    putUsuarios,
    deleteUsuarios,
    patchUsuarios
}
