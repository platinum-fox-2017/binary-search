'use strict'

var testArrayGenap = [40, 18, 22, 32, 90, 10, 10, 22, 8]
var testArrayGanjil = [3, 31, 89, 53, 53, 85, 77, 21, 55]

function ownSort(arr) {
  let temp = 0
  for(let i=0;i<arr.length-1;i++){
    if(arr[i+1]<arr[i]){
      temp = arr[i]
      arr[i]=arr[i+1]
      arr[i+1]=temp
      i = -1
    }
  }
  return arr
}

function binary_search (search, array) {
  let min = 0
  let max = array.length-1
  while(min<=max){
    let mid = Math.floor((min+max)/2)
    let target = array[mid]
    if(target < search){
      min = mid + 1
    } else if(target > search){
      max = mid - 1
    } else {
      return mid
    }
  }
  return -1
}

var arrayGenapSorted = ownSort(testArrayGenap)
var arrayGanjilSorted = ownSort(testArrayGanjil)


// Driver code
console.log(arrayGenapSorted);
console.log('8',binary_search(8, arrayGenapSorted))
console.log('10',binary_search(10, arrayGenapSorted))
console.log('33',binary_search(33, arrayGenapSorted))
console.log('=======================================')
console.log(arrayGanjilSorted); 
console.log('53',binary_search(53, arrayGanjilSorted))
console.log('3',binary_search(3, arrayGanjilSorted))
console.log('2',binary_search(2, arrayGanjilSorted))

module.exports = {
  binary_search
}
