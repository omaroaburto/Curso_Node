const {Router} = require("express");
const { 
    getUsuarios, 
    postUsuarios, 
    putUsuarios,
    deleteUsuarios,
    patchUsuarios
} = require("../controllers/usuarios");

const router = Router();
//rutas
router.get('/', getUsuarios);

router.post('/', postUsuarios);

router.put('/:id', putUsuarios);

router.delete('/', deleteUsuarios);

router.patch('/', patchUsuarios);

module.exports = router;