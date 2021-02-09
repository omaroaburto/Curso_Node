const { sumatoria } = require("./helpers/sumar");
const argv = require("./config/yargs");
const colors = require("colors")

console.clear(); 
 
sumatoria(argv.b, argv.l, argv.h)
    .then(resp => console.log(colors.green('%s'),resp))
    .catch(er => console.log(er));
