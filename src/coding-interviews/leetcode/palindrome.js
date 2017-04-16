import { print } from '../utils'
/**
 * Valid Palindrome
 * O(n)
 */
const palindrome = 'A man, a plan, a canal: Panama'

function isPalindrome(sentence) {
  function isChar(char) {
    const charRegExp =  /[a-zA-Z0-9]/g
    return charRegExp.test(char)
  }

  let start = 0
  let end = sentence.length - 1

  while (start < end) {
    while (start < end && !isChar(sentence[start])) {
      start++
    }

    while (start < end && !isChar(sentence[end])) {
      end--
    }

    if (sentence[start].toLowerCase() !== sentence[end].toLowerCase()) {
      return false
    }

    start++
    end--
  }

  return true
}

print(isPalindrome)(palindrome)


function palindromeNumber(num) {
  const numArray = num.toString().split('')
  let start = 0
  let end = numArray.length - 1

  while (start < end) {
    if (numArray[start] === numArray[end]) {
      start++
      end--
    } else {
      return false
    }
  }

  return true
}

print(palindromeNumber)(11211)


function palindromeNumberNoSpace(num) {
  let div = 1

  // figure out what div would provide a 1 digit integer
  while (num / div >= 10) {
    div = div * 10
  }

  while (num != 0) {
    const l = Math.floor(num/div)
    const r = num % 10
    if (l != r) {
      return false
    }
    // get rid of first and last digit
    num = Math.floor((num % div) / 10)

    // remove two digits since first and last has been removed
    div = div / 100
  }

  return true
}

print(palindromeNumberNoSpace)(1991)

