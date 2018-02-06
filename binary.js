'use strict'

var testArrayGenap = [40, 18, 22, 32, 90, 10, 10, 22, 8]
var testArrayGanjil = [3, 31, 89, 53, 53, 85, 77, 21, 55]

function ownSort(arr) {
  for(var i=1; i<arr.length; i++) {
    for(var j=0; j<i-1; j++) {
      if(arr[i]<arr[j]) {
        var temp=arr[j];
        arr[j]=arr[i];
        arr[i]=temp;
      }
    }
  }
  return arr;
}

function binary_search (search, array) {
  
  var mid=Math.ceil(array.length/2);
  if(array[mid-1]===search) return mid-1;
  if(array.length>1) {
    if(search<array[mid-1]) {
      return binary_search(search,array.slice(0,mid));
    }
    else if(search>array[mid-1]) {
      mid++;
      return mid+binary_search(search,array.slice(mid,array.length));
    }
  }
  return -1;
}


var arrayGenapSorted = ownSort(testArrayGenap)
var arrayGanjilSorted = ownSort(testArrayGanjil)

// // Driver code

console.log(arrayGenapSorted);
console.log(binary_search(8, arrayGenapSorted))
console.log(binary_search(10, arrayGenapSorted))
console.log(binary_search(33, arrayGenapSorted))
console.log(binary_search(90, arrayGenapSorted))

console.log(arrayGanjilSorted);
console.log(binary_search(53, arrayGanjilSorted))
console.log(binary_search(3, arrayGanjilSorted))
console.log(binary_search(2, arrayGanjilSorted))
console.log(binary_search(77, arrayGanjilSorted))

module.exports = {
  binary_search
}
