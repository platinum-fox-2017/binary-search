'use strict'
var testArrayGenap = [40, 18, 22, 32, 90, 10, 10, 22, 8]
var testArrayGanjil = [3, 31, 89, 53, 53, 85, 77, 21, 55]

function ownSort(arr) {
  // Your sorting code
  
  for (var i = 1; i < arr.length; i++) {
    var temporarySortDitukar = 0; // 40 // j
    var temporarySortMenukar = 0; // 18 // i
    for (var j = 0; j < i; j++) {
      if (arr[i] < arr[j]) {
        // console.log('--sebelum---', arr)
          temporarySortDitukar = arr[j];
          temporarySortMenukar = arr[i];
          arr.splice(i, 1, temporarySortDitukar);
          arr.splice(j, 1, temporarySortMenukar);
        // console.log('--sesudah---', arr)
      }
    }
  }
  return arr;
}

console.log(ownSort(testArrayGenap)); // [ 8, 10, 10, 18, 22, 22, 32, 40, 90 ]
// console.log(ownSort(testArrayGanjil)); // [ 3, 21, 31, 53, 53, 55, 77, 85, 89 ]

function binary_search(search, array) {
  // Your searching code
    var mid = Math.floor(array.length / 2); 
  // console.log('====', mid); // genap = 4
  // console.log(array[mid]); // 2

  if (array[mid] == search) {
    return mid;
    // console.log('=======', array[mid]);
  } else {
    if (array[mid] > search) {
      var newarray = array.slice(0, mid);
      // console.log('===', mid);
      // console.log('=======', array[mid]);
      return binary_search(search, newarray);
    } else if (array[mid] < search) {
      var newarray = array.slice(mid, array.length-1);
      // console.log('===', mid);
      // console.log('=======', array[mid]);
      return binary_search(search, newarray);
    }
  }
  return -1;
}

var arrayGenapSorted = ownSort(testArrayGenap)
// var arrayGanjilSorted = ownSort(testArrayGanjil)

// Driver code
console.log(binary_search(8, arrayGenapSorted));
// console.log(binary_search(10, arrayGenapSorted));
// console.log(binary_search(33, arrayGenapSorted));

// console.log(binary_search(53, arrayGanjilSorted))
// console.log(binary_search(3, arrayGanjilSorted))
// console.log(binary_search(2, arrayGanjilSorted))

module.exports = {
  binary_search
}
