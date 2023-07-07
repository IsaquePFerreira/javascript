function table() {
  let num = document.querySelector('#txtnum')
  let tab = document.querySelector('#seltab')

  if (!num.value.length == 0) {
    let n = Number(num.value)
    let c = 1

    tab.innerHTML = ''
    while (c <= 10) {
      let item = document.createElement('option')
      item.text = `${n} x ${c} = ${n * c}`
      tab.appendChild(item)
      c = c + 1
    }
  } else {
    alert('Digite um número por favor.')
  }
}
