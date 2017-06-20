/* eslint-disable no-unused-vars, no-use-before-define, space-before-function-paren, comma-dangle */
import { print, BinaryTreeNode, bt } from '../utils/index'

function BFS (rootNode) {
  const queue = [rootNode]
  const ans = []

  while (queue.length) {
    const node = queue.shift()
    if (node.left) {
      queue.push(node.left)
    }

    if (node.right) {
      queue.push(node.right)
    }

    ans.push(node.value)
  }

  return ans
}

print(BFS)(bt)


function DFSRecursive (node) {
  const ans = []
  function _search (stack = []) {
    const current = stack.pop()

    if (!current) return null


    if (current.right) stack.push(current.right)
    if (current.left) stack.push(current.left)

    if (current.value) ans.push(current.value)

    return _search(stack)
  }

  _search([node])
  return ans
}

print(DFSRecursive)(bt)

function DFSIterative (node) {
  const ans = []
  const stack = [node]

  while (stack.length) {
    const current = stack.pop()

    if (current.right) stack.push(current.right)
    if (current.left) stack.push(current.left)

    ans.push(current.value)
  }
  return ans
}

print(DFSIterative)(bt)





