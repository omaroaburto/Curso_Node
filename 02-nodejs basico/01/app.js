const { sumatoria } = require("./helpers/sumar");
const B = 3;
sumatoria(B)
    .then(respuesta => console.log(respuesta))
    .catch(err => console.log(err));
