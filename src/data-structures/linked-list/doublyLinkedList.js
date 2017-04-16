export default class DoublyLinkedList {
  constructor() {
    this._length = 0
    this._head = null
    this._tail = null
  }

  add(data) {
    // create a new item object, place data in
    const node = {
      data,
      next: null,
      prev: null
    }

    // special case: no items in the list yet
    if (this._length === 0) {
      this._head = node
      this._tail = node
    } else {
      // attach the tail to the node
      this._tail.next = node
      node.prev = this._tail

      this._tail = node
    }

    // don't forget to update the count
    this._length++
  }

  remove(index) {
    // check for out-of-bound values
    if (index > -1 && index < this._length) {
      let current = this._head
      let i = 0

      // special case: removing first item
      if (index === 0) {
        this._head = current.next

        /*
         * If there's only one item in the list and you remove it,
         * then this._head will be null. In that case, you should
         * also set this._tail to be null to effectively destroy
         * the list. Otherwise, set the previous pointer on the
         * new this._head to be null.
         */

        if (!this._head) {
          this._tail = null;
        } else {
          this._head.prev = null
        }
      // special case: removing last item
      } else if (index === this._length - 1) {
        current = this._tail
        this.tail = current.prev
        this.tail.next = null
      } else {

        // find the right location
        while(i++ < index) {
          current = current.next
        }

        // skip over the item to remove
        current.prev.next = current.next
      }
      this._length--

      return current.data
    } else {
      return null
    }
  }

  /**
   * Retrieves the data in the given position in the list
   * @param {int} index The zero-based index of the item whole value should be returned
   * @returns {*} The value in the data portion of the given item or null if the item doesn't exist
   */
  item(index) {
    let current = this._head
    let i = 0

    if (index > -1 && index < this._length) {
      while(i++ < index) {
        current = current.next
      }

      return current.data
    } else {
      return null
    }
  }

  size() {
    return this._length
  }

  toArray() {
    const result = []
    let current = this._head

    while(current) {
      result.push(current.data)
      current = current.next
    }

    return result
  }

  /**
   * Converts the list into a string representation
   * @returns {String} A string representation of the list
   */
  toString() {
    return this.toArray().toString()
  }
}
