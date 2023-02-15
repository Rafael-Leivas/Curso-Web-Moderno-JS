function divisao(dividendo,divisor){
    const resultado = dividendo / divisor

    console.log('O resultado é ', Math.floor(resultado))
    console.log(`Resto: ${dividendo % divisor}`)
}

divisao(11,4)