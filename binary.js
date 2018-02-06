'use strict'

var testArrayGenap = [40, 18, 22, 32, 90, 10, 10, 22, 8]
var testArrayGanjil = [3, 31, 89, 53, 53, 85, 77, 21, 55]

function ownSort(arr) {
  for(let i = 1; i<arr.length; i++){
    for(let j=i; j>0; j--){
      if(arr[j]<arr[j-1]){
        let temp=arr[j]
        arr[j] = arr[j-1];
        arr[j-1]=temp
      }
    }
  }
 return arr
}

function binary_search (search, array) {
  let start = 0;
  let end = array.length;

  while (start <= end){
    let mid = Math.floor((start+end)/2)
    if(array[mid] === search){
      return mid
    }else if(array[mid] < search){
      start = mid+1
    }else{
      end = mid-1
    }
  }
  return -1;
}

//console.log(ownSort(testArrayGanjil))
// console.log(ownSort(testArrayGenap))

var arrayGenapSorted = ownSort(testArrayGenap)
var arrayGanjilSorted = ownSort(testArrayGanjil)

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
