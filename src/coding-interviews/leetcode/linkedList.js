import { print } from '../utils'

class ListNode {
  constructor(value = null) {
    this.value = value
    this.next = null
  }
}

function mergeSortedList(l1, l2) {
  let dummyHead = new ListNode(0)
  let p = dummyHead

  while(!!l1 && !!l2) {
    if (l1.value > l2.value) {
      p.next = new ListNode(l2.value)
      l2 = l2.next
    } else {
      p.next = new ListNode(l1.value)
      l1 = l1.next
    }

    // p still has the reference to the innermost dummyHead object
    p = p.next
  }

  if (!!l1) {
    p.next = new ListNode(l1)
  }

  if (!!l2) {
    p.next = new ListNode(l2)
  }

  return dummyHead.next
}

const l1 = new ListNode(1)
l1.next = new ListNode(3)
l1.next.next = new ListNode(5)
l1.next.next.next = new ListNode(7)

const l2 = new ListNode(2)
l2.next = new ListNode(4)
l2.next.next = new ListNode(8)
l2.next.next = new ListNode(9)

// print(mergeSortedList)(l1, l2)


/**
 * Leetcode 21. Add Two Numbers
 */
function addTwoNumbers(l1, l2) {
  let dummyHead = new ListNode(0)
  let p = dummyHead
  let carry = 0

  while (l1 != null && l2 != null) {
    const sum = l1.value + l2.value + carry

    if (sum < 10) {
      p.next = new ListNode(sum)
      carry = 0
    } else {

      // take only last digit
      p.next = new ListNode(sum % 10)
      carry = 1
    }

    // proceed to next node for evaluation
    l1 = l1.next
    l2 = l2.next
    p = p.next
  }

  if (carry) {
    p.next = new ListNode(1)
  }

  return dummyHead.next
}

const l11 = new ListNode(3)
l11.next = new ListNode(5)
l11.next.next = new ListNode(3)


const l22 = new ListNode(2)
l22.next = new ListNode(5)
l22.next.next = new ListNode(4)


const l111 = new ListNode(9)
l111.next = new ListNode(9)
l111.next.next = new ListNode(9)


const l222 = new ListNode(9)
l222.next = new ListNode(9)
l222.next.next = new ListNode(9)


// print(addTwoNumbers)(l11, l22) // 508
// print(addTwoNumbers)(l111, l222) // 8991

/**
 * 22. Swap Node in Pairs
 */
function swapNodeInPairs(list) {
  // create dummy to prevent need to determine the head
  const dummyHead = new ListNode(0)
  dummyHead.next = list
  let a = list
  let prev = dummyHead

  while (a && a.next !== null) {
    const b = a.next
    const c = a.next.next

    prev.next = b
    b.next = a
    a.next = c
    prev = a
    a = c
  }

  return dummyHead.next
}

// print(swapNodeInPairs)(l1)
