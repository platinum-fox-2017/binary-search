'use strict'

var testArrayGenap = [40, 18, 22, 32, 90, 10, 10, 22, 8]
var testArrayGanjil = [3, 31, 89, 53, 53, 85, 77, 21, 55]

function ownSort(arr) {
  var temp = []
  var minIndex = ""

  for(var i=0; i<arr.length; i++){
    minIndex = i
    for(var j=i+1; j<arr.length; j++){
      if(arr[j] < arr[minIndex]){
        minIndex = j
      }
    }
    temp = arr[i]
    arr[i] = arr[minIndex]
    arr[minIndex] = temp
  }

  return arr
}

console.log(ownSort(testArrayGenap))
console.log(ownSort(testArrayGanjil))

var arrayGenapSorted = ownSort(testArrayGenap)
var arrayGanjilSorted = ownSort(testArrayGanjil)

function binary_search (search, array) {
  // Your searching code
  for(var i=0; i<array.length; i++){
    if(array[i] === search){
      return i;
    }
  }
  return -1;
}



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
