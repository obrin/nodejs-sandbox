
// class method
export default class {
  constructor() {
    this._size = 0
    this._storage = {}
  }

  push(data) {
    const size = this._size++
    this._storage[size] = data
  }

  pop() {
    const size = this._size
    let deletedData

    if (size) {
      deletedData = this._storage[size]

      delete this._storage[size]
      this.size--

      return deletedData
    }
  }
}

// factory method
export function stack() {
  const storage = []

  function push(data) {
    storage.push(data)
  }

  function pop() {
    if (storage.length) {
      return storage.pop()
    }
  }

  function size() {
    return storage.length
  }

  function print() {
    return storage
  }

  return {
    size,
    push,
    pop,
    print
  }
}
