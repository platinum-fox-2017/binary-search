'use strict'

var testArrayGenap = [40, 18, 22, 32, 90, 10, 10, 22, 8]
var testArrayGanjil = [3, 31, 89, 53, 53, 85, 77, 21, 55]

function ownSort(arr) {
  // Your sorting code
  for (var i = 0; i < arr.length; i++) {
    let value = arr[i]
    for (var j = i - 1; j >= 0 && arr[j] > value; j--) {
      arr[j + 1] = arr[j]
    }
    arr[j + 1] = value
  }
  return arr
}

console.log(ownSort(testArrayGenap));
console.log(ownSort(testArrayGanjil));

function binary_search (search, array) {
  let first = 0
  let last = array.length-1
  let mid = Math.floor((first+last) / 2)

  if (search === array[mid]) {
    return mid
  }
  else if (search > array[mid]) {
    first = mid +1
    return binary_search(search, array.slice(first, last))
  }
  else if (search < array[mid]) {
    last = mid
    return binary_search(search, array.slice(first, last))
  }
  else {
    return -1
  }
}

var arrayGenapSorted = ownSort(testArrayGenap)
var arrayGanjilSorted = ownSort(testArrayGanjil)

// Driver code
console.log(binary_search(8,  arrayGenapSorted))
console.log(binary_search(10, arrayGenapSorted))
console.log(binary_search(33, arrayGenapSorted))
//
console.log(binary_search(53, arrayGanjilSorted))
console.log(binary_search(3, arrayGanjilSorted))
console.log(binary_search(2, arrayGanjilSorted))

module.exports = {
  binary_search
}
