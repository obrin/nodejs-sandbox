import { print } from '../utils'

/*
* 01
*
 var stockPricesYesterday = [10, 7, 5, 8, 11, 9];

 getMaxProfit(stockPricesYesterday);
 // returns 6 (buying for $5 and selling for $11)
**/

let stockPricesYesterday = [10, 7, 5, 8, 11, 9]; // ans: 6
let stockPricesYesterday2 = [10, 15, 5, 8, 6, 12]; // ans: 7

function getMaxProfit (array) {
  // let ans = 0
  let biggest = array[0]
  let smallest = array[0]
  let difference = 0

  for (let i = 1; i < array.length; i++) {
    const current = array[i]

    smallest = Math.min(smallest, current)

    const currentDiff = current - smallest

    difference = Math.max(difference, currentDiff)
  }

  return difference
}

// print(getMaxProfit)(stockPricesYesterday2)


