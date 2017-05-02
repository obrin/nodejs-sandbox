import { print } from '../utils'

/** 01
 var stockPricesYesterday = [10, 7, 5, 8, 11, 9];

 getMaxProfit(stockPricesYesterday);
 returns 6 (buying for $5 and selling for $11)
**/

let stockPricesYesterday = [10, 7, 5, 8, 11, 9]; // ans: 6
let stockPricesYesterday2 = [10, 15, 5, 8, 6, 12]; // ans: 7
let stockPricesYesterday3 = [15, 9, 8, 2]; // ans: -1

function getMaxProfit (array) {
  // make sure we have at least 2 prices
  if (array.length < 2) {
    throw new Error('requires at least 2 numbers');
  }

  let smallest = array[0]
  let maxProfit = array[1] - array[0]

  for (let i = 1; i < array.length; i++) {
    const current = array[i]

    const currentDiff = current - smallest

    maxProfit = Math.max(maxProfit, currentDiff)

    smallest = Math.min(smallest, current)
  }

  return maxProfit
}

print(getMaxProfit)(stockPricesYesterday3)


/** 02
 Write a function getProductsOfAllIntsExceptAtIndex() that takes an array of integers and returns an array of the products.
**/

// 168
let productsArray = [2, 7, 3, 4]  // 84, 24, 56, 42

function getProductsOfAllIntsExceptAtIndex (array) {

  // make sure we have at least 2 prices
  if (array.length < 2) {
    throw new Error('Getting the product of numbers at other indices requires at least 2 numbers');
  }


  let product = 1
  let productMirror = 1

  let newArray = []

  let newArr = []

  for (let i = 0; i < array.length; i++) {
    const j = array.length - 1 - i

    const currentBefore = array[i - 1] || 1
    const mirrorAfter = array[j + 1] || 1

    if (i !== 0) {
      product = product * currentBefore
    }

    if (j !== array.length - 1) {
      productMirror = productMirror * mirrorAfter
    }

    newArray[i] = (newArray[i] || 1) * product
    newArray[j] = (newArray[j] || 1) * productMirror
  }

  return newArray
}

print(getProductsOfAllIntsExceptAtIndex)(productsArray)

/** 03
 Given an array of integers, find the highest product you can get from three of the integers.
**/

let arrayOfIntsArgs = [3, 1, 5, 6, 100, 2]
let arrayOfIntsArgs2 = [1, 10, -5, 1, -100]


function arrayOfInts (array) {
  let highest = Math.max(array[0], array[1])
  let lowest = Math.min(array[0], array[1])

  let highestProduct2 = array[0] * array[1]
  let lowestProduct2 = array[0] * array[1]

  let highestProduct3 = array[0] * array[1] * array[2]

  for (let i = 2; i < array.length; i++) {
    const current = array[i]
    highestProduct3 = Math.max(highestProduct3, highestProduct2 * current, lowestProduct2 * current)

    highestProduct2 = Math.max(highestProduct2, highest * current, lowest * current)

    lowestProduct2 = Math.min(lowestProduct2, highest * current, lowest * current)

    lowestProduct2 = Math.min(lowestProduct2, highest * current, lowest * current)

    highest = Math.max(highest, current)

    lowest = Math.min(lowest, current)
  }

  return highestProduct3
}

print(arrayOfInts)(arrayOfIntsArgs2)







