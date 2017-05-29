import { print } from '../utils'

function swapInit(array) {
  return function swap(index1, index2) {
    let tmp = array[index1]
    array[index1] = array[index2]
    array[index2] = tmp
  }
}

const subject = [4,3,1,2,6]
/**
 * O(n2)
 */
function selectionSort (array) {
  for (let i = 0; i < array.length; i++) {
    let min = array[i]
    let minIndex = i
    for (let j = i+1; j < array.length; j++) {
      if (array[j] < min) {
        min = array[j]
        minIndex = j
      }
    }

    let tmp = array[i]
    array[i] = array[minIndex]
    array[minIndex] = tmp
  }

  return array
}

print(selectionSort)(subject)

/**
 * Best case O(n)
 * Worst and Average Case O(n2)
 */
function bubbleSort (array) {
  const swap = swapInit(array)

  for (let i = 0; i < array.length - 1; i++) {
    let flag = true
    for (let j = 0; j < array.length - i - 1; j++) {
      if (array[j] > array[j+1]) {
        swap(j, j+1)
      } else {
        flag = false
      }
    }

    if (!flag) {
      return array
    }
  }

  return array
}
// best case
print(bubbleSort)([1,2,3,4,5])

// worst/average case
print(bubbleSort)(subject)

/**
 * Best case O(n)
 * Worst and Average Case O(n2)
 */
function insertionSort (array) {
  const swap = swapInit(array)

  for (let i = 1; i < array.length; i++) {
    const value = array[i]
    let hole = i
    while (hole > 0 && array[hole-1] > value) {
      swap(hole, hole-1)
      hole = i - 1
    }
    array[hole] = value
  }
  return array
}

print(insertionSort)(subject)


function mergeSort (array) {
  const n = array.length
  if (n < 2) {
    return array
  }

  const mid = Math.floor(n / 2)

  const arrayL = []
  for (let i = 0; i < mid; i++) {
    arrayL[i] = array[i]
  }

  const arrayR = []
  for (let i = mid; i < array.legth ; i++) {
    arrayR[i] = array[i]
  }

  const leftSort = mergeSort(arrayL)
  const rightSort = mergeSort(arrayR)
  return merge(leftSort, rightSort, array)
}

function merge (arrayL, arrayR, array) {
  let iL = 0
  const nL = arrayL.length
  let iR = 0
  const nR = arrayR.length
  let i = 0
  while (iL < nL && iR < nR) {
    if (arrayL[iL] <= arrayR[iR]) {
      array[i] = arrayL[iL]
      iL++
    } else {
      array[i] = arrayL[iR]
      iR++
    }
    i++
  }

  while (iL < nL) {
    array[i] = arrayL[iL]
    iL++
    i++
  }

  while (iR < nR) {
    array[i] = arrayL[iR]
    iR++
    i++
  }

  return array
}

print(mergeSort)(subject)

