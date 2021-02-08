const {sumatoria:any} = require("./helpers/sumar");
const B:number = 3;
sumatoria(B)
    .then(respuesta => console.log(respuesta))
    .catch(err => console.log(err));