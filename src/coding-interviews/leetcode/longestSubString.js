import { print } from '../utils'

let distinctLetter = 'eceeba'
function longestSubString2DistinctX(string) {
  const seenLetter = {}
  const words = string.split('')
  const n = words.length
  let j = 0
  let i = 0
  let d = 0
  let ans = 0

  while (j < n) {
    if (seenLetter[words[j]] !== undefined) {
      d++
    }

    seenLetter[words[j]] = j

    if (d > 2) {
      i = seenLetter[words[j]]
      console.log('duplicate', words[j - 1])
      // seenLetter[words[j]] = undefined
      d--
    }

    console.log('seen', seenLetter)


    ans = Math.max(ans, j - i + 1)
    console.log('ans', ans)

    j++
  }

  return ans
}

function longestSubString2Distinct(string) {
  let i = 0
  let j = -1
  const words = string.split('')
  const n = words.length
  let ans = 0

  for (let k = 1; k < n; k++) {
    if (words[k-1] === words[k]) {
      continue
    }

    if (j >= 0 && words[j] !== words[k]) {
      ans = Math.max(ans, k - i)
      i = j + 1
    }

    j = k - 1
  }

  return Math.max(ans, Array.length - i)
}

print(longestSubString2Distinct)(distinctLetter)


function longestSubString2DistinctV2(string) {
  let i = 0
  let ans = 0
  let count = new Array(256)
  let distinct = 0
  const words = string.split('')
  const n = words.length

  function doesNotExist(alphabet) {
    return count[alphabet] === undefined || count[alphabet] === 0
  }

  for (let j = 0; j < n; j++) {
    if (doesNotExist(words[j])) {
      count[words[j]] = 1
      distinct++
    } else {
      count[words[j]]++
    }

    // when more than 2 distinct find new i
    // remove char count until 0 so we can remove it from duplicate
    while (distinct > 2) {
      count[words[i]]--
      i++

      if (doesNotExist(words[i])) {
        distinct--
      }
    }

    ans = Math.max(ans, j - i + 1)
  }

  return ans
}

print(longestSubString2DistinctV2)(distinctLetter)

