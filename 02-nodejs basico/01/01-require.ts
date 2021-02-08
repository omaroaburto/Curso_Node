 
const fs = require("fs");
const BASE:number = 5;

let salida:string="";
for(let i=1; i<=10;i++){
    salida+=`${BASE} X ${i} = ${BASE*i}\n`;
}

fs.writeFile(`texto${BASE}.txt`,salida, (err:any)=>{
    if(err) throw err;
    console.log(salida);
})
