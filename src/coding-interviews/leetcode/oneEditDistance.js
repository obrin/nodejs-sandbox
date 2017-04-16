import { print } from '../utils'

/**
 * Leetcode 14. One Edit Distance
 * Given two strings S and T, determine if they are both one edit distance apart.
 */

function oneEditDistance(string1, string2) {
  const m = string1.length
  const n = string2.length

  // max edit distance is 1
  if (Math.abs(m - n) > 1) {
    return false
  }


  let i = 0
  let j = 0
  let edits = 0

  while (i < m && j < n) {
    if (string1[i] !== string2[j]) {
      edits++

      // max edit distance is 1
      if (edits > 1) {
        return false
      }

      let remainingM = m - i
      let remainingN = n - j

      // if one is longer than the other; possible add or delete
      // increment the longer one
      if (remainingM - remainingN > 0) {
        i++
      } else if (remainingN - remainingM > 0) {
        j++
      }

      // length is the same otherwise; possible edit
      // increment both strings
      if (remainingM = remainingN) {
        i++
        j++
      }
    } else {
      j++
      i++
    }
  }
  return true
}

print(oneEditDistance)('hello', 'hallo')
print(oneEditDistance)('hello', 'halloo')
