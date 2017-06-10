/* eslint-disable no-use-before-define */
import { print } from '../utils'

function kadane (array) {
  if (array.length < 2) {
    throw new Error('Error must have more than 2 values')
  }

  let max = array[0]
  let currentMax = array[0]

  for (let i = 1; i < array.length; i++) {
    // better alone or better with previous
    currentMax = Math.max(array[i], currentMax + array[i])

    // better with preious might not be as good as just previous itself
    if (currentMax > max) {
      max = currentMax
    }
  }

  return max
}

// print(kadane)([1, -3, 2, 1, -1]) // 3
// print(kadane)([1, -3, 2, -1, -1]) // 2


function one (array) {
  if (array.length < 2) {
    throw new Error('Error must have more than 2 values')
  }

  let lowestPrice = array[0]
  let maxProfit = array[1] - array[0]

  for (let i = 1; i < array.length; i++) {
    const potentialProfit = array[i] - lowestPrice

    maxProfit = Math.max(maxProfit, potentialProfit)
    lowestPrice = Math.min(lowestPrice, array[i])
  }

  return maxProfit
}

// print(one)([10, 7, 5, 8, 11, 9]) // 6

function two (array) {
  if (array.length < 2) {
    throw new Error('Error must have more than 2 values')
  }

  let newArray = []
  let product = 1

  for (let i = 0; i < array.length; i++) {
    newArray[i] = product
    product *= array[i]
  }

  product = 1
  for (let j = array.length - 1; j > -1; j--) {
    newArray[j] *= product
    product *= array[j]
  }

  return newArray
}

print(two)([1, 7, 3, 4]) //  [84, 12, 28, 21]


function three (array) {
  let smallestInt = Math.min(array[0], array[1])
  let largestInt = Math.max(array[0], array[1])

  let lowestProduct2 = array[0] * array[1]
  let highestProduct2 = array[0] * array[1]

  let highestProduct3 = array[0] * array[1] * array[2]

  for (let i = 2; i < array.length; i++) {
    const current = array[i]
    highestProduct3 = Math.max(highestProduct3, highestProduct2 * current, lowestProduct2 * current)

    highestProduct2 = Math.max(highestProduct2, largestInt * current, smallestInt * current)
    lowestProduct2 = Math.min(lowestProduct2, largestInt * current, smallestInt * current)

    largestInt = Math.max(largestInt, current)
    smallestInt = Math.min(smallestInt, current)
  }

  return highestProduct3
}

print(three)([-10, -10, 1, 3, 2]) // 300
print(three)([-10, 10, 1, 3, 2]) // 60