const $form = document.querySelector('form')
const $catetoAdjacente = document.querySelector('#catetoAdjacente')
const $catetoOposto = document.querySelector('#catetoOposto')
const $hipotenusa = document.querySelector('#hipotenusa')

function hipotenusa() {
  const catetoAdjacente = $catetoAdjacente.value
  const catetoOposto = $catetoOposto.value

  if (!catetoOposto) {
    createAlert('Insira o valor do cateto oposto')
  } else if (!catetoAdjacente) {
    createAlert('Insira o valor do cateto adjacente')
  } else if (catetoAdjacente <= 0 || catetoOposto <= 0) {
    createAlert('Entre com valores maiores que 0')
  } else {
    $hipotenusa.value = Math.hypot(catetoAdjacente, catetoOposto).toFixed(2)
  }
}

function createAlert(msg) {
  document
    .querySelector('body')
    .insertAdjacentHTML('beforebegin', `<div class='alert'>${msg}</div>`)

  setTimeout(function () {
    deleteAlert()
  }, 3000)
}

function deleteAlert() {
  const list = document.querySelectorAll('.alert')
  for (const item of list) {
    item.remove()
  }
}

$form.addEventListener('submit', function (event) {
  event.preventDefault()
  hipotenusa()
})
