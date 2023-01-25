function calcularHipotenusa(catetoOposto, catetoAdjacente) {
  if (typeof catetoOposto != 'number' || typeof catetoAdjacente != 'number') {
    return null
  }
  return Math.sqrt(Math.pow(catetoOposto, 2) + Math.pow(catetoAdjacente, 2))
}
console.log(calcularHipotenusa(4, 3))
