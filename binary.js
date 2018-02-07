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
  return new_array;
}

// function binary_search (search, array,startIndex,stopIndex) {
//   // Your searching code
//   while(startIndex<stopIndex){
//     let guess = Math.floor((startIndex + stopIndex)/2);
//     if(search === array[guess]){
//       return 'FOUND at index: ' + guess;
//     } else if (search > array[guess]){
//       startIndex = guess + 1;
//     } else if (search < array[guess]){
//       stopIndex = guess;
//     }
//   }
//   return 'NOT FOUND     : '+ 0;
// }
function binary_search (search, array,startIndex, stopIndex) {
    // Your searching code
  let start =startIndex;
  let stop = stopIndex;
  let guess = Math.floor((startIndex+stopIndex)/2);

  if(start > stop && array[guess] !== search ){
    return 'NOT FOUND                 :    ' + 0;
  } else if(array[guess] === search){
    return 'FOUND search at index     :    ' + guess;
  } else if (search>array[guess]) {
    start = guess + 1;
    return binary_search(search, array,start,stop);
  } else if (search<array[guess]) {
    stop = guess -1
    return binary_search(search, array,start,stop);
  }
  return 'NOT FOUND                 :    ' + 0;
}

var arrayGenapSorted = ownSort(testArrayGenap)
var arrayGanjilSorted = ownSort(testArrayGanjil)

// Driver code
console.log(binary_search(40, arrayGenapSorted, 0, arrayGenapSorted.length-1))
console.log(binary_search(10, arrayGenapSorted, 0, arrayGenapSorted.length-1))
console.log(binary_search(90, arrayGenapSorted, 0, arrayGenapSorted.length-1))

console.log(binary_search(53, arrayGanjilSorted, 0, arrayGanjilSorted.length-1))
console.log(binary_search(3, arrayGanjilSorted, 0, arrayGanjilSorted.length-1))
console.log(binary_search(2, arrayGanjilSorted, 0, arrayGanjilSorted.length-1))

module.exports = {
  binary_search
}