export class ListNode {
  constructor(value = null) {
    this.value = value
    this.next = null
  }
}

export class BinaryTreeNode {
  constructor(value = null) {
    this.value = value
    this.left = null
    this.right = null
  }
}

export class Node {
  constructor(value) {
    this.value = value
    this.left = null
    this.right = null
  }
  insertLeft(value) {
    this.left = new Node(value)
    return this.left
  }
  insertRight(value) {
    this.right = new Node(value)
    return this.right
  }
  static isBalanced(n) {
    if (this.balancedHeight(n) > -1) return true
    return false
  }
  static balancedHeight(n) {
    if (n === null) return 0

    const h1 = this.balancedHeight(n.left)
    const h2 = this.balancedHeight(n.right)

    // tree is not balanced
    if (h1 === -1 || h2 === -1) return -1

    if (Math.abs(h2 - h1) > 1) return -1

    return Math.max(h2, h1) + 1
  }
}

function createBinaryTree() {
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
  node4R12L10.insertRight(11)

  return node4
}

export const bt = createBinaryTree()

function createBinaryTreeWeightBalanced() {
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

  return balancedNode
}

export const btWeightBalanced = createBinaryTreeWeightBalanced()

function createBinaryTreeNonBalanced() {
  const nonBalancedNode = new Node(1)
  nonBalancedNode
    .insertRight(2)
    .insertRight(3)
    .insertRight(4)

  return nonBalancedNode
}

export const btNonBalanced = createBinaryTreeNonBalanced()

export function print(fn, msg = '') {
  return function(...args) {
    const ans = fn(...args)
    let printAns = ans
    if (typeof ans === 'object') {
      printAns = JSON.stringify(ans, 0, 2)
    }
    if (msg) {
      console.log(msg)
    }
    console.log(fn.name, ':', printAns)
  }
}
