'use strict'

var testArrayGenap = [40, 18, 22, 32, 90, 10, 10, 22, 8]
var testArrayGanjil = [3, 31, 89, 53, 53, 85, 77, 21, 55]

function ownSort(arr) {
  // Your sorting code
  for (var i = 1; i < arr.length; i++) {
    for (var j = i - 1; j >= 0; j--) {
      if (arr[j + 1] < arr[j]) {
        let firstNum = arr[j + 1]
        let secondNum = arr[j]
        arr[j + 1] = secondNum
        arr[j] = firstNum
      } else {
        break;
      }
    }
  }
  return arr
}

function binary_search(search, array, obj) {
  // Your searching code
  obj = obj || {
    min: 0,
    max: array.length - 1
  }
  if (obj.min > obj.max) {
    return -1
  } else {
    let nilaiTengah = Math.floor(obj.min + obj.max / 2);
    if (array[nilaiTengah] === search) {
      return nilaiTengah;
    } else if (search < array[nilaiTengah]) {
      obj.max = nilaiTengah - 1
      return binary_search(search, array, obj)
    } else {
      obj.min = nilaiTengah + 1
      return binary_search(search, array, obj)
    }
  }
}

var arrayGenapSorted = ownSort(testArrayGenap)
var arrayGanjilSorted = ownSort(testArrayGanjil)

// Driver code
console.log(binary_search(8, arrayGenapSorted))
console.log(binary_search(10, arrayGenapSorted))
console.log(binary_search(33, arrayGenapSorted))

console.log(binary_search(53, arrayGanjilSorted))
console.log(binary_search(3, arrayGanjilSorted))
console.log(binary_search(2, arrayGanjilSorted))

module.exports = {
  binary_search
}