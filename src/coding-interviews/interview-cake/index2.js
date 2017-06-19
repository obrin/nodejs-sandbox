/* eslint-disable no-use-before-define */
/* eslint-disable no-unused-vars, space-before-function-paren, comma-dangle */
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

// print(three)([-10, -10, 1, 3, 2]) // 300
// print(three)([-10, 10, 1, 3, 2]) // 60

const myRectangle1 = {
  // coordinates of bottom-left corner
  leftX: 1,
  bottomY: 5,

  // width and height
  width: 10,
  height: 4,
}

const myRectangle2 = {
  // coordinates of bottom-left corner
  leftX: 0,
  bottomY: 4,

  // width and height
  width: 12,
  height: 6,
}

function six (rect1, rect2) {
  function findOverlap (point1, length1, point2, length2) {
    const lowestBound = Math.max(point1, point2)
    const highestBound = Math.min(point1 + length1, point2 + length2)

    if (lowestBound >= highestBound) {
      return {
        startPoint: null,
        overlapLength: null
      }
    }

    return {
      startPoint: lowestBound,
      overlapLength: highestBound - lowestBound
    }
  }

  const xOverlap = findOverlap(rect1.leftX, rect1.width, rect2.leftX, rect2.width)
  const yOverlap = findOverlap(rect1.bottomY, rect1.height, rect2.bottomY, rect2.height)

  if (!xOverlap.startPoint || !yOverlap.startPoint) {
    return {
      leftX: null,
      bottomY: null,
      width: null,
      height: null
    }
  }

  return {
    leftX: xOverlap.startPoint,
    bottomY: yOverlap.startPoint,
    width: xOverlap.overlapLength,
    height: yOverlap.overlapLength
  }
}

// print(six)(myRectangle1, myRectangle2)

class Node {
  constructor (value) {
    this.value = value
    this.left = null
    this.right = null
  }
  insertLeft (value) {
    this.left = new Node(value)
    return this.left
  }
  insertRight (value) {
    this.right = new Node(value)
    return this.right
  }
  static isBalanced (n) {
    if (this.balancedHeight(n) > -1) return true
    return false
  }
  static balancedHeight (n) {
    if (n === null) return 0

    const h1 = this.balancedHeight(n.left)
    const h2 = this.balancedHeight(n.right)

    // tree is not balanced
    if (h1 === -1 || h2 === -1) return -1

    if (Math.abs(h2 - h1) > 1) return -1

    return Math.max(h2, h1) + 1
  }
}

/**
 * There are two different definitions of balanced binary
 * 1. Height-balanced. balanced if for any two leaves the difference in depth is at msot 1
 * 2. Weight-balanced. balanced if for each node it hold the number of inner nodes in the
 * left subtree and the number of inner nodes in the right subtree differ at most by 1
 */

/**
 * Weight-balanced
 *         1
 *       /   \
 *      3     7
 *     /    /   \
 *    2    6     8
 */
const balancedNode = new Node(1)
balancedNode
  .insertLeft(3)
  .insertLeft(2)

const node2 = balancedNode.insertRight(7)
node2.insertLeft(6)
node2.insertRight(8)

const nonBalancedNode = new Node(1)
nonBalancedNode
  .insertRight(2)
  .insertRight(3)
  .insertRight(4)

function eight () {
  /**
   * node3
   *         3
   *       /   \
   *      2     4
   *              \
   *               5
   */
  const node3 = new Node(3)
  node3
    .insertRight(4)
    .insertRight(5)

  node3.insertLeft(2)

  function weightBalanced () {
    return {
      balanced: Node.isBalanced(balancedNode), // true
      nonBalanced: Node.isBalanced(nonBalancedNode) // false
    }
  }

  function maxHeight (n) {
    if (n === null) return -1

    return Math.max(maxHeight(n.left), maxHeight(n.right)) + 1
  }

  const MAX_INT = 99999

  function minHeight (n) {
    if (n === null) return -1

    // at leaf
    if (n.right === null && n.left === null) return 0

    // for an internal node, null child will not be considered
    const right = n.right === null ? MAX_INT : minHeight(n.right)
    const left = n.left === null ? MAX_INT : minHeight(n.left)

    return Math.min(right, left) + 1
  }

  function heightBalanced (n) {
    return maxHeight(n) - minHeight(n)
  }

  return {
    weightBalanced: weightBalanced(),
    heightBalanced: heightBalanced(balancedNode), // 0
    heightBalanced2: heightBalanced(node3), // 1
    maxHeight: maxHeight(balancedNode), // 2
    minHeight: minHeight(node3) // 1
  }
}

// print(eight)()

const nonBinarySearchTree = new Node(5)
nonBinarySearchTree
  .insertLeft(4)
  .insertRight(6) // should be less than 5

nonBinarySearchTree
  .insertRight(7)
  .insertLeft(6)

const binarySearchTree = new Node(5)
binarySearchTree
  .insertLeft(2)
  .insertRight(4)

binarySearchTree
  .insertRight(7)
  .insertLeft(6)

function nine (rootNode) {
  function isBinarySearchTreeIterative (rootNode) {
    const stack = []
    stack.push({ node: rootNode, upperBound: Infinity, lowerBound: -Infinity })

    while (stack.length) {
      const { node, upperBound, lowerBound } = stack.pop()

      if (node.value >= upperBound || node.value <= lowerBound) {
        return false
      }

      if (node.left) {
        stack.push({ node: node.left, upperBound: node.value, lowerBound })
      }

      if (node.right) {
        stack.push({ node: node.right, upperBound, lowerBound: node.value })
      }
    }

    return true
  }

  /**
   * Time Complexity O(n)
   * Space Complexity O(n) or O(d) where d is depth
   */
  function isBinarySearchTreeRecursive (node, lowerBound = -Infinity, upperBound = Infinity) {
    if (node === null) return true

    if (node.value <= lowerBound || node.value >= upperBound) {
      return false
    }

    return isBinarySearchTreeRecursive(node.left, lowerBound, node.value) &&
           isBinarySearchTreeRecursive(node.right, node.value, upperBound)
  }

  return {
    isBinarySearchTreeIterative: isBinarySearchTreeIterative(rootNode),
    isBinarySearchTreeRecursive: isBinarySearchTreeRecursive(rootNode)
  }
}

// print(nine)(binarySearchTree) // true
// print(nine)(nonBinarySearchTree) // false

/**
.        ( 5 )
        /     \
      (3)     (8)
     /  \     /  \
   (1)  (4) (7)  (12)
                 /
               (10)
               /  \
             (9)  (11)
 */

const node4 = new Node(5)
const node4L = node4.insertLeft(3)
const node4R = node4.insertRight(8)

node4L.insertLeft(1)
node4L.insertRight(4)

node4R.insertLeft(7)
const node4R12 = node4R.insertRight(12)
const node4R12L10 = node4R12.insertLeft(10)
node4R12L10.insertLeft(9)
node4R12L10.insertRight(10)

function ten (rootNode) {
  function findLargest (node) {
    if (!node) {
      throw new Error('Tree must have at least one node')
    }

    if (node.right) {
      return findLargest(node.right)
    }

    return node.value
  }
  /**
   * Time O(d) Space O(d)
   */
  function secondLargest () {
    const stack = []
    stack.push(rootNode)

    while (stack.length) {
      const node = stack.pop()

      // case: we're currently at the largest, and and the largest has a left sub tree,
      // so 2nd largest is largest in said subtree
      if (!node.right && node.left) {
        return findLargest(node.left)
      }

      // has grandchildren on either side
      if (node.right && (node.right.right || node.right.left)) {
        stack.push(node.right)
      } else {
        return node.value
      }
    }
  }

  /**
   * Time O(d) Space O(1)
   */
  function secondLargestV2 () {
    // const stack = []
    // stack.push(rootNode)
    let node = rootNode

    while (node) {
      // const node = stack.pop()

      // case: we're currently at the largest, and and the largest has a left sub tree,
      // so 2nd largest is largest in said subtree
      if (!node.right && node.left) {
        return findLargest(node.left)
      }

      // has no grandchildren on either side
      if (node.right && !(node.right.right || node.right.left)) {
        return node.value
      }

      node = node.right
    }
    return null
  }

  return {
    secondLargest: secondLargest(),
    secondLargestV2: secondLargestV2()
  }
}

print(ten)(binarySearchTree) // 6
print(ten)(node4) // 10


function eleven () {
  class Trie {
    constructor () {
      this.rootNode = {}
    }
    checkPresentAndAdd (string) {
      let isNewWord = false
      let current = this.rootNode

      for (let i = 0; i < string.length; i++) {
        const letter = string[i]
        if (!current.hasOwnProperty(letter)) {
          isNewWord = true
          current[letter] = {}
        }

        current = current[letter]
      }

      const LAST_WORD = '*'

      if (!current.hasOwnProperty(LAST_WORD)) {
        isNewWord = true
        current[LAST_WORD] = {}
      }

      return isNewWord
    }
  }

  const trie = new Trie()
  console.log(trie.checkPresentAndAdd('google.com')) // true
  console.log(trie.checkPresentAndAdd('google.com')) // false
  console.log(trie.checkPresentAndAdd('google.com/hello')) // true
  console.log(trie.checkPresentAndAdd('google.com/hello')) // false
}

console.log('eleven')
// eleven()

function sixteen () {
  const cakeTypes1 = [
    { weight: 7, value: 160 },
    { weight: 3, value: 90 },
    { weight: 2, value: 15 },
  ]

  const cakeTypes2 = [
    { weight: 1, value: 1 },
    { weight: 3, value: 4 },
    { weight: 4, value: 5 },
    { weight: 5, value: 7 },
  ]

  const capacity1 = 20
  const capacity2 = 7

  function unboundedKnapsack (cakeTypes, capacity) {
    const max = new Array(capacity).fill(0)
    cakeTypes.forEach((cake) => {
      for (let i = cake.weight; i < max.length; i++) {
        max[i] = Math.max(max[i], max[i - cake.weight] + cake.value)
      }
    })

    return max[capacity - 1]
  }

  function knapsack01 (cakeTypes, capacity) {
    const memo = Array(cakeTypes.length).fill(0).map(() => Array(capacity + 1).fill(0))
    console.log(memo)
    cakeTypes.forEach((cake, i) => {
      for (let j = 0; j <= capacity; j++) {
        const previousMax = memo[i - 1] && memo[i - 1][j] || 0
        // if insufficient capacity, take best value from previous level
        if (j < cake.weight) {
          memo[i][j] = previousMax
        } else {
          const potentialMax = memo[i - 1] && memo[i - 1][j - cake.weight] || 0
          memo[i][j] = Math.max(previousMax, cake.value + potentialMax)
        }
      }
    })

    return memo[cakeTypes2.length - 1][capacity]
  }

  return {
    unbounded: unboundedKnapsack(cakeTypes1, capacity1), // 540
    bounded: knapsack01(cakeTypes2, capacity2)
  }
}

print(sixteen)()

function thirthyOne (strings) {
  function permutations (string) {
    if (string.length <= 1) {
      return new Set(string)
    }

    const allCharsExceptLast = string.slice(0, -1)
    const lastChar = string[string.length - 1]

    const perms = permutations(allCharsExceptLast)
    const set = new Set()

    perms.forEach((perm) => {
      for (let i = 0; i <= perm.length; i++) {
        const combination = perm.slice(0, i) + lastChar + perm.slice(i)
        set.add(combination)
      }
    })

    // for (let i = 0; i < string.length; i++) {
    //   perms.forEach((perm) => {
    //     const combination = perm.slice(0, i) + lastChar + perm.slice(i)
    //     set.add(combination)
    //   })
    // }

    return set
  }

  return permutations(strings)
}

print(thirthyOne)('abcd')

