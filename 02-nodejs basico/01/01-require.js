const fs = require("fs");
const BASE = 5;
let salida = "";
for (let i = 1; i <= 10; i++) {
    salida += `${BASE} X ${i} = ${BASE * i}\n`;
}
fs.writeFile(`texto${BASE}.txt`, salida, (err) => {
    if (err)
        throw err;
    console.log(salida);
});
