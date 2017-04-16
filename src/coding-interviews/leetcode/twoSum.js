import { prrint } from '../utils'
/**
 Question:
 Given an array of integers, find two numbers such that they add up to a specific target number.
 The function twoSum should return indices of the two numbers such that they add up to the target, where index1 must be less than index2. Please note that your returned answers (both index1 and index2) are not zero-based.
 You may assume that each input would have exactly one solution.
 **/

/**
 * Hash Table
 * O(n)
 */
function twoSumHashTable(numbers, target) {
  const hashTableNumberNeeded = {}

  for (var i = 0; i < numbers.length; i++) {
    const currentNumber = numbers[i]
    const numberNeeded = target - currentNumber

    if (hashTableNumberNeeded[currentNumber] !== undefined) {
      return [hashTableNumberNeeded[currentNumber] + 1, i + 1]
    }
    // store the index
    hashTableNumberNeeded[numberNeeded] = i
  }

  throw new Error('No two sum solution')
}

print(twoSumHashTable)([4, 1, 6, 7, 8], 15)


/**
 * Given the array is sorted
 * Binary search
 * Time: O(n log n)
 * Space: O(1)
 */
function twoSumBinarySearch(numbers, target) {
  function twoSum() {
    for (var i = 0; i < numbers.length; i++) {
      const j = bsearch(numbers, target - numbers[i], i)

      if (j !== -1) {
        return [i + 1, j + 1]
      }
    }
    throw new Error('No two sum solution')
  }

  function bsearch(array, key, start) {
    let l = start
    let r = array.length - 1

    while (l < r) {
      let m = Math.ceil((r + l)/2)

      if (array[m] === key) {
        l = m
        r = m
      }
      if (array[m] < key) {
        l = m
      } else {
        r = m
      }
    }

    return (l === r && array[l] === key) ? l : -1
  }

  return twoSum()
}

// print(twoSumBinarySearch([1,2,3,4,5,6], 9))


/**
 * Given the array is sorted
 * Two pointers
 * Time: O(n)
 * Space: O(1)
 */

/**
 O(n) runtime, O(1) space – Two pointers:
 Let’s assume we have two indices pointing to the ith and jth elements, Ai and Aj
 respectively. The sum of Ai and Aj could only fall into one of these three possibilities:
 i. Ai + Aj > target. Increasing i isn’t going to help us, as it makes the sum even
 bigger. Therefore we should decrement j.
 ii. Ai + Aj < target. Decreasing j isn’t going to help us, as it makes the sum even
 smaller. Therefore we should increment i.
 iii. Ai + Aj == target. We have found the answer.
 */
function twoSumPointers(numbers, target) {
  let l = 0
  let r = numbers.length - 1

  while (l < r) {
    if (numbers[l] + numbers[r] > target) {
      r--
    } else if (numbers[l] + numbers[r] < target) {
      l++
    } else {
      // match
      return [l + 1, r + 1]
    }
  }

  throw new Error('No two sum solution')
}

print(twoSumPointers)([1,2,3,4,5,6], 8)
