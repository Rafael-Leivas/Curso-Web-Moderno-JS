function valores(a, b, c){
    if (a == b && b == c){
        console.log('Este triângulo é Equilátero')
    }else if (a == b || a == c || b == c){
        console.log('Este triângulo é Isóceles')
    }else{
        console.log('Escaleno')
    }
}

valores(3,3,3)
valores(3,3,1)
valores(3,2,1)