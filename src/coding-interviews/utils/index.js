export class ListNode {
  constructor(value = null) {
    this.value = value
    this.next = null
  }
}

export function print(fn, msg = '') {
  return function(...args) {
    const ans = fn(...args)
    let printAns = ans
    if (typeof ans === 'object') {
      printAns = JSON.stringify(ans, 0, 2)
    }
    if (msg) {
      console.log(msg)
    }
    console.log(fn.name, ':', printAns)
  }
}
