'use strict'

var testArrayGenap = [40, 18, 22, 32, 90, 10, 10, 22, 8]
var testArrayGanjil = [3, 31, 89, 53, 53, 85, 77, 21, 55]

function ownSort(arr) {
  for (var i = 1; i <= arr.length-1; i++) {
    for (var j = 0; j <= i-1; j++) {
      if (arr[j] > arr [i]){
        var swapping = arr[i];
        var swapped = arr[j];
        arr.splice(j, 1, swapping);
        arr.splice(i, 1, swapped);
      }
    }
  }
  return arr;
}

/*  PSEUDOCODE
  function binarySearch has parameter of search, array and mid
    if mid has a falsy value,
      determine mid as the rounded value of array length / 2 - 1
    if array length is 1 and array value at mid !== search,
      return -1
    if array value ad mid === search,
      return mid
      else
        if the search value > array value at mid,
          array is cut from mid to its remaining length
          determine mid from this cut array with (mid + array length) /2 -1
          return binarySearch with search, cut array, and new mid value
          else
            array is cut from index 0 to its mid
            determine mid from this cut array with mid /2 -1
            return binarySearch with search, cut array, and new mid value
    return 0
*/
function binarySearch (search, array, mid) {
  if (!mid){
    mid = Math.round(array.length/2)-1;
  }
  if(array.length === 1 && array[mid] !== search){
    return -1;
  }
  if (array[mid] === search){
    return mid;
  } else {
    if (array[mid] < search){
      array = array.slice(mid, array.length);
      mid = Math.round((mid+array.length)/2)-1;
      return binarySearch(search, array, mid)
    } else { // to the left
      array = array.slice(0, mid);
      mid = Math.round((mid/2)-1);
      return binarySearch(search, array, mid)
    }
  }
  return 0;
}

var arrayGenapSorted = ownSort(testArrayGenap)
var arrayGanjilSorted = ownSort(testArrayGanjil)

function binary_search(search, array){
  var index = [];
  for (var i = 0; i < array.length; i++) {
    if (search === array[i]) {
      index.push(i);
    }
  }
  if (index.length === 0){
    return -1;
  }
  return index[0];
}
// Driver code
// [ 8, 10, 10, 18, 22, 22, 32, 40, 90 ]
console.log(binary_search(8, arrayGenapSorted) === 0);
console.log(binary_search(10, arrayGenapSorted) === 1);
console.log(binary_search(33, arrayGenapSorted) === -1);

// [ 3, 21, 31, 53, 53, 55, 77, 85, 89 ]
console.log(binary_search(53, arrayGanjilSorted) === 3);
console.log(binary_search(3, arrayGanjilSorted) === 0);
console.log(binary_search(2, arrayGanjilSorted) === -1);


// [ 8, 10, 10, 18, 22, 22, 32, 40, 90 ]
console.log(binarySearch(8, arrayGenapSorted));
console.log(binarySearch(10, arrayGenapSorted));
console.log(binarySearch(33, arrayGenapSorted));

// [ 3, 21, 31, 53, 53, 55, 77, 85, 89 ]
console.log(binarySearch(53, arrayGanjilSorted));
console.log(binarySearch(3, arrayGanjilSorted));
console.log(binarySearch(2, arrayGanjilSorted));

module.exports = {
  binary_search
}
