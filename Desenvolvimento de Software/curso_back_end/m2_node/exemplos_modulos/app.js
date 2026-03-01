var pessoa = require("./commons/pessoa.js")
var soma = require("./commons/soma.js")
var imposto = require("./commons/calculaimposto.js")
var calculadora = require("./commons/calculadora.js")

luiz = pessoa()

console.log(JSON.stringify(luiz))
console.log(soma(2, 5))


console.log("Valor do produto com imposto: " + imposto.adiciona(10))
console.log("Valor do imposto: " + imposto.valor(10))
console.log("Valor da taxa: " + imposto.taxa)


console.log("Valor da soma e: " + calculadora.soma(2, 4))
console.log("Valor da divisao e: " + calculadora.divisao(20, 5))



