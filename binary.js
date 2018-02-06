'use strict'

var testArrayGenap = [40, 18, 22, 32, 90, 10, 10, 22, 8]
var testArrayGanjil = [3, 31, 89, 53, 53, 85, 77, 21, 55]

function ownSort(arr) {
  for(let i = 0 ; i< arr.length ; i ++){
    if(arr[i] > arr[i+1]){
      let temp = arr[i]
      arr[i] = arr[i+1]
      arr[i+1] = temp
       i = -1
    }
  }
  return arr
}

function binary_search (search, array) {
  let first = 0
  let last = array.length-1
  let mid = Math.floor((first+last)/2)

  while (first <= last){
    if(array[mid] === search){
      return mid
    }else if (search > array[mid]){
      first = mid+1
      mid = Math.floor((first+last)/2)
    }else if(search < array[mid]){
      last = mid-1
      mid = Math.floor((first+last)/2)
    }
  }
  return -1
}

var arrayGenapSorted = ownSort(testArrayGenap)
var arrayGanjilSorted = ownSort(testArrayGanjil)

// Driver code
console.log(arrayGenapSorted)
console.log(binary_search(8, arrayGenapSorted))
console.log(binary_search(10, arrayGenapSorted))
console.log(binary_search(33, arrayGenapSorted))

console.log(arrayGanjilSorted)
console.log(binary_search(53, arrayGanjilSorted))
console.log(binary_search(3, arrayGanjilSorted))
console.log(binary_search(2, arrayGanjilSorted))

module.exports = {
  // binarysearch
}
