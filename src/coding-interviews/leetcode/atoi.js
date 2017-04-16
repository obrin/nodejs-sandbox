import { print } from '../utils'

/**
 * Atoi
 * convert string to integer
 * MAX: 2147483647
 * MIN: -2147483648
 */
function atoi(string) {
  const MAX_INTEGER = 2147483647
  const MIN_INTEGER = -2147483648
  const MAX_INTEGER_DIV10 = MAX_INTEGER/10
  // get rid of whitespace
  function isWhitespace(char) {
    return (/\s/).test(char)
  }

  function isDigit(char) {
    return (/\d/).test(char)
  }

  let i = 0
  while (isWhitespace(string[i])) {
    i++
  }

  // get sign
  let sign = 1

  if (string[i] === '+') {
    i++
  }

  if (string[i] === '-') {
    sign = -1
    i++
  }

  // get number
  let num = 0
  while (i < string.length && isDigit(string[i])) {
    const digit = string[i] * 1

    // handle max and min number
    if (num > MAX_INTEGER_DIV10 || num === MAX_INTEGER_DIV10 && digit >= 8) {
      return sign === -1 ? MIN_INTEGER : MAX_INTEGER
    }

    num = num * 10 + digit
    i++
  }

  return num * sign
}

print(atoi)('-432598nsdf988')
