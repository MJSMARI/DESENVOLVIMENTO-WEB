//CARREGA FRAMEWORK EXPRESS
const express = require('express');

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

//FORMA DE CRIAR UMA FUNÇÃO, SEM DEFINIR ELA.
app.listen(PORT, ()=>{
    console.log('app rodando na porta ' + PORT);
});

