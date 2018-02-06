'use strict'

var testArrayGenap = [40, 18, 22, 32, 90, 10, 10, 22, 8]
var testArrayGanjil = [3, 31, 89, 53, 53, 85, 77, 21, 55]

function ownSort(arrNum) {
  if(arrNum > 1){
      return arrNum;
  } else {
      var newArray = [];
      var minNum = arrNum[0];
      for(var i=0; i<arrNum.length; i++){
          if(arrNum[i] < minNum){
              minNum = arrNum[i];
          }
      }
      for(var d=0; d<arrNum.length; d++){
          if(arrNum[d] === minNum){
              newArray.push(arrNum[d]);
              arrNum.splice(d, 1);
          }
      }
      return newArray.concat(ownSort(arrNum));
  }
}

function binary_search (search, array) {
  var mid = Math.floor((array.length-1)/2);
  if(array[mid] == search){
    return mid;
  } else {
    if(search < array[mid]){
      array = array.slice(0, mid);
      return binary_search(search, array);
    } else if(search > array[mid]){
      array = array.slice(mid, array.length-1);
      return binary_search(search, array);
    }
  } 
  return -1;
}

var arrayGenapSorted = ownSort(testArrayGenap)
var arrayGanjilSorted = ownSort(testArrayGanjil)


// Driver code
// console.log(binary_search(8, arrayGenapSorted))
// console.log(binary_search(10, arrayGenapSorted))
console.log(binary_search(33, arrayGenapSorted))

// console.log(binary_search(53, arrayGanjilSorted))
// console.log(binary_search(3, arrayGanjilSorted))
// console.log(binary_search(2, arrayGanjilSorted))

module.exports = {
  binary_search
}
