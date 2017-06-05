import { print } from './utils'


/**
 * Algorithm: Merge Sort
 * Divide & conquer
 * Will only work if each array list is already sorted
 */
function mergeSortMerge(array1, array2) {
  const sorted = []
  const a1l = array1.length
  const a2l = array2.length
  let i = 0
  let j = 0
  while (i < a1l && j < a2l) {
    if (array1[i] < array2[j]) {
      sorted.push(array1[i])
      i++
    } else {
      sorted.push(array2[j])
      j++
    }
  }

  // remaining sorted array should be appended to sorted arrays
  while (i < a1l) {
    sorted.push(array1[i])
    i++
  }

  while (j < a2l) {
    sorted.push(array2[j])
    j++
  }

  return sorted
}

// print(mergeSortMerge)([1,3,5,6], [2,4,7,8,9])


function mergeSort(array) {
  const n = array.length
  let start = 0
  let m = Math.floor((n)/2)

  if (n < 2) {
    return array
  }

  const left = []
  const right = []

  while (start < m) {
    left.push(array[start])
    start++
  }

  while (m < n) {
    right.push(array[m])
    m++
  }

  const leftSorted = mergeSort(left)
  const rightSorted = mergeSort(right)

  return mergeSortMerge(leftSorted, rightSorted)
}

print(mergeSort)([1,6,3,4,8,2,1])

function partitionIndex(array, start, end) {
  let pIndex = start
  const pivot = array[end-1]

  while (start < end) {
    const current = array[start]
    if (current <= pivot) {
      // move left of pIndex
      const tmp = array[pIndex]
      array[pIndex] = array[start]
      array[start] = tmp
      if (current < pivot) {
        pIndex++
      }
    } else {
      // do nothing, value already above pIndex index
    }
    start++
  }

  return pIndex
}

// print(partitionIndex)([1,2,7,6,8,5,3,4], 0, 8)
// print(partitionIndex)([1,4,9,6], 2, 4)

function quickSort(array, start=0, end=array.length) {
  if (start < end) {
    // mutates array and returns partition index
    const pIndex = partitionIndex(array, start, end)
    quickSort(array, start, pIndex - 1)
    quickSort(array, pIndex + 1, end)
  }
  return array
}

print(quickSort)([1,2,7,6,8,5,5,3,6,4])
print(quickSort)([37, 89, 89, 41, 65, 91, 53])

