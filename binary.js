'use strict'

var testArrayGenap = [40, 18, 22, 32, 90, 10, 10, 22, 8]
var testArrayGanjil = [3, 31, 89, 53, 53, 85, 77, 21, 55]

function ownSort(arr) {
  for(var i=1; i<arr.length; i++){
    for(var j=0; j<=i-1; j++){
      var belakang = arr[i];
      var depan = arr[j];
      if(arr[i]<arr[j]){
        arr[j]=belakang;
        arr[i]=depan;
      }
    }
  }
  return arr;
}

function binary_search (search, array) {
  var bot = 0;
  var top = array.length-1;
  while(bot<=top){
    var mid = Math.floor((bot+top)/2);
    if(search===array[mid]){
      return mid;
    } else {
      if(search>array[mid]){
        bot = mid+1;
      } else {
        top = mid-1;
      }
    }
  }
  return -1;
}

var arrayGenapSorted = ownSort(testArrayGenap)
var arrayGanjilSorted = ownSort(testArrayGanjil)
//
// Driver code
console.log(binary_search(18, arrayGenapSorted))
console.log(binary_search(10, arrayGenapSorted))
console.log(binary_search(33, arrayGenapSorted))
console.log(binary_search(53, arrayGanjilSorted))
console.log(binary_search(85, arrayGanjilSorted))
console.log(binary_search(2, arrayGanjilSorted))

module.exports = {
  binary_search
}
