function verify() {
  let date = new Date()
  let year = date.getFullYear()
  let txtYear = document.querySelector('#txtyear')
  let res = document.querySelector('#res')

  if (txtYear.value.length == 0 || txtYear.value > year) {
    alert('[ERRO] Verifique os dados e tente novamente!')
  } else {
    alert('Tudo ok!')
  }
}
