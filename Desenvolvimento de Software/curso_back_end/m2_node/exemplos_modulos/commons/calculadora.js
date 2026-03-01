exports.soma = function name(a, b) {
  return a + b
}

exports.divisao = function name(a, b) {
  if (a <= 0) {
    console.log("Divisao por 0 nao e possivel")
  } else {
    return a / b
  }
}
