import { print } from '../utils'

/**
 * Needle in a haystack
 */

const haystack = 'hello world'
const needle = 'd'

function needleHaystack(haystack, needle) {
  for (let i = 0; i <= haystack.length; i++) {
    for (let j = 0; j <= needle.length; j++) {
      if (j === needle.length) {
        return i
      }

      // current needle position and current haystack
      // position is longer than haystack length, we've exceeded
      if (i + j >= haystack.length) {
        return -1
      }

      // when char doesn't match then break loop
      if (haystack[i + j] !== needle[j]) {
        break;
      }
    }
  }
}

print(needleHaystack)(haystack, needle)
