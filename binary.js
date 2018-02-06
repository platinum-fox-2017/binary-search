'use strict'

var testArrayGenap = [40, 18, 22, 32, 90, 10, 10, 22, 8]
var testArrayGanjil = [3, 31, 89, 53, 53, 85, 77, 21, 55]

function ownSort(arr) {
  let new_array =[];
  while(arr.length !== 0){
    let min = Math.min(...arr);
    new_array.push(min);
    arr.splice(arr.indexOf(min),1);
  }
  console.log(new_array);
  return (new_array);
}

function binary_search (search, array) {
  // Your searching code
  let startIndex =0;
  let stopIndex = array.length;
  while(startIndex<stopIndex){
    let guess = Math.floor((startIndex + stopIndex)/2);
    if(search === array[guess]){
      return 'FOUND at index: ' + guess;
    } else if (search > array[guess]){
      startIndex = guess + 1;
    } else if (search < array[guess]){
      stopIndex = guess - 1;
    }
  }
  return 'NOT FOUND     : '+ 0;
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