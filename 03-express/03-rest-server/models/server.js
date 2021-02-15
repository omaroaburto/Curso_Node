const express =  require("express");
const cors = require("cors");
const { dbConnection } = require("../database/config");

class Server{
    constructor(){
        this.app =  express();
        this.port = process.env.PORT;
        //Middlewares
        this.middlewares();
        //rutas
        this.routes();
        //conexión de base de datos
        this.conectarDB();
    }

    middlewares(){
        //cors
        this.app.use(cors());
        //Lectura y parseo del body
        this.app.use(express.json());
        //directorio público
        this.app.use(express.static('public'));
    }

    //método de controla las rutas
    routes(){

        this.app.use('/api/usuarios', require('../routes/usuarios'));
    }

    listen(){
        this.app.listen(this.port,()=>{
            console.log("La aplicación está corriendo por el puerto ",this.port);
        })
    }

    async conectarDB(){
        await dbConnection();
    }

}

module.exports = Server;