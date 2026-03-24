let texto = "bombeiro";

function imprimirTexto(texto){
   console.log(texto)
}

imprimirTexto(`eu sou seu bom, seu bom, seu bom, ${texto}`);
imprimirTexto("vai teia...");


console.log(`3 + 5 = ${executarOperacao(somar, 3, 5)}`);


function executarOperacao(operacao, a, b){
    return operacao(a, b);
}
