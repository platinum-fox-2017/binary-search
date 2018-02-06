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

function binary_search (search, array) {
  // Your searching code
  let mid = Math.floor(array.length/2);
  
  if(search >= array[mid]) {
    console.log(search,'<<<<<<< abovemid');
    for (let i = mid; i < array.length; i++) {
      if(search === array[i]) {
        return i
      }
    }
  }
  
  if(search < array[mid]) {
    console.log(search,'<<<<<<< undermid');
    for (let j = 0; j < mid; j++) {
      if(search === array[j]) {
        return j
      }      
    }
  }
  return -1;
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
