'use strict'

var testArrayGenap = [40, 18, 22, 32, 90, 10, 10, 22, 8]
var testArrayGanjil = [3, 31, 89, 53, 53, 85, 77, 21, 55]

function ownSort(arr) {
  for (var i = 1; i<arr.length; i++) {
    for (var j = 0; j<i; j++) {
      if (arr[i] < arr[j]) {
        var temp = 0;
        temp = arr[j]
        arr[j] = arr[i]
        arr[i] = temp
      }
    }
  }
  return arr
}

var arrayGenapSorted = ownSort(testArrayGenap)
var arrayGanjilSorted = ownSort(testArrayGanjil)
// console.log(arrayGenapSorted);
// console.log(arrayGanjilSorted);

function binary_search (search, array) {
  // Your searching code
  var midArray = Math.floor((array.length-1)/2)
  // console.log(Math.floor((array.length-1)/2));
  // console.log(array[midArray]);

  if(array[midArray] == search) {
    return midArray

  } else {
    if(array[midArray] > search) {
      return binary_search(search, array.splice(0, midArray))
    } else if(array[midArray] < search) {
      return binary_search(search, array.splice(midArray, array.length-1))
    }
  }
  return -1;
}

// Driver code
console.log(binary_search(8, arrayGenapSorted)) //0
console.log(binary_search(10, arrayGenapSorted)) //1
console.log(binary_search(33, arrayGenapSorted)) //-1

console.log(binary_search(53, arrayGanjilSorted)) //4
console.log(binary_search(3, arrayGanjilSorted)) //0
console.log(binary_search(2, arrayGanjilSorted)) //-1

// module.exports = {
//   binary_search
// }
