const {Router} = require("express"); 
const { check } = require("express-validator");
const { 
    getUsuarios, 
    postUsuarios, 
    putUsuarios,
    deleteUsuarios,
    patchUsuarios
} = require("../controllers/usuarios");
const { 
    isRoleValidate, 
    existEmail 
} = require("../helpers/db-validators");
const { validateUser } = require("../middlewares/validate");

const router = Router();
//rutas
router.get('/', getUsuarios);

router.post('/',[
    check('name','El nombre es obligatorio').not().isEmpty(),
    check('password','El password debe ser mayor a 6 letras').isLength({ min:6}),
    check('email', 'El correo es obligatorio').isEmail(),
    check('email').custom(existEmail),
    //check('role','No es un rol válido').isIn(['ADMIN_ROLE', 'USER_ROLE']),
    check('role').custom(isRoleValidate ),
    validateUser
],postUsuarios);

router.put('/:id', putUsuarios);

router.delete('/', deleteUsuarios);

router.patch('/', patchUsuarios);

module.exports = router;