import { print } from '../utils'

function validNumber(string) {
  function isWhitespace(char) {
    return (/\s/).test(char)
  }

  function isDigit(char) {
    return (/\d/).test(char)
  }

  let isNumeric = false
  let i = 0
  let n = string.length

  function incrementWhileNumeric() {
    while (i < n && isDigit(string[i])) {
      i++
      isNumeric = true
    }
  }

  function incrementOnSign() {
    // sign allowed
    if (string[i] === '+' || string[i] === '-') {
      i++
    }
  }

  // get rid of leading whitespace
  while(isWhitespace(string[i])) {
    i++
  }

  incrementOnSign()
  incrementWhileNumeric()

  // if only . in string then false
  // .1 or 1. is true
  if (i < n && string[i] === '.') {
    i++
    incrementWhileNumeric()
  }

  // exponent
  if (i < n && isNumeric && string[i] === 'e') {
    i++
    incrementOnSign()
    incrementWhileNumeric()
  }

  // get rid of trailing whitespace
  while(isWhitespace(string[i])) {
    i++
  }

  return isNumeric && i === n
}

print(validNumber)('1.23e+10 ')
