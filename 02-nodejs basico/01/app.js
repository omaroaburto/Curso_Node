const { sumatoria } = require("./helpers/sumar");
const argv = require("./config/yargs");

console.clear(); 
 
sumatoria(argv.b, argv.l)
    .then(resp => console.log(resp))
    .catch(er => console.log(er));
