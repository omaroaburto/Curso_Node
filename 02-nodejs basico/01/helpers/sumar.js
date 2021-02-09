const fs = require("fs");
const colors = require("colors");
const sumatoria = async (base = 1, listar) => {
    try {
        let salida = "";
        for (let i = 1; i <= 10; i++) {
            salida += `${base} + ${i} = ${base + i}\n`;
        }
        if(listar){
            console.log(salida.blue);
        }
        fs.writeFileSync(`texto${base}.txt`, salida);
        return `se ha imprimido la sumatoria`;
    }
    catch (error) {
        return error;
    }
};
module.exports = {
    sumatoria
};
