//para acessar: C:\Users\maril\DESENVOLVIMENTO-WEB\appweb_calculadora>node .\index.js

//CARREGA FRAMEWORK EXPRESS
const express = require('express');

const calculadora = require('./calculadora');

//CRIA UM APP USANDO A FUNÇÃO EXPRESS()
const app = express();

//DEFINE PORTA DE APLICAÇÃO
const PORT = 8080;

app.get('/', (req, res)=>{
    res.send("<h1>Lucas GAY!</h1> <p>VAI WILSON<p>");
});

app.get('/bem-vindes', (req, res)=>{
    res.send("<h1>Lucas GAYzao!</h1> <p>VAI WILSON<p>");
});

app.get('/OLa/:nome', (req, res)=>{
    res.send(`ola, ${req.params.nome}`);
});  

app.get('/calculadora//somar/:a/:b', (req, res)=>{
    let a = parseInt(req.params.a);
    let b = parseInt(req.params.b);
    let resultado = calculadora.somar(a, b);
    res.send(`${a} + ${b} = ${resultado}`);
});  
 
//FORMA DE CRIAR UMA FUNÇÃO, SEM DEFINIR ELA.
app.listen(PORT, ()=>{
    console.log('app rodando na porta ' + PORT);
});