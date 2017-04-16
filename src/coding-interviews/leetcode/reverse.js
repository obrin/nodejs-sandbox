import { print } from '../utils'

function reverse(x) {
  const MAX_BIT = 214748364
  let ret = 0
  while (x != 0) {
    if (Math.abs(ret) > MAX_BIT) {
      return 0;
    }
    ret = ret * 10 + (x % 10)
    x = Math.floor(x/10)
  }
  return ret
}

print(reverse)(123)
