const express = require('express')
const app = express()
const port = 3000
const path = require('path');
app.use(express.static('public'));


app.listen(3000, ()=>{
    console.log('Servidor funcionando');
});

app.get('/iniciosesion', (req,res)=>{
    res.sendFile(__dirname + '/views/inicio_sesion.html');
});

app.get('/index', (req,res)=>{
    res.sendFile(__dirname + '/views/index.html');
});

app.get('/prueba', (req,res)=>{
    res.sendFile(__dirname + '/views/prueba.html');
});