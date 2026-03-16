

function verificarParidade(numero){
    if(numero % 2 == 0) {
        return true;
    }
    else {
        return false;
    }
}


function apresentarMensagemParidade(numero){
      if (verificarParidade(numero)) {
        console.log(`${numero} é par`)
     } else {
        console.log(`${numero} é impar`)
     }

}

apresentarMensagemParidade(45)