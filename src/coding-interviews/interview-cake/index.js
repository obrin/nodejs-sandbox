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


/** 04

**/

/**
 * This does work when not sorted
 * Needs to be sorted first
 */
const mergeRangesArgs =   [
  {startTime: 0,  endTime: 1},
  {startTime: 3,  endTime: 5},
  {startTime: 4,  endTime: 8},
  {startTime: 10, endTime: 12},
  {startTime: 9,  endTime: 10},
]

const mergeRangesArgs2 = [{startTime: 1, endTime: 2}, {startTime: 2, endTime: 3}]
const mergeRangesArgs3 = [{startTime: 1, endTime: 5}, {startTime: 2, endTime: 3}]
const mergeRangesArgs4 = [
  {startTime: 1, endTime: 10},
  {startTime: 2, endTime: 6},
  {startTime: 3, endTime: 5},
  {startTime: 7, endTime: 9},
]

function mergeRanges (array) {
  const newArray = [array[0]]

  for (let i = 1; i < array.length; i++) {
    let curr = array[i]
    let prev = newArray[newArray.length - 1]

    if (curr.startTime <= prev.endTime) {
      if (prev.endTime < curr.endTime) {
        prev.endTime = curr.endTime
      }

      if (prev.startTime > curr.startTime) {
        prev.startTime = curr.startTime
      }
    } else {
      newArray.push(curr)
    }
  }

  return newArray
}

print(mergeRanges)(mergeRangesArgs)

/**
 *
 */

function changePossibilitiesTopDown(amountLeft, denominations, currentIndex) {
  currentIndex = currentIndex || 0;

  // base cases:
  // we hit the amount spot on. yes!
  if (amountLeft === 0) return 1;

  // we overshot the amount left (used too many coins)
  if (amountLeft < 0) return 0;

  // we're out of denominations
  if (currentIndex === denominations.length) return 0;

  console.log('checking ways to make ' + amountLeft + ' with ' + denominations.slice(currentIndex));

  // choose a current coin
  let currentCoin = denominations[currentIndex];

  // see how many possibilities we can get
  // for each number of times to use currentCoin
  let numPossibilities = 0;
  while (amountLeft >= 0) {
    numPossibilities += changePossibilitiesTopDown(amountLeft, denominations, currentIndex + 1);

    // console.log('currentCoin', currentCoin, 'amountLeft ' + amountLeft, 'denom', denominations.slice(currentIndex), 'ans', numPossibilities);

    amountLeft -= currentCoin;
  }

  return numPossibilities;
}

print(changePossibilitiesTopDown)(6, [3, 2, 1])

/**
 * Time complexity: O(n∗m)
 * Space complexity: O(n)
 * where nn is the amount of money and mm is the number of potential denominations.
 */
function changePossibilitiesBottomUp (amount, denominations) {
  // initialize 1 possible way to do an amount that is 0
  const combinations = [1]

  denominations.forEach((coin) => {
    for (let i = coin; i <= amount; i++) {
      combinations[i] = combinations[i] || 0

      // get the combinations for the remainder value
      // similar to sliding window
      combinations[i] += combinations[i - coin]
    }
  })

  return combinations[amount]
}

// print(changePossibilitiesBottomUp)(5, [1, 2, 5])

function isSubtreeLesser (node, value) {
  if (node === null) {
    return true
  }

  if (node.value <= value && isSubtreeLesser(node.left, value) && isSubtreeLesser(node.right, value)) {
    return true
  }

  return false
}

function isSubtreeGreater (node, value) {
  if (node === null) {
    return true
  }

  if (node.value > value && isSubtreeGreater(node.left, value) && isSubtreeGreater(node.right, value)) {
    return true
  }

  return false
}

/**
 * Time complexity O(n2)
 */
function isBinarySearchTree (node) {
  if (node === null) {
    return true
  }

  if (isSubtreeLesser(node.left, node.value) && isSubtreeGreater(node.right, node.value) && isBinarySearchTree(node.left) && isBinarySearchTree(node.right)) {
    return true
  }

  return false
}

function BinaryTreeNode(value) {
  this.value = value;
  this.left  = null;
  this.right = null;
}

BinaryTreeNode.prototype.insertLeft = function(value) {
  this.left = new BinaryTreeNode(value);
  return this.left;
};

BinaryTreeNode.prototype.insertRight = function(value) {
  this.right = new BinaryTreeNode(value);
  return this.right;
};

const bst = new BinaryTreeNode(10)
bst
  .insertLeft(9)
  .insertLeft(8)
  .insertLeft(7)
  .insertLeft(6)

bst
  .insertRight(11)
  .insertRight(12)
  .insertRight(13)
  .insertRight(14)

print(isBinarySearchTree)(bst)

const nonBst = new BinaryTreeNode(10)
nonBst
  .insertLeft(9)
  .insertLeft(8)
  .insertLeft(7)
  .insertLeft(100)

nonBst
  .insertRight(11)
  .insertRight(12)
  .insertRight(13)
  .insertRight(14)

print(isBinarySearchTree)(nonBst)

function isBstUtil (node, minValue, maxValue) {
  if (node === null) {
    return true
  }

  if (node.value > minValue && node.value < maxValue && isBstUtil(node.left, minValue, node.value) && isBstUtil(node.right, node.value, maxValue)) {
    return true
  }

  return false
}

function isBinarySearchTreeV2 (node) {
  return isBstUtil(node, -Infinity, Infinity)
}

print(isBinarySearchTreeV2)(bst)
print(isBinarySearchTreeV2)(nonBst)

/**
 * 10.
 */

function findLargestNodeRecursive (node) {
  if (!node) {
    throw new Error('Tree must have at least one node')
  }

  if (node.right) {
    return findLargestNodeRecursive(node.right)
  }

  return node.value
}

function findLargestNodeIterate (node) {
  if (!node) {
    throw new Error('Tree must have at least one node')
  }

  let current = node

  while (current) {
    if (!current.right) {
      return current.value
    }
    current = node.right
  }
}

function secondLargestNode (node) {
  if (!node || (!node.left && !node.right)) {
    throw new Error('Tree must have at least 2 nodes');
  }

  // we're at the largest and has left tree
  if (!node.right && node.left) {
    return findLargestNodeIterate(node.left)
  }

  // we're at the parent of largest value
  if (node.right && !node.right.left && !node.right.right ) {
    return node.value
  }
  
  // step right
  return secondLargestNode(node.right)
}

function secondLargestNodeV2 (node) {
  if (!node || (!node.left && !node.right)) {
    throw new Error('Tree must have at least 2 nodes');
  }

  let current = node

  while (current) {
    // we're at the largest and has left tree
    if (!current.right && current.left) {
      return findLargestNodeIterate(current.left)
    }

    // we're at the parent of largest value
    if (current.right && !current.right.left && !current.right.right ) {
      return current.value
    }

    current = current.right
  }
}

/**
 * 11.
 */

class Trie {
  constructor () {
    this.name = 'trie'
    this.rootNode = {}
  }

  checkPresentAndAdd (word) {
    let currentNode = this.rootNode
    let isNewNode = false

    // work downwards the trie while adding new nodes and keeping track if we did so

    for (let i = 0; i < word.length; i++) {
      const letter = word[i]

      if (!currentNode.hasOwnProperty(letter)) {
        isNewNode = true
        currentNode[letter] = {}
      }

      currentNode = currentNode[letter]
    }

    const LAST_LETTER = '*'

    if (!currentNode.hasOwnProperty(LAST_LETTER)) {
      isNewNode = true
      currentNode[LAST_LETTER] = {}
    }

    return isNewNode
  }
}

const word = new Trie()
console.log('Trie', word.checkPresentAndAdd('google.com')) // true
console.log('Trie', word.checkPresentAndAdd('google.com')) // false
console.log('Trie', word.checkPresentAndAdd('google.com/hello')) // true
console.log('Trie', word.checkPresentAndAdd('google.com')) // false








