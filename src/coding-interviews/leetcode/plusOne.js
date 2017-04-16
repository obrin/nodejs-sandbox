import { print } from '../utils'

function plusOne(arrayNum) {
  for (let i = arrayNum.length - 1; i >= 0; i--) {
    if (arrayNum[i] < 9) {
      arrayNum[i]++
      return arrayNum
    } else {
      arrayNum[i] = 0
    }
  }

  // when all numbers are 9, only then it will reach this point of the code
  arrayNum.unshift(1)
  return arrayNum
}

print(plusOne)([9, 9, 9])
print(plusOne)([1, 8, 9])
print(plusOne)([1, 8, 7])
