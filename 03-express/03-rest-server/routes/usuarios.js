const {Router} = require("express");
const { 
    getUsuarios, 
    postUsuarios, 
    putUsuarios,
    deleteUsuarios,
    patchUsuarios
} = require("../controllers/usuarios");

const router = Router();

router.app.get('/', getUsuarios);

router.app.post('/', postUsuarios);

router.app.put('/', putUsuarios);

router.app.delete('/', deleteUsuarios);

router.app.delete('/', patchUsuarios);

module.exports = router;