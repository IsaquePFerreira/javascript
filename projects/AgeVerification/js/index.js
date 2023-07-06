function verify() {
  let date = new Date()
  let year = date.getFullYear()
  let txtYear = document.querySelector('#txtyear')
  let res = document.querySelector('#res')

  if (txtYear.value.length == 0 || txtYear.value > year) {
    alert('[ERRO] Verifique os dados e tente novamente!')
  } else {
    let formSex = document.getElementsByName('radsex') 
    let gender = ''
    let age = year - Number(txtYear.value)
    let img = document.createElement('img')
    let msg = document.createElement('p')
    msg.setAttribute('id', 'msg')
    img.setAttribute('id', 'photo')

    if (formSex[0].checked) {
      gender = 'Homem'
      if (age >= 0 && age < 10) {
        img.setAttribute('src', './img/boy.png')
      } else if (age < 21) {
        img.setAttribute('src', './img/young-man.png')
      } else if (age < 50) {
        img.setAttribute('src', './img/man.png')
      } else {
        img.setAttribute('src', './img/old-man.png')
      }
    } else if (formSex[1].checked) {
      gender = 'Mulher'
      if (age >= 0 && age < 10) {
       img.setAttribute('src', './img/girl.png') 
      } else if (age < 21) {
        img.setAttribute('src', './img/young-woman.png')
      } else if (age < 50) {
        img.setAttribute('src', './img/woman.png')
      } else {
        img.setAttribute('src', './img/old-woman.png') 
      }
    }

    msg.textContent = `Dectamos ${gender} com ${age} anos.`
    res.insertAdjacentElement('beforeend', msg)
    res.insertAdjacentElement('beforeend', img)
  }
}
