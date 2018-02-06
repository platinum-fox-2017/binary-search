'use strict'

var testArrayGenap = [40, 18, 22, 32, 90, 10, 10, 22, 8]
var testArrayGanjil = [3, 31, 89, 53, 53, 85, 77, 21, 55,9]

function ownSort(arr) {
  // Your sorting code
  for(let i = 0;i<arr.length;i++){
    for(let j=i;j>=0;j--){
      if(arr[j]>arr[j+1]){
        let swap = arr[j]
        arr[j] = arr[j+1]
        arr[j+1] = swap
      }
    }
  }
  return arr
}
console.log(ownSort(testArrayGenap))
console.log(ownSort(testArrayGanjil))
console.log('------------binary---------')

function binary_search (search, array) {
  // Your searching code
  let nilaiMin = 0
  let nilaiMax = array.length-1
  // let nilaiMid = Math.floor((nilaiMin+nilaiMax)/2)
  // console.log(nilaiMin,nilaiMax,nilaiMid)
  for(let i =0;i<array.length;i++){
    let nilaiMid = Math.floor((nilaiMin+nilaiMax)/2)
    if(search === array[nilaiMid]){
      return nilaiMid
    }
    else if(search<array[nilaiMid]){
      nilaiMax = nilaiMid
    }
    else if(search>array[nilaiMid]){
      nilaiMin = nilaiMid
    }
  }
  return -1
}

var arrayGenapSorted = ownSort(testArrayGenap)
var arrayGanjilSorted = ownSort(testArrayGanjil)

// Driver code
console.log(binary_search(8, arrayGenapSorted))//0
console.log(binary_search(10, arrayGenapSorted))//1 or 2
console.log(binary_search(33, arrayGenapSorted))// -1

console.log(binary_search(53, arrayGanjilSorted))//4or5
console.log(binary_search(3, arrayGanjilSorted))//0
console.log(binary_search(2, arrayGanjilSorted))//-1

module.exports = {
  binary_search
}
