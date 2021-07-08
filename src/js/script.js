const error = document.querySelector('.email-error')
const btn = document.querySelector('.btn-submit')
const input = document.querySelector('#input-email')

btn.addEventListener('click', checkEmail)
input.addEventListener('input', defaultSettings)

function checkEmail() {
  const email = input.value
  const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  const validate = re.test(String(email).toLowerCase())

  if (!validate) {
    error.textContent = 'Please provide a valid email address'
    error.style.display = 'block'
    input.style.border = '1px solid hsl(354, 100%, 66%)'
  }

  if (!email) {
    error.textContent = 'Whoops! It looks like you forgot to add your email'
    error.style.display = 'block'
    input.style.border = '1px solid hsl(354, 100%, 66%)'
  }
}

function defaultSettings() {
  error.textContent = ''
  error.style.display = 'none'
  input.style.border = '1px solid hsl(223, 100%, 88%)'
}
