import { print } from '../utils'

const array1 = [2, 4, 10, 10, 10, 18, 20]

function binarySearchRecursive (array, x, low, high) {
  low = low || 0
  high = high || array.length - 1

  let mid = Math.floor((low + high) / 2)
  if (x === array[mid]) {
    return mid
  } else if (x < array[mid]) {
    return binarySearchRecursive(array, x, low, mid - 1)
  } else {
    return binarySearchRecursive(array, x, mid + 1, high)
  }
}

print(binarySearchRecursive)(array1, 10)

function binarySearchIterative (array, x) {
  let low = 0
  let high = array.length - 1

  while (low <= high) {
    let mid = Math.floor((low + high) / 2)
    if (x === array[mid]) {
      return mid
    } else if (x < array[mid]) {
      high = mid - 1
    } else {
      low = mid + 1
    }
  }

  return -1
}

print(binarySearchIterative)(array1, 10)

function binarySearchFirstIndex (array, x) {
  let low = 0
  let high = array.length - 1
  let result = -1

  while (low <= high) {
    let mid = Math.floor((low + high) / 2)

    if (x === array[mid]) {
      result = mid
      high = mid - 1
    } else if (x < array[mid]) {
      high = mid - 1
    } else {
      low = mid + 1
    }
  }

  return result
}

print(binarySearchFirstIndex)(array1, 10)


function binarySearchLastIndex (array, x) {
  let low = 0
  let high = array.length - 1
  let result = -1

  while (low <= high) {
    let mid = Math.floor((low + high) / 2)

    if (x === array[mid]) {
      result = mid
      low = mid + 1
    } else if (x < array[mid]) {
      high = mid - 1
    } else {
      low = mid + 1
    }
  }

  return result
}

print(binarySearchLastIndex)(array1, 10)


function numberOfOccurrence (array, x) {
  function binarySearchIndex (array, x, firstIndex) {
    let low = 0
    let high = array.length - 1
    let result = -1

    while (low <= high) {
      let mid = Math.floor((low + high)/2)
      if (x === array[mid]) {
        result = mid
        if (firstIndex) {
          high = mid - 1
        } else {
          low = mid + 1
        }
      } else if (x < array[mid]) {
        high = mid - 1
      } else {
        low = mid + 1
      }
    }

    return result
  }

  const first = binarySearchIndex(array, x, true)
  const last = binarySearchIndex(array, x, false)

  if (first === -1 || last === -1) {
    return 0
  }

  return last - first + 1
}

print(numberOfOccurrence)([1,2,3,5,5,5,5,5,5,6,7,8], 5)

function numberOfTimesSorted (array) {
  // case 1: low <= high | return low
  // case 2: mid < next && mid > prev | BINGO
  // case 3: mid > low | mid - low is all sorted; low = mid + 1
  // case 4: mid < high | mid - high is all sorted; high = mid - 1

  const n = array.length - 1
  let low = 0
  let high = n

  while (low <= high) {
    let mid = Math.floor((low+high)/2)
    if (array[low] < array[high]) {
      return low
    }

    const next = (mid + 1) % n
    const prev = (mid + n - 1) % n
    if (array[mid] < array[next] && array[mid] < array[prev]) {
      return mid
    }

    if (array[mid] > array[low]) {
      low = mid + 1
    }

    if (array[mid] < array[high]) {
      high = mid - 1
    }
  }

  return -1
}
print(numberOfTimesSorted)([11,12,15,2,5,6,8])
print(numberOfTimesSorted)([11,12,15,18,2,5,6,8])

function binarySearchCircular (array, x) {
  // case 1: x == mid
  // case 2: upper is sorted | x in upper
  // case 3: lower is sorted | x in lower

  let low = 0
  let high = array.length - 1

  while (low <= high) {
    let mid = Math.floor((low+high)/2)

    if (array[mid] === x) {
      return mid
    }

    if (array[mid] < array[high]) {
      // x is in sorted upper bound
      if (x > array[mid] && x <= array[high]) {
        low = mid + 1
      } else { // x does not exist in upper bound
        high = mid - 1
      }
    }

    if (array[mid] > array[low]) {
      // x is in sorted lower bound
      if (x < array[mid] && x >= array[low]) {
        high = mid - 1
      } else { // x is not in sorted lower bound
        low = mid + 1
      }
    }
  }

  return -1
}

print(binarySearchCircular)([12, 14, 18, 21, 3, 6, 8, 9], 3)
