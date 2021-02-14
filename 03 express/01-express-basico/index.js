const express = require('express');
const app = express();
const port = 3000;
//página estática
app.use(express.static('public'));

//url s
app.get('/', (req, res)=>{
    res.send('Home page');
});

app.get('/hola-mundo',(req, res)=>{
    res.send('Hola mundo');
});

app.get('*', (req, res)=>{
    res.sendFile(`${__dirname}/public/404.html`);
});

app.listen(port, ()=>{
    console.log(`El app está corriendo por el puerto ${port}.\n`);
});