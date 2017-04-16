import { print } from '../utils'

/**
 * Maximum sub array
 * The maximum subarray problem is the task of finding the contiguous subarray
 * within a one-dimensional array of numbers which has the largest sum
 */

/**
 * Brute Force
 * Time (On3)
 * Space (O1)
 */
const array = [1,-4, 5, 6, 2, -7, 8]
const array2 = [4, -3, -3, 4, 2]
const array3 = [-5, -2, -4, -1]

function maxSubArrayBruteForce(array) {
  const n = array.length

  let max = 0
  for (let i = 0; i < n; i++) {
    for(let j = 0; j < n; j++) {
      let sum = 0
      let end = j
      let start = i
      for (; start <= end; start++) {
        sum += array[start]
      }

      max = Math.max(max, sum)
    }
  }
  return max
}

print(maxSubArrayBruteForce)(array)

/**
 * Kadane's algorithm
 * maxCurrent is max of current value or previous maxCurrent + current value
 * Time: O(n)
 * Space: O(1)
 */
function maxSubArraySlidingWindow(array) {
  // start with the lowest possible number
  let maxCurrent = -9999999999
  let maxGlobal = -9999999999

  for (let i = 0; i < array.length; i++) {
    maxCurrent = Math.max(maxCurrent + array[i], array[i])
    maxGlobal = Math.max(maxCurrent, maxGlobal)
  }
  return maxGlobal
}

print(maxSubArraySlidingWindow)(array3)
