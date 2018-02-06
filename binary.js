'use strict'

var testArrayGenap = [40, 18, 22, 32, 90, 10, 10, 22, 8]
var testArrayGanjil = [3, 31, 89, 53, 53, 85, 77, 21, 55]

function ownSort(arr) {
  for (var i = 1; i < arr.length; i++) {
  	for (var j = 0; j < i; j++) {
  		if (arr[i] < arr[j]) {
  			var temp = arr[i];
  			arr[i] = arr[j];
  			arr[j] = temp;
  		}
  	}
  }
  console.log(arr);
  return arr
}

function binary_search (search, array) {
  if (array.length <= 1) {
  	if (search == array[0]) return 0;
  	else return -1;
  }

  var mid = Math.floor(array.length / 2);

  if (search == array[mid]) return mid; else
  if (search < array[mid]) return binary_search(search, array.splice(0, mid)); else
  if (search > array[mid]) return binary_search(search, array.splice(mid, array.length - mid));
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
