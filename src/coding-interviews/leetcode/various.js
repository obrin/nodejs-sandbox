/**
 A robot is located at the top-left corner of a m x n grid (marked 'Start' in the diagram below).
 The robot can only move either down or right at any point in time. The robot is trying to reach the bottom-right corner of the grid
 (marked 'Finish' in the diagram below).
 How many possible unique paths are there?
 Above is a 3 x 7 grid. How many possible unique paths are there?
 Note: m and n will be at most 100.
 **/
function runUniquePaths() {
  function uniquePaths(m, n) {
    const smaller = m > n ? n - 1 : m - 1
    let totalSteps = m + n - 2
    let result = 1
    for (let counter = 1; counter <= smaller; counter++) {
      result *= totalSteps--
      result /= counter
    }
    return result
  }

  const res = uniquePaths(7, 2)
  console.log('Unique Paths---------', res)
}

const treeNode = {
  val: 3,
  left: {
    val: 9,
    left: {
      val: 1
    }
  },
  right: {
    val: 20,
    left: {
      val: 15
    },
    right: {
      val: 7
    }
  }
}

const treeNodeBST = {
  val: 10,
  left: {
    val: 9,
    left: {
      val: 1
    }
  },
  right: {
    val: 20,
    left: {
      val: 15
    },
    right: {
      val: 25
    }
  }
}

function createTreeNode(val) {
  return {
    val,
    left: null,
    right: null
  }
}

/**
 Given a binary tree, return the level order traversal of its nodes' values. (ie, from left to right, level by level).
 */
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
function runLevelOrder() {
  /**
   * @param {TreeNode} root
   * @return {number[][]}
   */
  function levelOrder(root) {
    const queue = [root]
    const results = []
    let temp = []
    let currentLevelCount = 1
    let nextLevelCount = 0

    if (typeof root !== 'object') {
      return results
    }

    while (queue.length) {
      const node = queue.shift()
      temp.push(node.val)
      currentLevelCount--

      if (node.left) {
        queue.push(node.left)
        nextLevelCount++
      }

      if (node.right) {
        queue.push(node.right)
        nextLevelCount++
      }

      if (currentLevelCount === 0) {
        results.push(temp)
        temp = []
        currentLevelCount = nextLevelCount
        nextLevelCount = 0
      }
    }

    return results
  }

  const res = levelOrder(treeNode)
  console.log('level order--------------', res)
}

/**
 144. Binary Tree Preorder Traversal
 Given a binary tree, return the preorder traversal of its nodes' values.
 */

function runPreorderTraversal() {
  function preorderTraversal(root) {
    const result = []
    traverse(root, val => result.push(val))
    return result
  }

  function traverse(node, cb) {
    if (!node) return

    node.val && cb(node.val)
    traverse(node.left, cb)
    traverse(node.right, cb)
  }

  const res = preorderTraversal(treeNode)
  console.log('Preorder Traversal--------', res)
}


function runInorderTraversal() {
  function inorderTraversal(root) {
    const result = []
    traverse(root, val => result.push(val))
    return result
  }

  function traverse(node, cb) {
    if (!node) return

    traverse(node.left, cb)
    node.val && cb(node.val)
    traverse(node.right, cb)
  }

  const res = inorderTraversal(treeNode)
  console.log('Inorder Traversal--------', res)
}


function runPostorderTraversal() {
  function postorderTraversal(root) {
    const result = []
    traverse(root, val => result.push(val))

    return result
  }

  function traverse(node, cb) {
    if (!node) return

    traverse(node.left, cb)
    traverse(node.right, cb)
    node.val && cb(node.val)
  }

  const res = postorderTraversal(treeNode)
  console.log('Postorder Traversal----------', res)
}


/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {boolean}
 */
function runIsValidBST() {
  function isValidBST(root) {

    const value = traverse(root, (currentNode) => {
      const { left, right, val } = currentNode
      if (left && left.val > val) {
        return false
      }

      if (right && right.val < val) {
        return false
      }

      return true
    })

    // if is BST then value will be false
    return value === undefined
  }

  function traverse(node, cb) {
    if (!node) return

    if (!cb(node)) return false

    traverse(node.left, cb)
    traverse(node.right, cb)
  }

  const res = isValidBST(treeNodeBST)
  console.log('Is Valid BST-----------', res)
}
