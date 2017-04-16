import { print } from '../utils'
/**
 * Longest Substring Without Repeating Characters
 */
// const longestString = 'abcaggqwer' // 5
const longestString = 'abc'
function longestSubstringSlidingWindow(string) {
  const seenLetter = {}
  const words = string.split('')

  let ans = 0
  for (let i=0, j=0; j < words.length; j++) {
    if (seenLetter[words[j]] !== undefined) {
      i = seenLetter[words[j]] + 1
    }
    seenLetter[words[j]] = j

    ans = Math.max(ans, j-i+1)
  }

  return ans
}

print(longestSubstringSlidingWindow)(longestString)

function longestSubstringSlidingWindow2(string) {
  const seenLetter = new Array(256)
  const words = string.split('')

  let ans = 0
  for (let i=0, j=0; j < words.length; j++) {
    if (seenLetter[words[j]] !== undefined) {
      i = seenLetter[words[j]] + 1
    }
    seenLetter[words[j]] = j

    ans = Math.max(ans, j-i+1)
  }

  return ans
}

print(longestSubstringSlidingWindow2)(longestString)
