function loadFiles() {
  let message = document.querySelector('#message')
  let image = document.querySelector('#image')
  let date = new Date()
  let hours = date.getHours()
  let textMessage = document.createElement("p")
  textMessage.textContent = `São ${hours} horas.`

  message.insertAdjacentElement("beforeend", textMessage)

  if (hours >= 0 && hours < 12) {
    document.body.style.background = '#e2cd9f'
    image.src = './img/morning.png'
  } else if (hours <= 18) {
    document.body.style.background = '#b9846f'
    image.src = './img/afternoon.png'
  } else {
    document.body.style.background = '#515154'
    image.src = './img/night.png'
  }
}

