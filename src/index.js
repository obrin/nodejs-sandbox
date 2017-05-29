async function mainAsync () {
  await mainAsyncAPI()
  console.log('hello')
}

async function mainAsyncAPI () {
  try {

    const res = fakeApiPromise()



    console.log('hello world')

    // const answer1 = await res
    // const answer2 = await res
    // const answer3 = await res


  } catch (err) {
    console.log(err)
  }
}



function mainCb (cb) {
  fakeApiCallback('something', (err, res) => {
    if (err) {
      return cb(err)
    }

    fakeApiCallback(res, (err, res) => {
      if (err) {
        return cb(err)
      }

      cb(null, res)
      cb(null, res)
      cb(null, res)
      cb(null, res)
      cb(null, res)
    })
  })
}

function chargeCustomer() {
  console.log('charge')
}
mainCb(chargeCustomer)

function fakeApiCallback(value, cb) {
  setTiemout(() => {
    cb(null, 'hello')
  }, 1000)
}

function fakeApiPromise(value) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('hello')
      resolve('hello')
      resolve('hello')
      resolve('hello')
      resolve('hello')
    })
  })
}





// const a = {
//   a: 1,
//   b: 2
// }
// const a = [1,2,3,4]
//
// for (const b of a) {
//   console.log(b)
// }

// function getHome () {
//   return [
//     {
//       "title": "Only on iflix",
//       "items": [
//         { "contentKey": "1" },
//         { "contentKey": "2" }
//       ]
//     },
//     {
//       "title": "Just Added",
//       "items": [
//         { "contentKey": "3" },
//         { "contentKey": "4" }
//       ]
//     },
//     {
//       "title": "Korean",
//       "items": [
//         { "contentKey": "5" },
//         { "contentKey": "6" }
//       ]
//     },
//     {
//       "title": "Drama",
//       "items": [
//         { "contentKey": "7" },
//         { "contentKey": "8" }
//       ]
//     },
//     {
//       "title": "Action",
//       "items": [
//         { "contentKey": "9" },
//         { "contentKey": "10" }
//       ]
//     },
//     {
//       "title": "Disney",
//       "header": {
//         "layout": "branded"
//       },
//       "items": [
//         { "contentKey": "11" },
//         { "contentKey": "12" }
//       ]
//     },
//     {
//       "title": "Marvel",
//       "header": {
//         "layout": "branded"
//       },
//       "items": [
//         { "contentKey": "13" },
//         { "contentKey": "14" }
//       ]
//     }
//   ]
// }
//
// function getContinueWatching () {
//   return [
//     {
//       "directPlay": true,
//       "title":"Continue 1",
//       "items":[
//         {
//           "contentKey":"15"
//         },
//         {
//           "contentKey":"16"
//         }
//       ]
//     },
//     {
//       "directPlay": true,
//       "title":"Continue 2",
//       "items":[
//         {
//           "contentKey":"17"
//         },
//         {
//           "contentKey":"18"
//         }
//       ]
//     }
//   ]
// }
//
// function getRecommendedForYou () {
//   return [
//     {
//       "title": "Recommended 1",
//       "items":[
//         {
//           "contentKey":"19"
//         },
//         {
//           "contentKey":"20"
//         }
//       ]
//     },
//     {
//       "title": "Recommended 1",
//       "items":[
//         {
//           "contentKey":"21"
//         },
//         {
//           "contentKey":"22"
//         }
//       ]
//     }
//   ]
// }
//
// /**
//  * O(n x m)
//  * splits items if criteria is matched
//  * returns matched criteria in first array and non-matched in second array
//  * Allows for matching keys two levels deep
//  * For example:
//  * params criteria = { key: 'header.layout', value: 'branded' }
//  * matches to value 'branded' in objects two levels deep; header.layout
//  */
// function splitItems (criteria, items) {
//   const isMatch = (item) => (criterion) => {
//     const [key1, key2] = `${criterion.key}`.split('.')
//
//     // resolve deep key if it exists e.g., { header : { layout: 'branded' } } should resolve branded
//     // the deep key is passed in from criteria e.g., criteria = { key: 'header.layout', value: 'branded' }
//     let itemValue = item[key1]
//     if (item[key1] && item[key1][key2]) {
//       itemValue = item[key1][key2]
//     }
//
//     return `${itemValue}`.toLowerCase() === `${criterion.value}`.toLowerCase()
//   }
//
//   const match = items.filter((item) => criteria.find(isMatch(item)))
//   const nonMatch = items.filter((item) => !criteria.find(isMatch(item)))
//
//   return [match, nonMatch]
// }
//
// function main () {
//   let groupMain = []
//   let groupBrands = []
//   let groupOthers = []
//   let content = []
//
//   const home = getHome()
//   const continueWatching = getContinueWatching()
//   const recommended = getRecommendedForYou()
//
//   const mainOthersSplitCriteria = [{
//     key: 'title',
//     value: 'Only on iflix',
//   }, {
//     key: 'title',
//     value: 'Just Added',
//   }]
//
//   const [groupMainOthers, othersWithBrands] = splitItems(mainOthersSplitCriteria, home)
//
//   groupMain = groupMain
//     .concat(groupMainOthers)
//     .concat(recommended)
//     .concat(continueWatching)
//
//   const brandedSplitCriteria = [{
//     key: 'header.layout',
//     value: 'branded',
//   }]
//
//   const [branded, others] = splitItems(brandedSplitCriteria, othersWithBrands)
//
//   groupBrands = groupBrands
//     .concat(branded)
//
//   groupOthers = groupOthers
//     .concat(others)
//
//   const contentBreak = { type: 'break' }
//
//   return content
//     .concat(groupMain)
//     .concat(contentBreak)
//     .concat(groupBrands)
//     .concat(contentBreak)
//     .concat(groupOthers)
// }
// const home = getHome()
// const brandedSplitCriteria = [{
//   key: 'header.layout',
//   value: 'branded',
// }]
//
// // const [branded, others] = splitItems(brandedSplitCriteria, home)
//
// const content = main()
//
// // console.log('----------', content)
//
// /**
//  * To simplify things, the first group will not be lazy loaded
//  */
// function lazyLoading () {
//   let currentRow = calculateNumRows(1000, 200)
//
//   return content.slice(0, currentRow)
// }
//
// // console.log(lazyLoading())
//
// function lazyLoadingHorizontal (index, newIndex, currentTree, fullTree) {
//   return currentTree[index].items = fullTree[index].items.slice(0, newIndex)
// }
//
// // console.log(lazyLoadingHorizontal(0, 2, content, content))
//
// function calculateNumRows (height, rowSize) {
//   // give a margin or error of screen size so that more rows will be loaded than needed
//   const margin = 1.3
//   return Math.ceil((height * margin) / rowSize)
// }
//
// // console.log(calculateNumRows(1000, 200))
//
// // console.log(JSON.stringify(lazyLoading()[2], null, 2))
//
//
//
// // console.log('---BRANDED', JSON.stringify(content, null, 2))
// // console.log('---others', JSON.stringify(others, null, 2))
//
// /**
//  * 1. gather certain metadata in home and put to top
//  * 2. organize in 2d array
//  * 3. lazy loading vertical
//  * 4. lazy loading horizontal
//  */
//
// import pullAllWith from 'lodash.pullallwith'
// import isEqual from 'lodash.isequal'
//
// // var array = [{ 'x': 1, 'y': 2 }, { 'x': 3, 'y': 4 }, { 'x': 5, 'y': 6 }];
//
// // const a = pullAllWith(array, [{ 'x': 3, 'y': 4 }], isEqual);
//
// // console.log('----', a)
// // console.log(array);
//
// let subject = [{a: { b: 10 }, hello: 'world'}, {b: 2, hello: 'world'}, {c: 3, hello: 'world'}, {d: 4, hello: 'world'}, {e: 5, hello: 'world'}]
//
//
// // take out b: 2 and c: 3
//
// // loop through subject
// // whatever is found then categorize
//
// // function splitObject (criteria, items = []) {
// //
// //   let {
// //     key: criteriaKey = '',
// //     value: criteriaValue = ''
// //   } = criteria
// //
// //   // console.log(criteriaKey)
// //   let criteriaMatch
// //   for (let i = 0; i < items.length; i++) {
// //     const item = items[i]
// //     const itemValue = item[criteriaKey]
// //
// //     const valuesExists = !!(criteriaValue && itemValue)
// //     const valuesMatch = `${criteriaValue}`.toLowerCase() === `${itemValue}`.toLowerCase()
// //
// //     if (valuesExists && valuesMatch) {
// //       criteriaMatch = item
// //       break
// //     }
// //   }
// //
// //   return criteriaMatch
// // }
//
//
// // console.log(splitObject({ key: 'b', value: 2}, subject))
//
//
// function splitObject2 (criteria, items = []) {
//
//   let {
//     key: criteriaKey = '',
//     value: criteriaValue = ''
//   } = criteria
//
//   let criteriaMatch = []
//   let newItems = []
//
//   for (let i = 0; i < items.length; i++) {
//     const item = items[i]
//     const itemValue = item[criteriaKey]
//
//     const valuesExists = !!(criteriaValue && itemValue)
//     const valuesMatch = `${criteriaValue}`.toLowerCase() === `${itemValue}`.toLowerCase()
//
//     // criteria.find()
//
//     for (let j = 0; j < items.length; j++) {
//
//     }
//
//     if (valuesExists && valuesMatch) {
//       criteriaMatch = item
//       break
//     }
//   }
//
//   return { match: criteriaMatch, items: newItems }
// }
//
// /**
//  * O(n x m)
//  * splits items if criteria is matched
//  * returns matched criteria in first array and non-matched in second array
//  */
// function splitObject3 (criteria, items) {
//   function isMatch(value1, value2) {
//     return `${value1}`.toLowerCase() === `${value2}`.toLowerCase()
//   }
//
//   // get items that match the criteria
//   const match = items.filter((item) => {
//     return criteria.find((criterion) => isMatch(item[criterion.key], criterion.value))
//   })
//
//   // get items that do not match the criteria
//   const nonMatch = items.filter((item) => {
//     return !criteria.find((criterion) => isMatch(item[criterion.key], criterion.value))
//   })
//
//   return [match, nonMatch]
// }
//
//
// /// / console.log(splitItems([{ key: 'a.b', value: 10}, {key: 'z', value: 3}], subject))
// // console.log(splitItems([{ key: 'a.b', value: 1}, {key: 'c', value: 3}], subject))
// // console.log('----', subject)
// // find
// // filter
//
//
//
//
//
//
//
//
//
//
//
//
