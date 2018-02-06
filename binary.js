'use strict'

var testArrayGenap = [40, 18, 22, 32, 90, 10, 10, 22, 8]
var testArrayGanjil = [3, 31, 89, 53, 53, 85, 77, 21, 55]

function ownSort(arr) {
  for(var i=1; i<arr.length; i++){
    for(var j=0; j<i; j++){
        var asal = arr[i];
        var pembanding = arr[j];
        if(arr[j]>arr[i]){
            arr[j] = asal;
            arr[i] = pembanding;
        }
      }
  }
  return arr;
}

function binarySearch (search, array) {
  
var indexMulai = 0;
var indexAkhir = array.length-1;

var indexTengah = Math.round((indexMulai+indexAkhir)/2);

while (indexMulai <= indexAkhir){
  if(array[indexTengah] > search){
    indexAkhir = indexTengah - 1;
    indexTengah = Math.round((indexMulai+indexAkhir)/2);
  }else if(array[indexTengah] < search){
    indexMulai = indexTengah + 1;
    indexTengah = Math.round((indexMulai+indexAkhir)/2);
  }else{
    return indexTengah;
  }
}
return -1;

}

var arrayGenapSorted = ownSort(testArrayGenap)
var arrayGanjilSorted = ownSort(testArrayGanjil)

//Driver code
console.log(binarySearch(18, arrayGenapSorted))
console.log(binarySearch(10, arrayGenapSorted))
console.log(binarySearch(33, arrayGenapSorted))

console.log(binarySearch(53, arrayGanjilSorted))
console.log(binarySearch(3, arrayGanjilSorted))
console.log(binarySearch(2, arrayGanjilSorted))

// module.exports = {
//   binary_search
// }