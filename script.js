const inputEl = document.querySelector('#password')

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

const passswordLengthEl = document.querySelector('#password-length') 

passswordLengthEl.addEventListener("input", function() {
  passwordLength = passswordLengthEl.value
  generatePassword()
})

generatePassword()