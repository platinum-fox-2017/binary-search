'use strict'

var testArrayGenap = [40, 18, 22, 32, 90, 10, 10, 22, 8]
var testArrayGanjil = [3, 31, 89, 53, 53, 85, 77, 21, 55]
var testArrayGenap1 = [40, 18, 22, 32, 90, 10, 10, 22, 8]
var testArrayGanjil1 = [3, 31, 89, 53, 53, 85, 77, 21, 55]

function ownSort(arr) {
  // Your sorting code
  for(var i=0; i<arr.length; i++){
    let max = arr[i];
    for(var j = i-1; j >=0 && arr[j] > max; j--){
      arr[j+1] = arr[j];
    }
    arr[j+1] = max;
  }
  return arr
}

function binary_search (search, array) {
  // Your searching code
  let start = 0;
  let end = array.length-1;
  let mid = Math.floor(start+end/2);

  if(search === array[mid]){
    return mid;
  }
  else if(array[mid] < search){
    return binary_search(search, array.slice(mid+1, end))
  }
  else if(search < array[mid]){
    return binary_search(search, array.slice(start, mid))
  }
  else{
    return -1
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
