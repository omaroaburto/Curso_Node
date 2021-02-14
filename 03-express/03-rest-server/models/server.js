const express =  require("express");
class Server{
    constructor(){
        this.app =  express();
        this.port = process.env.PORT;
        //Middlewares
        this.middlewares();
        //rutas
        this.routes();
    }

    middlewares(){
        //directorio público
        this.app.use(express.static('public'));
    }

    //método de controla las rutas
    routes(){
        this.app.get('/api', (req, res)=>{
            res.send("Inicio");
        });
    }
    listen(){
        this.app.listen(this.port,()=>{
            console.log("La aplicación está corriendo por el puerto ",this.port);
        })
    }

}

module.exports = Server;