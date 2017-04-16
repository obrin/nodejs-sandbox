import { print } from '../utils'

const WORDS_1 = 'the sky is blue'

/**
 * Reverse Words in a String
 * Time: O(n)
 * Space: O(n)
 */
function reverseWords(words) {
  let remainingWords = words.length
  let reversed = ''

  for (let i = words.length - 1; i >= 0; i--) {
    // reduce remaining words when current index space
    if (words[i] === ' ') {
      remainingWords = i

      // when next index is a space then it's the next word
      // append the current word
    } else if (i === 0 || words[i-1] === ' ') {
      // append a space since we've reached the end of a word
      if (reversed.length !== 0) {
        reversed = reversed + ' '
      }

      reversed = reversed + words.substring(i, remainingWords)
    }
  }
  return reversed
}

print(reverseWords)(WORDS_1)

/**
 * Time: O(n)
 * Space: O(1)
 *
 * Reverse every single letter first, then reverse the words
 */
function reverseWords2(words) {
  words = words.split('')

  function reverse(characters, start, end) {
    const middle = (end - start) / 2

    for (var i = 0; i < middle; i++) {
      const temp = characters[start + i]
      characters[start + i] = characters[end - i]
      characters[end - i] = temp
    }
  }

  // start of the word
  let i = 0

  // end of the word
  let j = 0

  reverse(words, 0, words.length - 1)

  for (; j <= words.length; j++) {
    // at the end of a word, a space is found
    if (words[j] === ' ' || j === words.length) {
      // at index j, it contains space as a character,
      // at index j-1, it contains no space in a character
      reverse(words, i, j - 1)

      // assign next starting point of word
      i = j + 1
    }
  }
  return words.join('')
}

print(reverseWords2)(WORDS_1)
