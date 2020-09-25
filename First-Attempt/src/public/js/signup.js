const form = document.getElementById('form')
const inputs = document.querySelectorAll('#form .form-row .input-data input')

const fields = {
  name: false,
  userName: false,
  password: false,
}

const expression = {
  name: /^[a-zA-ZÀ-ÿ\s]{4,40}$/, // Letters and space. Can carry promotion
  userName: /^[a-zA-Z0-9ñ\_\-]{4,16}$/, // Letters, numbers, hyphen and underscore
  password: /^.{4,12}$/
}

const validateForm = (e) => {
  switch(e.target.name){
    case 'name':
      validateInput(expression.name, e.target, e.target.name)
      break
    case 'userName':
      validateInput(expression.userName, e.target, e.target.name)
      break
    case 'password':
      validateInput(expression.password, e.target, e.target.name)
      validatePassword()
      break
    case 'password2':
      validatePassword()
      break;
  }
}

const validateInput = (expression, input, field) => {
  const change = document.querySelector(`.input-data .${field}`)
  const message = document.querySelector(`.input-data .errorInput.${field}`)
  
  if (input.value === '') {
    message.classList.remove('active')
  }
  else if(expression.test(input.value)){
    change.classList.remove('active')
    message.classList.remove('active')
    fields[field] = true
  }else{
    change.classList.add('active')
    message.classList.add('active')
    fields[field] = false
  }
}

const validatePassword = () => {
  const pass1 = document.querySelector('#firstPass')
  const pass2 = document.querySelector('#secondPass')
  const changePass2 = document.querySelector(`.input-data .password2`)
  const messagePass2 = document.querySelector('.input-data .errorInput.password2')

  if (pass1.value !== pass2.value){
    changePass2.classList.add('active')
    messagePass2.classList.add('active')
    fields['password'] = true
  }else{
    changePass2.classList.remove('active')
    messagePass2.classList.remove('active')
    fields['password'] = false
  }
}

const enviar = (e) => {
  const active = document.querySelectorAll('.input-data .errorInput.active')
  const show = document.querySelector('.error-text')
  const submit = document.querySelector('#submit')
  if(active.length === 0){
    show.classList.remove('active')
    submit.removeAttribute('disabled', '')
  }else{
    show.classList.add('active')
    submit.setAttribute('disabled', '')
  }
}

inputs.forEach((input) => {
  input.addEventListener('keyup', validateForm);
  input.addEventListener('keyup', enviar);
  input.addEventListener('blur', validateForm);
  input.addEventListener('blur', enviar);
})