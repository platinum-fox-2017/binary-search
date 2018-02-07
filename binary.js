'use strict'

var testArrayGenap = [40, 18, 22, 32, 90, 10, 10, 22, 8]
var testArrayGanjil = [3, 31, 89, 53, 53, 85, 77, 21, 55]

function ownSort(arr) {
  // Your sorting code
  let temp
  for (let i = 0; i < arr.length; i++) {
      let minPos = i
      for (let j = i + 1; j < arr.length; j++) {
          if (arr[j] < arr[minPos]) {
              minPos = j
          }
      }
      //SWAP
      temp = arr[i]
      arr[i] = arr[minPos]
      arr[minPos] = temp
  }
  return arr
}

function binary_search (search, arr) {
  // Your searching code
  let start = 0
  let end = arr.length - 1
  let mid = Math.floor((arr.length-1)/2);

  for (let i = 0; i < arr.length; i++) {
    if(search === arr[mid]){
      return mid
    }
    else if(search < arr[mid]) {
      end = mid-1
      mid = Math.floor((start + end)/2);
    }
    else if(search > arr[mid]) {
      start = mid
      mid = Math.floor((start + end)/2);
    }
  }
  return 'ngga ada'
}

var arrayGenapSorted = ownSort(testArrayGenap)
console.log(arrayGenapSorted);
var arrayGanjilSorted = ownSort(testArrayGanjil)
console.log(arrayGanjilSorted);

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
