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
let stockPricesYesterday3 = [15, 9, 8, 2]; // ans: -1

function getMaxProfit (array) {
  let smallest = array[0]
  let maxProfit = array[1] - array[0]

  for (let i = 1; i < array.length; i++) {
    const current = array[i]

    const currentDiff = current - smallest

    maxProfit = Math.max(maxProfit, currentDiff)

    smallest = Math.min(smallest, current)
  }

  return maxProfit
}

print(getMaxProfit)(stockPricesYesterday3)


