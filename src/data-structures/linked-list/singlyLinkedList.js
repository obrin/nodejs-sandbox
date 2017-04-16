export default class SinglyLinkedList {
  constructor() {
    this._length = 0
    this._head = null
  }

  add(data) {
    // create new node, place in data
    const node = {
      data,
      next: null
    }
    // used to traverse the structure
    let current

    // special case: no items in the list yet
    if (!this._head) {
      this._head = node
    } else {
      current = this._head

      // approach last node
      while(current.next) {
        current = current.next
      }

      current.next = node
    }

    this._length++
  }

  item(index) {
    // check index is in range
    if (index > -1 && index < this._length) {
      let current = this._head
      let i = 0

      while(i++ < index) {
        current = current.next
      }

      return current.data
    } else {
      return null
    }
  }

  remove(index) {
    // check index is in range
    if (index > -1 && index < this._length) {
      let current = this._head
      let i = 0
      let previous

      // special case: removing first item
      if (index === 0) {
        this._head = current.next
      } else {
        while(i++ < index) {
          previous = current
          current = current.next
        }
        // skip over the item to remove
        previous.next = current.next
      }
      this._length--

      return current.data

    } else {
      return null
    }
  }
}
