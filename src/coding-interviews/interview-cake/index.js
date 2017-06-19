/* eslint-disable no-use-before-define */
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

  // we gradually increase minPrice and maxProfit
  // so we initialize them to the first price and first possible profit
  let minPrice = array[0]
  let maxProfit = array[1] - array[0]

  for (let i = 1; i < array.length; i++) {
    const currentPrice = array[i]

    // see what our potential profit would be if we bought at the minPrice and sold at current price
    const potentialProfit = currentPrice - minPrice

    // update the profit if we can do better
    maxProfit = Math.max(maxProfit, potentialProfit)

    // update the min price so it's always the lowest price we've seen so far
    minPrice = Math.min(minPrice, currentPrice)
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

// function mergeRanges (array) {
//   const newArray = [array[0]]

//   for (let i = 1; i < array.length; i++) {
//     let curr = array[i]
//     let prev = newArray[newArray.length - 1]

//     if (curr.startTime <= prev.endTime) {
//       if (prev.endTime < curr.endTime) {
//         prev.endTime = curr.endTime
//       }

//       if (prev.startTime > curr.startTime) {
//         prev.startTime = curr.startTime
//       }
//     } else {
//       newArray.push(curr)
//     }
//   }

//   return newArray
// }

// print(mergeRanges)(mergeRangesArgs)

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


function twelve () {
  const words = [
    'ptolemaic',
    'retrograde',
    'supplant',
    'undulate',
    'xenoepist',
    'asymptote', // <-- rotates here!
    'babka',
    'banoffee',
    'engender',
    'karpatka',
    'othellolagkage',
  ]

  function main () {
    const n = words.length
    let l = 0
    let h = n - 1

    while (l <= h) {
      const m = Math.floor((l + h)/2)
      const wordM = words[m].charCodeAt()
      const low = words[l].charCodeAt()
      const high = words[h].charCodeAt()

      if (wordM < low && wordM < high) {
        return m
      }

      if (low < high) {
        return low
      }

      if (wordM > low) {
        l = wordM + 1
      }

      if (wordM < high) {
        h = wordM - 1
      }
    }

    return -1
  }

  return main() // ans: 5
}

print(twelve)()


function thirteen (flightLength, moviesLength) {

  function main () {
    const dict = {}

    for (let i = 0; i < moviesLength.length; i++) {
      const movieLength = moviesLength[i]

      const diff = flightLength - movieLength

      if (dict[movieLength] === diff) {
        return true
      }

      dict[diff] = movieLength
    }

    return false
  }

  return main()
}

print(thirteen)(100, [10, 20, 40, 50, 60, 70, 25]) // true
print(thirteen)(100, [10, 20, 40, 50, 61, 70, 25]) // false


function fourteen (n) {
  function fibonacci () {
    if (n < 0) {
      throw new Error('Index was negative. No such thing as a negative index in a series.');
    }

    if (n === 0 || n === 1) {
      return n
    }

    let prev = 0
    let first = 1

    for (let i = 1; i < n; i++) {
      let tmp = first
      first = prev + first
      prev = tmp
    }

    return first
  }

  return fibonacci()
}

print(fourteen)(0)
print(fourteen)(1)
print(fourteen)(2)
print(fourteen)(3)
print(fourteen)(4)
print(fourteen)(5)

function sixteen (cakeTypes, capacity) {
  function maxDuffelBagValue (cakeTypes, capacity) {
    const memo = new Array(capacity).fill(0)

    for (let currentCapacity = 0; currentCapacity <= capacity; currentCapacity++) {
      let highest = 0
      cakeTypes.forEach((cake) => {

        if (cake.weight === 0 && cake.value !== 0) {
          return Infinity
        }

        if (cake.weight <= currentCapacity) {
          let maxValue = cake.value + memo[currentCapacity - cake.weight]


          highest = Math.max(maxValue, highest)
        }
      })
      memo[currentCapacity] = highest
    }

    return memo[capacity - 1]
  }

  return maxDuffelBagValue(cakeTypes, capacity)
}

const cakeTypes = [
    {weight: 7, value: 160},
    {weight: 3, value: 90},
    {weight: 2, value: 15},
  ];
const capacity = 20

print(sixteen)(cakeTypes, capacity)


// queue stack
/**
 * Move everything to outStack before dequeuing so that it is FIFO with O(n) computation time
 */
function nineteen () {
  const inStack = []
  const outStack = []

  function enqueue (item) {
    inStack.push(item)
  }

  function dequeue () {
    if (outStack.length === 0) {
      while (inStack.length > 0) {
        outStack.push(inStack.pop())
      }

      if (outStack.length === 0) {
        return undefined
      }
    }

    return outStack.pop()
  }

  return {
    enqueue,
    dequeue
  }
}

const queue = nineteen()
queue.enqueue(1)
queue.enqueue(2)
queue.enqueue(3)
console.log('queue--', queue.dequeue())
queue.enqueue(4)
console.log('queue--', queue.dequeue())

// find number without duplicate
function tweentyOne () {
  function findUniqueDeliveryId(deliveryIds) {

    var uniqueDeliveryId = 0;

    deliveryIds.forEach(function(deliveryId) {
        uniqueDeliveryId ^= deliveryId;
    });

    return uniqueDeliveryId;
  }

  return findUniqueDeliveryId([1,2,3,4,3,4,1]) // 2
}

/**
 * Bit Level
 * https://www.interviewcake.com/concept/javascript/bit-shift?
 * https://www.interviewcake.com/concept/javascript/binary-numbers?
 */

function tweentyTwo () {
  function LinkedListNode(value) {
    this.value = value;
    this.next = null;
  }

  var a = new LinkedListNode('A');
  var b = new LinkedListNode('B');
  var c = new LinkedListNode('C');

  a.next = b;
  b.next = c;

  deleteNode(b);

  function deleteNode(node) {
    if (node.next) {
      node.value = node.next
      if (node.next.next) {
        node.next = node.next.next
      } else {
        node.next = null
      }
      return
    }

    node.value = null
    node.next = null
  }
}

function LinkedListNode (value) {
  this.value = value
  this.next = null
}

function tweentyFour () {
  function reverse (headNode) {
    let current = headNode
    let next = null
    let previous = null

    while (current) {
      next = current.next

      current.next = previous

      previous = current
      current = next
    }

    return previous
  }
}

function tweentySeven () {
  const message = 'find you will pain only go you recordings security the into if'

  function reverseWordsV1 (msg) {
    const reverse = []

    // indicates end of a word
    let n = msg.length

    for (let i = msg.length - 1; i >= 0; i--) {
      const char = msg[i]
      // move up end word
      if (char === ' ') {
        n = i
      } else if (i === 0 || msg[i - 1] === ' ') {
        if (reverse.length) {
          reverse.push(' ')
        }
        reverse.push(message.substring(i, n))
      }
    }
    return reverse.join('')
  }

  function reverseWordsV2 (msg) {
    const msgArray = msg.split('')
    function reverse (word, start = 0, end = word.length - 1) {
      while (start < end) {
        const tmp = word[start]
        word[start] = word[end]
        word[end] = tmp
        start++
        end--
      }
      return word
    }

    reverse(msgArray)
    for (let i = 0, j = 0; i <= msgArray.length; i++) {
      if (msgArray[i] === ' ' || i === msgArray.length) {
        reverse(msgArray, j, i - 1)
        j = i + 1
      }
    }
    return msgArray.join('')
  }

  return reverseWordsV2(message)
}

print(tweentySeven)()


function tweentyEight (start = 0) {
  const message = 'Sometimes (when I nest them (my parentheticals) too much (like this (and this))) they get confusing.'
  let openCount = 0
  let closeCount = 0

  for (let i = start; i <= message.length; i++) {
    if (closeCount > 0 && openCount === closeCount) {
      return i - 1
    }
    const char = message[i]
    if (char === '(') {
      openCount++
    }

    if (char === ')') {
      closeCount++
    }
  }
  return closeCount // 79
}

print(tweentyEight)(10)


function tweentyNine (message, start = 0) {
  const openCount = {
    '(': 0,
    '{': 0,
    '[': 0
  }

  const closingPair = {
    ')': '(',
    '}': '{',
    ']': '['
  }

  // keep track of what closing bracket type should be next
  const bracketStack = []

  for (let i = start; i < message.length; i++) {
    const char = message[i]
    // current character is an open bracket type
    if (openCount[char] > -1) {
      // keep track of current bracket type as closing should be in order
      bracketStack.push(char)
      openCount[char]++
    }

    // current character is a closing bracket type
    const openChar = closingPair[char]
    if (openChar) {
      // current closing should match current open
      if (bracketStack.length && openChar !== bracketStack[bracketStack.length - 1]) {
        return false
      }

      bracketStack.pop()
      openCount[openChar]--
    }
  }

  let isValid = true

  for (let bracket in openCount) {
    if (openCount[bracket] > 0) {
      isValid = false
      return isValid
    }
  }
  return isValid
}

print(tweentyNine)('Sometimes (when I nest them [my parentheticals] too much (like this {and this})) they get confusing.')
print(tweentyNine)('Sometimes (when I nest them [my parentheti{cals]} too much (like this {and this})) they get confusing.')


function thirthy (words) {
  function isValidPalindromeV1 () {
    function isEven (number) {
      return number % 2 === 0
    }
    // any permutation validate palindrome

    // if odd length then max 1 odd value
    // all length match should be even

    const track = []
    for (let i = 0; i < words.length; i++) {
      const letter = words[i]
      const code = letter.charCodeAt() - 96
      if (!track[code]) {
        track[code] = 1
      } else if (track[code]) {
        track[code]++
      }
    }

    let isValid = true
    let oddCount = 0
    for (let j = 0; j < track.length; j++) {
      const num = track[j]

      if (num && !isEven(num)) {
        oddCount++
      }
    }

    const isOddNumberChar = !isEven(words.length)

    if (isOddNumberChar) {
      if (oddCount > 1) {
        isValid = false
      }
    } else {
      if (oddCount > 0) {
        isValid = false
      }
    }

    return isValid
  }

  function isValidPalindromeV2 () {
    const unpairedChar = new Set()

    for (let i = 0; i < words.length; i++) {
      const char = words[i]
      if (unpairedChar.has(char)) {
        unpairedChar.delete(char)
      } else {
        unpairedChar.add(char)
      }
    }

    return unpairedChar.size <= 1
  }

  return isValidPalindromeV2()
}

print(thirthy)('vasciic')
print(thirthy)('vciic') // allows for different permutations
print(thirthy)('civvic')
print(thirthy)('civicc')

function thrithyOne (strings) {
  function getPermutations (string) {
    if (string.length <= 1) {
      return new Set(string)
    }
    let allCharExceptLast = string.slice(0, -1)
    let lastChar = string[string.length - 1]

    const permutations = getPermutations(allCharExceptLast)

    const set = new Set()
    for (let i = 0; i < string.length; i++) {
      permutations.forEach((perm) => {
        const combination = perm.slice(0, i) + lastChar + perm.slice(i)
        set.add(combination)
      })
    }
    return set
  }

  return getPermutations(strings)
}

print(thrithyOne)('abc')


function thirthyTwo (array, highestScore) {
  const scoreCounts = new Array(highestScore + 1).fill(0)

  array.forEach((score) => {
    scoreCounts[score]++
  })

  const orderedScores = []

  for (let score = scoreCounts.length; score >= 0; score--) {
    const count = scoreCounts[score]
    for (let times = 1; times <= count; times++) {
      orderedScores.push(score)
    }
  }

  return orderedScores
}

print(thirthyTwo)([37, 89, 89, 41, 65, 91, 53, 100], 100)


function thirthyThree (array) {
  // read the question incorrectly
  function v1 () {
    const dict = {}

    for (let i = 0; i < array.length; i++) {
      const num = array[i]

      if (dict[num]) {
        return num
      } else {
        dict[num] = 1
      }
    }

    return -1
  }

  function v2 () {
    const n = array.length - 1

    // sum of n + 1
    const sum = (n * n + n) / 2

    const totalSum = array.reduce((total, curr) => {
      const newTotal = total + curr
      return newTotal
    }, 0)

    return totalSum - sum
  }

  return v2()
}

print(thirthyThree)([1, 2, 3, 4, 5, 2])

function thirthyFour (string) {
  const dict = new Map()

  for (let start = 0, end = 0; end < string.length;) {
    const char = string[end].charCodeAt()
    if (char >= 65 && char <= 122) {
      end++
    } else {
      if (end > start) {
        let word = string.substring(start, end)
        word = word.toLowerCase()
        dict.set(word, (dict.get(word) || 0) + 1)
      }

      end++
      start = end
    }
  }

  return dict
}

console.log('ThirthyFour:', thirthyFour('After beating the eggs, Dana read the next step:'))
console.log('ThirthyFour:', thirthyFour('We came, we saw, we conquered...then we ate Bill\'s (Mille-Feuille) cake.'))



function fourthyOne (numbers) {
  function isNegative (int) {
    return int < 0
  }
  for (let i = 0; i < numbers.length; i++) {
    const currentInteger = Math.abs(numbers[i])
    const isSeen = isNegative(numbers[currentInteger])

    if (!isSeen) {
      numbers[currentInteger] *= -1
    } else {
      return currentInteger
    }
  }
}

print(fourthyOne)([1, 2, 3, 4, 5, 2]) // 2


