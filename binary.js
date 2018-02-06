'use strict'

var testArrayGenap = [40, 18, 22, 32, 90, 10, 10, 22, 8]
var testArrayGanjil = [3, 31, 89, 53, 53, 85, 77, 21, 55]

function ownSort(arr) {
  // Your sorting code
  var minNum = arr[0];

  for(var i = 0; i < arr.length; i++){
    let temp;
    let indexMin = findMin(arr.slice(i))+i;
    temp = arr[i];
    arr[i]=arr[indexMin]
    arr[indexMin] = temp;
  }
  return arr;
}

function findMin(arr){
  let min = arr[0];
  let indexMin = 0;
  for (var i = 0; i < arr.length; i++){
    if(arr[i]<min){
      min = arr[i];
      indexMin = i;
    }
  }
  return indexMin;
}
// Solution 1 - recursive
function binary_search (search, array, midPoint = 0) {
  // Your searching code
  if(array.length>=1){
    let midValue = Math.floor((array.length-1)/2);
    // console.log("mid: "+midValue)
    if(search==array[midValue]){
      return midPoint+midValue;
    }
    else if(search<array[midValue]){
      return binary_search(search, array.slice(0,midValue));
    }
    else{
      midPoint += array.slice(0,midValue).length;
      return binary_search(search, array.slice(midValue+1),midPoint);
    }
  }
  else {
    return -1;
  }
}

// Solution 2
function binary_search2 (search, array) {
  // Your searching code
  let bottom = 0;
  let top = array.length-1;
  while(bottom<=top){
    let mid = Math.floor((top+bottom)/2);
    if(search==array[mid])
      return mid;
    else if(search>array[mid]){
      bottom = mid+1;
    }
    else{
      top = mid-1;
    }
  }
  return -1;
}


var arrayGenapSorted = ownSort(testArrayGenap)
var arrayGanjilSorted = ownSort(testArrayGanjil)


// Driver code
console.log(binary_search(8, arrayGenapSorted))
console.log("jawaban :"+arrayGenapSorted.indexOf(8));
console.log(binary_search(10, arrayGenapSorted))
console.log("jawaban :"+arrayGenapSorted.indexOf(10));
console.log(binary_search(33, arrayGenapSorted))
console.log("jawaban :"+arrayGenapSorted.indexOf(33));


console.log(binary_search(53, arrayGanjilSorted))
console.log("jawaban :"+arrayGanjilSorted.indexOf(53));
console.log(binary_search(3, arrayGanjilSorted))
console.log("jawaban :"+arrayGanjilSorted.indexOf(3));
console.log(binary_search(2, arrayGanjilSorted))
console.log("jawaban :"+arrayGanjilSorted.indexOf(2));
console.log(binary_search(85, arrayGanjilSorted))
console.log("jawaban :"+arrayGanjilSorted.indexOf(85));

module.exports = {
  binary_search
}
