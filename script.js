const inputEl = document.querySelector('#password')
const passswordLengthEl = document.querySelector('#password-length') 
const copyButtonEl = document.querySelector('#copy-1')
const copyButtonEl2 = document.querySelector('#copy-2')

let passwordLength = 16

function generatePassword() {
  const chars = "abcdefghjkmnpqrstuvwxyzABCDEFGHJKLMNPQRSTUVWXYZ123456789?!@&*()[]"

  let password = ""

  for(let i = 0; i < passwordLength; i++) {
    const randomNumber = Math.floor(Math.random() * chars.length)

    password += chars.substring(randomNumber, randomNumber + 1)
  }

  inputEl.value = password
}

generatePassword()

passswordLengthEl.addEventListener("input", function() {
  passwordLength = passswordLengthEl.value
  generatePassword()
})

function copy() {
  navigator.clipboard.writeText(inputEl.value)
}

copyButtonEl.addEventListener('click', copy)
copyButtonEl2.addEventListener('click', copy)
