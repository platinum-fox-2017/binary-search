'use strict'
// Release 0
var testArrayGenap = [40, 18, 22, 32, 90, 10, 10, 22, 8]
var testArrayGanjil = [3, 31, 89, 53, 53, 85, 77, 21, 55]

function ownSort(arr) {
  // Your sorting code
  var temp;
  var min;

  for (var i = 0; i < arr.length-1; i++){
    min = i;
    for (var j = i+1; j < arr.length; j++){
      if (arr[min] > arr[j]){
        min = j;
      }
    }
    temp = arr[i];
    arr[i] = arr[min];
    arr[min] = temp;
  }
  return arr
}

function binary_search (search, array, midpoint = 0) {
  // Your searching code
  var midIdx = Math.floor(array.length/2);
  if (array[midIdx] === search){
    return midIdx + midpoint;
  } else if (search < array[midIdx] && array.length > 1){
    return binary_search(search, array.slice(0, midIdx))
  } else if (search > array[midIdx] && array.length > 1){
    midpoint += array.slice(0,midIdx).length;
    return binary_search(search, array.slice(midIdx), midpoint)
  } else {
    return -1;
  }
}

var arrayGenapSorted = ownSort(testArrayGenap)
var arrayGanjilSorted = ownSort(testArrayGanjil)

// Driver code
console.log(binary_search(8, arrayGenapSorted)) // 0
console.log(binary_search(10, arrayGenapSorted)) // 2
console.log(binary_search(33, arrayGenapSorted)) // -1

console.log(binary_search(53, arrayGanjilSorted)) // 4
console.log(binary_search(3, arrayGanjilSorted)) // 0
console.log(binary_search(2, arrayGanjilSorted)) // -1
console.log(binary_search(89, arrayGanjilSorted)) // 8

module.exports = {
  binary_search
}
