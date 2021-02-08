const { sumatoria } = require("./helpers/sumar");
console.clear();
console.log(process.argv);
const [, , argv3 = 'base=5'] = process.argv;
const [, numero] = argv3.split("=");
const BC = parseInt(numero);
sumatoria(BC)
    .then(respuesta => console.log(respuesta))
    .catch(err => console.log(err));
