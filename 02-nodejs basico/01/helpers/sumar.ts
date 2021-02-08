
var fs = require("fs");
const sumatoria = async(base=1):Promise<any>=>{
   try {
        let salida:string="";
        for(let i=1; i<=10;i++){
            salida+=`${base} + ${i} = ${base+i}\n`;
        }
        fs.writeFileSync(`texto${base}.txt`,salida);
        return `se ha imprimido la sumatoria`;
        
   } catch (error) {
        return error;
   }
}
module.exports = {
    sumatoria
}