'use strict'

var testArrayGenap = [40, 18, 22, 32, 90, 10, 10, 22, 8]
var testArrayGanjil = [3, 31, 89, 53, 53, 85, 77, 21, 55]

function ownSort(arr) {

  for(var i = 0; i < arr.length; i++) {
    let value = arr[i]
    for(var j = i - 1; j > -1 && arr[j] > value; j--) {
      arr[j+1] = arr[j]
    }
    arr[j+1] = value
  }

  return arr
}

function binary_search(search, array) {
  let high = array.length - 1;
  let low = 0;
  let mid = 0;

  while (low <= high) {
    mid = Math.floor((high + low) / 2);
    if (search === array[mid]) {
      return array[mid]
      // return array.indexOf(array[mid])
    } else if (search > array[mid]) {
      low = mid + 1;
    } else {
      high = mid - 1;
    }
  }
  return -1;
}

var arrayGenapSorted = ownSort(testArrayGenap)
var arrayGanjilSorted = ownSort(testArrayGanjil)

// console.log(arrayGenapSorted)
// console.log(arrayGanjilSorted)

// Driver code
console.log(binary_search(8, arrayGenapSorted))
console.log(binary_search(10, arrayGenapSorted))
console.log(binary_search(33, arrayGenapSorted))

console.log(binary_search(53, arrayGanjilSorted))
console.log(binary_search(3, arrayGanjilSorted))
console.log(binary_search(2, arrayGanjilSorted))

// module.exports = {
//   binary_search
// }
