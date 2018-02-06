'use strict'

var testArrayGenap = [40, 18, 22, 32, 90, 10, 10, 22, 8]
var testArrayGanjil = [3, 31, 89, 53, 53, 85, 77, 21, 55]

function ownSort(arr) {
  // Your sorting code
    for(var i = 1; i < arr.length; i++){
       var current = arr[i];
      for(var j = i - 1; j >= 0 && (arr[j] > current) ; j--){
        arr[j + 1] = arr[j];
      }    
      arr[j + 1] = current;
    }
    return arr;
}

function binarySearch (search, array) {
  // Your searching code
  var low = 0;
  var high = array.length - 1;
  while(low <= high){
    var mid = Math.floor((low + high) / 2);
    if(array[mid] > search){
      high = mid - 1;    
    } else if(array[mid]  < search){
      low = mid + 1;    
    } else {
      return mid;    
    }
  }
  return -1;
}

var arrayGenapSorted = ownSort(testArrayGenap)
var arrayGanjilSorted = ownSort(testArrayGanjil)
console.log(arrayGenapSorted);
// Driver code
//console.log(arrayGanjilSorted);
console.log(binarySearch(8, arrayGenapSorted))
console.log(binarySearch(10, arrayGenapSorted))
console.log(binarySearch(33, arrayGenapSorted))

console.log(binarySearch(53, arrayGanjilSorted))
console.log(binarySearch(3, arrayGanjilSorted))
console.log(binarySearch(2, arrayGanjilSorted))

module.exports = {
  binarySearch
}
