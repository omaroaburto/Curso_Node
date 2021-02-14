const express = require('express');
const hbs = require('hbs');
const app = express();
require('dotenv').config();
const port = process.env.PORT;
const dir = `${__dirname}/public`;
const dirHBS =`${__dirname}/views/partials`;

hbs.registerPartials(dirHBS, (err)=>{ });
app.set('view engine','hbs');
app.use(express.static('public'));
app.get('/', (req, res)=>{
    res.render('home', {
        'titulo':'Veterinaria',
        'nombre':'Perritos Coronel',
        'datos': 'caminar'
    });
});
 
app.get('/generic', (req, res)=>{
    res.render('generic');
});

app.get('/elements', (req, res)=>{
    res.render('elements');
});

app.listen(port, ()=>{
    console.log(`esta aplicación está corriendo por el puerto:${port}`);
});