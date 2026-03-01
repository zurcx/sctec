var taxa = 0.10;

exports.valor = function name(a) {
  return a * taxa
}

exports.adiciona = function name(a) {
  return a + (a * taxa)
}
