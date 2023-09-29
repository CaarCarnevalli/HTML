let nome = window.document.getElementById('nome')
let email = document.querySelector('#email')
let assunto = document.querySelector('#assunto')

nome.style.width = "20%"
email.style.width = "20%"
assunto.style.width = "20%"

function validaNome() {
 
    let txtNome = document.querySelector('#txtNome')
      if (nome.value.length < 3) {
        txt.innerHTML = 'Nome Inválido'
        txt.style.color = 'red'
      } else {
        txt.NomeinnerHTML = 'Nome Válido'
        txtNome.style.color = 'green'
      }
}

function validaEmail () {
    let txtEmail = document.querySelector('#txtEmail')
      if (email.value.indexOf('@') == -1 || email.value.indexOf('.') == -1) {
        txtEmail.innerHTML = 'E-mail inválido'
        txtEmail.style.color = 'red'
      } else {
        txtEmail.innerHTML = ' E-mail válido'
        txtEmail.style.color = 'green'
      }
}