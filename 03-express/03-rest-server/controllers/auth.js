const {
    request,
    response
} = require("express");
const Usuario = require('../models/usuario');
const bcryptjs = require('bcryptjs');
const { createJWT } = require("../helpers/create-jwt");

const login =  async(req = request, res = response)=>{
    const {email, password} = req.body;
    //verificar si email existe
    const usuario = await Usuario.findOne({email});
    if(!usuario){
        return res.status(400).json({
            msg:'Usuario/password no son correctos - email'
        });
    }
    //verificar si usuario está activo
    if(!usuario.status){
        return res.status(400).json({
            msg:'Usuario/password no son correctos - estado = false'
        });
    }
    //verificar la contraseña
    const validatePassword = bcryptjs.compareSync(password, usuario.password);

    if(!validatePassword){
        return res.status(400).json({
            msg:'Usuario/password no son correctos - password'
        });
    }
    //generar json web token

    const token = await createJWT(usuario.id );
    try {
        res.status(500).json({
            usuario,
            token
        });
    } catch (error) {
        console.log(error);
        res.status(500).json({
            msg:'Hable con el administrador'
        });
    }
    
}

module.exports = {
    login
}