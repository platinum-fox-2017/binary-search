'use strict'

var testArrayGenap = [40, 18, 22, 32, 90, 10, 10, 22, 8]
var testArrayGanjil = [3, 31, 89, 53, 53, 85, 77, 21, 55]

function ownSort(arr) {
  // Your sorting code
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < i; j++) {
      if (arr[i] < arr[j]) {
        let swap = arr[i]
        arr[i] = arr[j]
        arr[j] = swap
      }
    }
  }
  return arr
}

function binary_search(search, array) {
  // Your searching code
  let low = 0,
    high = array.length - 1,
    mid;
  while (low <= high) {
    mid = Math.floor((low + high) / 2);
    if (array[mid] == search) return mid;
    else if (array[mid] < search) low = mid + 1;
    else high = mid - 1;
  }
  return -1;
}

var arrayGenapSorted = ownSort(testArrayGenap)
var arrayGanjilSorted = ownSort(testArrayGanjil)

// Driver code
let test_array = [13, 19, 24, 29, 32, 37, 43]
console.log('ini test array', test_array)
console.log(binary_search(35, test_array))
console.log('===========')
let test_array2 = [100, 120, 130, 135, 150, 170]
console.log('ini test array 2', test_array2)
console.log(binary_search(135, test_array2))
console.log('===========')
console.log('ini array genap sudah di sort', arrayGenapSorted)
console.log('ini array ganjil sudah di sort', arrayGanjilSorted)
console.log('===========')
console.log(binary_search(8, arrayGenapSorted))
console.log(binary_search(10, arrayGenapSorted))
console.log(binary_search(40, arrayGenapSorted))
console.log('===========')
console.log(binary_search(53, arrayGanjilSorted))
console.log(binary_search(3, arrayGanjilSorted))
console.log(binary_search(2, arrayGanjilSorted))

// module.exports = {
//   binary_search
// }