function jurosSiples(capital,taxajuros,tempo){
    return capital + (capital * taxajuros * tempo)
}

function jurosCompostos(capital,taxajuros1,tempo){
    return capital * ((1 + taxajuros1) ** tempo)
}

console.log(jurosSiples(100, 10/100, 2))
console.log(jurosCompostos(100, 10/100, 2));
