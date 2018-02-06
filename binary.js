'use strict'

var testArrayGenap = [40, 18, 22, 32, 90, 10, 10, 22, 8]
var testArrayGanjil = [3, 31, 89, 53, 53, 85, 77, 21, 55]

function ownSort(arr) {
  // Your sorting code

  for (let i = 1; i < arr.length; i++) {
    for (let j = 0; j < arr.length; j++) {
      if (arr[i] < arr[j]) {
        let temp = arr[i]
        arr[i] = arr[j]
        arr[j] = temp
      }
    }
  }
  return arr
}

function binarySearch(search, array) {
  // Your searching code
  let start = 0
  let finish = array.length - 1

  while (start <= finish) {
    let mid = Math.floor((start + finish) / 2)
    if (array[mid] === search) {
      return array.indexOf(array[mid])
    } else if (search > array[mid]) {
      // code
      start = mid + 1
    } else if (search < array[mid]) {
      // code
      finish = mid - 1
    }
  }
  return 0;
}

var arrayGenapSorted = ownSort(testArrayGenap)
console.log(arrayGenapSorted);
var arrayGanjilSorted = ownSort(testArrayGanjil)
console.log(arrayGanjilSorted);
// Driver code
// console.log(binarySearch(8, arrayGenapSorted))
console.log(binarySearch(40, arrayGenapSorted))
// console.log(binarySearch(33, arrayGenapSorted))

// console.log(binarySearch(53, arrayGanjilSorted))
// console.log(binarySearch(3, arrayGanjilSorted))
// console.log(binarySearch(2, arrayGanjilSorted))

// module.exports = {
//   binary_search
// }
