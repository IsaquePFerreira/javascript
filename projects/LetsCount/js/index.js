function countNumbers() {
  var startValue = Number(document.querySelector('#start-value').value)
  var endValue = Number(document.querySelector('#end-value').value)
  var stepValue = Number(document.querySelector('#step-value').value)
  var result = document.querySelector('#result')

  if (startValue.length == 0 || endValue.length == 0 || stepValue.length == 0) {
    alert('[ERRO] Dados faltando!')
    console.log(endValue)
  } else {
    result.innerHTML = 'Contando... <br>'
    if (stepValue <= 0) {
      alert('Passo inválido! Considerando PASSO 1')
      stepValue = 1
    }
    if (startValue < endValue) {
      for (let i = startValue; i <= endValue; i += stepValue) {
        result.innerHTML += `${i} \u{1f449} `
      }
    } else {
      //            5           5     1        5       1
      for (let i = startValue; i >= endValue; i -= stepValue) {
        result.innerHTML += `${i} \u{1f449} `
      }
    }
    result.innerHTML += `\u{1f3c1}`
  }
}

