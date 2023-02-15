function triangulo(lado1,lado2,lado3){
    if(lado1 == lado2 && lado2 == lado3){
        console.log('É um triângulo Equilátero')
    }else if(lado1 != lado2 && lado2 != lado3){
        console.log('É um triângulo Escaleno')
    }else if(lado1 == lado2 || lado2 == lado3 || lado1 == lado3){
        console.log('É um triângulo Isósceles')
    }
}

triangulo(2, 2, 2)
triangulo(2, 3, 3)
triangulo(2, 3, 4)
