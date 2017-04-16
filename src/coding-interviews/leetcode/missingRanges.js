import { print } from '../utils'

/**
 * Missing Ranges
 * Time: O(n)
 * Space: O(n)
 */
function missingRanges(array) {
  const ans = []

  if (array[0] > 1) {
    ans.push(`${0} -> ${array[0] - 1}`)
  }

  if (!array.length) {
    ans.push(`${0} -> ${99}`)
  }

  for (let i = 1; i <= array.length; i++) {
    const valSmall = array[i - 1] + 1
    const valBig = array[i] - 1

    if (array.length  === i) {
      ans.push(`${valSmall} -> ${99}`)
      continue
    }

    if (valSmall > valBig) {
      continue
    }

    if (valBig === valSmall) {
      ans.push(`${valSmall}`)
      continue
    }

    if (valBig > valSmall) {
      ans.push(`${valSmall} -> ${valBig}`)
    }
  }

  return ans
}

print(missingRanges)([0, 1, 3, 50, 75])
print(missingRanges)([])


function missingRangesV2(array, start=0, end=99) {
  const ans = []
  let prev = start - 1

  for (let i = 0; i <= array.length; i++) {
    let current
    if (i === array.length) {
      current = end + 1
    } else {
      current = array[i]
    }

    if (current - prev > 1) {
      ans.push(getRange(prev + 1, current - 1))
    }

    prev = current
  }

  return ans

  function getRange(prev, curr) {
    return prev === curr ? `${prev}` : `${prev} -> ${curr}`
  }
}

print(missingRangesV2)([0, 1, 3, 50, 75])
print(missingRangesV2)([])
