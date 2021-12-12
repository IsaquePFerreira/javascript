let num = document.querySelector("input#number");
let list = document.querySelector("section#numbers");
let res = document.querySelector("div#res");
let values = [];

function isNumber(n) {
  if (Number(n) >= 1 && Number(n) <= 100) {
    return true;
  } else {
    return false;
  }
}

function inList(n, l) {
  if (l.indexOf(Number(n)) != -1) {
    return true;
  } else {
    return false;
  }
}

function adicionar() {
  if (isNumber(num.value) && !inList(num.value, values)) {
    values.push(Number(num.value));
    let item = document.createElement("option");
    item.text = `Valor ${num.value} adicionado.`;
    list.appendChild(item);
    res.innerHTML = "";
  } else {
    window.alert("Valor inválido ou já encontrado na lista.");
  }

  num.value = "";
  num.focus();
}

function finalizar() {
  if (values.length == 0) {
    window.alert("Adicione valores antes de finalizar!");
  } else {
    let tot = values.length;
    let maior = values[0];
    let menor = values[1];
    let soma = 0;
    let media = 0;
    for (let pos in values) {
      soma += values[pos];
      if (values[pos] > maior) {
        maior = values[pos];
      }
      if (values[pos < menor]) {
        menor = values[pos];
      }
    }
    media = soma / tot;
    res.innerHTML = "";
    res.innerHTML += `<p>Ao todo, temos ${tot} números cadastrados.</p>`;
    res.innerHTML += `<p>O maior valor informado foi ${maior}`;
    res.innerHTML += `<p>O menor valor informado foi ${menor}`;
    res.innerHTML += `<p>Somando todos os valores, temos${soma}.</p>`;
    res.innerHTML += `<p>A media dos valores digitados é ${media}.</p>`;
  }
}
