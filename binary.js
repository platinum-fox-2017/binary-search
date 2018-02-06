'use strict'

var testArrayGenap = [40, 18, 22, 32, 90, 10, 10, 22, 8]
var testArrayGanjil = [3, 31, 89, 53, 53, 85, 77, 21, 55]

function ownSort(arr) {
  var result = [];
  var currentMin = arr[0];
  var indexMin = 0;

  if(arr.length === 1) {
    return arr;
  }

  for(var i = 0; i < arr.length; i++) {
    if(arr[i] < currentMin) {
      currentMin = arr[i];
      indexMin = i;
    }
  }
  
  result.push(currentMin);
  arr.splice(indexMin, 1);
  var finalResult = result.concat(ownSort(arr));
  return finalResult;
}

function binarySearch(search, array) {
  var start = 0;
  var end = array.length - 1;
  var mid;

  while(start <= end) {
    mid = Math.floor((start + end) / 2);
    if (array[mid] === search) {
      return mid;
    } else if (search > array[mid]) {
      start = mid+1;
    } else {
      end = mid-1;
    }
  }

  return -1;
}

var arrayGenapSorted = ownSort(testArrayGenap);
var arrayGanjilSorted = ownSort(testArrayGanjil);

console.log(arrayGenapSorted); // [ 8, 10, 10, 18, 22, 22, 32, 40, 90 ]
console.log(arrayGanjilSorted); // [ 3, 21, 31, 53, 53, 55, 77, 85, 89 ]
console.log(ownSort([33, 2, 52, 106, 73])) // [ 2, 33, 52, 73, 106 ]

// Driver code
console.log(binarySearch(73, [ 2, 33, 52, 73, 106 ]) === 3) // 3, true
console.log(binarySearch(8, arrayGenapSorted) === 0) // 0, true
console.log(binarySearch(10, arrayGenapSorted) === 1) // 1, true
console.log(binarySearch(33, arrayGenapSorted) === -1) // -1, true

console.log(binarySearch(53, arrayGanjilSorted) === 3) // 3, false --> output: 4
console.log(binarySearch(3, arrayGanjilSorted) === 0) // 0, true
console.log(binarySearch(2, arrayGanjilSorted) === -1) // -1, true

module.exports = {
  binarySearch
}
