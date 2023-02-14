//pessoa -> 123 -> {...}
const pessoa = { nome:'Joao'}
pessoa.nome = 'pedro'
console.log(pessoa)

//pesso -> 456 -> {...}
//pessoa = {nome: 'Ana'}

Object.freeze(pessoa)

pessoa.nome = 'Maria'
console.log(pessoa.nome)