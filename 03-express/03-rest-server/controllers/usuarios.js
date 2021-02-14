const {
    request,
    response
} = require("express");

const getUsuarios = (req = request, res = response)=>{
    const {q, nombre, apiKey} =  req.query;
    res.json({
        msg:"api get",
        q,
        nombre,
        apiKey
    });
}

const postUsuarios = (req = request, res = response)=>{
    const { nombre, edad} = req.body;
    res.json({
        msg:"api post",
        nombre,
        edad
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
