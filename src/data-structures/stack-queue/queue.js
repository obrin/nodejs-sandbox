export default class {
  constructor() {
    this._oldestIndex = 1
    this._newestIndex = 1
    this._storage = {}
  }

  size() {
    return this._newestIndex - this._oldestIndex
  }

  enqueue(data) {
    this._storage[this._newestIndex] = data
    this._newestIndex++
  }

  dequeue() {
    const oldestIndex = this._oldestIndex
    const deletedData = this._storage[oldestIndex]
    delete this._storage[oldestIndex]
    this._oldestIndex++
    return deletedData
  }
}

function queue() {
  const q = []

  function size() {
    return q.length
  }

  function enqueue(data) {
    return q.push(data)
  }

  function dequeue() {
    return q.shift()
  }

  return {
    size,
    enqueue,
    dequeue
  }
}
