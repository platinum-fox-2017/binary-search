'use strict'

var testArrayGenap = [40, 18, 22, 32, 90, 10, 10, 22, 8]
var testArrayGanjil = [3, 31, 89, 53, 53, 85, 77, 21, 55]

function ownSort(arr) {
  for (var i = 1; i < arr.length; i++) {
    for (var j = 0; j < i; j++) {
      if (arr[i] < arr[j]) {
        var temp = arr[j];
        arr[j]   = arr[i];
        arr[i]   = temp;
      }
    }
  }
  return arr
}

function binary_search (search, array) {
  var middleIndex = Math.round(array.length / 2);
  var top = 0;
  var bottom = array.length;

  while (top <= bottom) {
    if (search > array[middleIndex]) {
      top = middleIndex + 1;
      middleIndex = Math.round((top+bottom) / 2);
    } else if (search < array[middleIndex]) {
      bottom = middleIndex - 1;
      middleIndex = Math.round((top+bottom) / 2);
    } else if (search == array[middleIndex]) {
      return middleIndex;    
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
