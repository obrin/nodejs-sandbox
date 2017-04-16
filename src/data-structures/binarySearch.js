export default class BinarySearch {
  constructor() {
    this._root = null
  }

  add(value) {
    const node = {
      value,
      left: null,
      right: null
    }

    // used to traverse the structure
    // current = this._root
    let current

    // special case: no items in the tree yet
    if (!this._root) {
      this._root = node
    } else {
      current = this._root

      while(true) {
        // if the new value is less than this node's value, go left
        if (value < current.value) {
          // if there's no left, then the new node belongs there
          if (current.left === null) {
            current.left = node
            break
          } else {
            current = current.left
          }
        // if the new value is greater than this node's value, go right
        } else if (value > current.value) {
          // if there's no right, then the new node belongs there
          if (current.right === null) {
            current.right = node
            break
          } else {
            current = current.right
          }
        } else {
          break
        }
      }
    }
  }

  contains(value) {
    let found = false
    let current = this._root

    // make sure there's a node to search
    while(!found && current.value) {
      if (value < current.value) {
        current = current.left
      } else if (value > current.value) {
        current = current.right
      } else {
        found = true
      }
    }

    return found
  }

  traverse(process) {
    function inOrder(node) {
      if (node) {
        // traverse the left subtree
        if (node.left !== null) {
          inOrder(node.left)
        }

        // call the process method on this node
        process.call(this, node)

        // traverse the right subtree
        if (node.right !== null) {
          inOrder(node.right)
        }
      }
    }

    // start with the root
    inOrder(this._root)
  }

  remove(value) {
    let found = false
    let parent = null
    let current = this._root
    let childCount
    let replacement
    let replacementParent

    // make sure there's a node to search
    while(!found && current.value) {
      // if the value is less than current node's, go left
      if (value < current.value)  {
        parent = current
        current = current.left
      } else if (value > current.value) {
        parent = current
        current = current.right
      } else {
        found = true
      }
    }

    // only proceed if the node was found
    if (found) {
      // count how many children
      childCount = (current.left !== null ? 1: 0) + (current.right !== null ? 1 : 0)

      // special case: the value is at the root
      if (current === this._root) {
        switch(childCount) {
          // no children, just erase the root
          case 0:
            this._root = null
            break
          // only one child, use that as the root
          case 1:
            this._root = current.left || current.right
            break
          case 2:
            // new root will be the old root's left child
            replacement = this._root.left

            // find the right-most leaf node to be the real new node
            while (replacement.right !== null) {
              replacementParent = replacement
              replacement = replacement.right
            }

            // it's not the first node on the left
            if (replacementParent !== null) {
              // remove the new root from it's previous position
              // replacement.right will be null as we are at the right-most leaf node
              replacementParent.right = replacement.left

              // give the new root all of the old root's children
              replacement.right = this._root.right
              replacement.left = this._root.left
            } else {
              // just assign the children
              replacement.right = this._root.right
            }
            this._root = replacement
        }
      // non root values
      } else {
        switch(childCount) {
          // no children, just remove it from parent
          case 0:
            // if current value is less than its parent's, null out the left pointer
            if (current.value < parent.value) {
              parent.left = null
              // if current value is greater than its parent's, null out the right pointer
            } else {
              parent.right = null
            }
            break
          // one child, just reassign to parent
          case 1:
            // if the current value is less than its parent's, reset the left pointer
            if (current.value < parent.value) {
              parent.left = current.left || current.right
              // if the current value is greater than its parent's, reset the left pointer
            } else {
              parent.right = current.left || current.right
            }
            break
          // two children, a bit more complicated
          case 2:
            // reset pointers for new traversal
            replacement = current.left
            replacementParent = current

            // find the right-most node
            while(replacement.right !== null) {
              replacementParent = replacement
              replacement = replacement.right
            }

            replacementParent.right = replacement.left

            // assign children to the replacement
            replacement.right = current.right
            replacement.left = current.left

            // place the replacement in the right spot
            if (current.value < parent.value) {
              parent.left = replacement
            } else {
              parent.right = replacement
            }
        }
      }
    }

  }

  size() {
    let length = 0

    this.traverse(function(node) {
      length++
    })

    return length
  }

  toArray() {
    const result = []

    this.traverse(function(node) {
      result.push(node.value)
    })

    return result
  }

  toString() {
    return this.toArray().toString()
  }

}
