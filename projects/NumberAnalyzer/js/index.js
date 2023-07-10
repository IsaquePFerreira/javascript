let num = document.querySelector('#txtnum')
let listNumber = document.querySelector('#list-number')
let res = document.querySelector('#result')
let numbers = []

function isNumber(number) {
  if (Number(number) >= 1 && Number(number) <= 100) {
    return number
  } else {
    return false
  }
}

function inList(number, list) {
  if (list.indexOf(Number(number)) != -1) {
    return true
  } else {
    return false
  }
}

function addNumber() {
  if (isNumber(num.value) && !inList(num.value, numbers)) {
    numbers.push(Number(num.value))
    let listOption = document.createElement('option')
    listOption.value = `opt${num.value}`
    listOption.text = `Adicionado valor ${num.value}`
    listNumber.appendChild(listOption)
    res.innerHTML = ''
    // for (let i = 0; i < numbers.length; i++) {
    // }
  } else {
    alert('Valor inválido ou já encontrado na lista.')
  }
  num.value = ''
  num.focus()
}

function finish() {
  let tot = numbers.length
  let great = numbers[0]
  let less = numbers[0]
  let sum = 0
  let media = 0

  if (!numbers.length == 0) {
    for (const pos in numbers) {
      if (numbers[pos] > great) {
        great = numbers[pos]
      } if (numbers[pos] < less) {
        less = numbers[pos]
      }
      sum += numbers[pos]
      media = sum / numbers.length
    }
      res.innerHTML = ''
      res.innerHTML += `<p>Ao todo, temos ${tot} números cadastrados.</p>`
      res.innerHTML += `<p>O maior número ${great} e o menor foi ${less}</p>`
      res.innerHTML += `<p>A soma de todos os números é: ${sum}</p>`
      res.innerHTML += `<p>A media de todos os números é: ${media}</p>`
  } else {
    alert('[ERRO] A lista está vazia.')
  }
}
