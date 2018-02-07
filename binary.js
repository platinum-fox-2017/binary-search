'use strict'

var testArrayGenap = [40, 18, 22, 32, 90, 10, 10, 22, 8]
var testArrayGanjil = [3, 31, 89, 53, 53, 85, 77, 21, 55]

function ownSort(arr) {
  // Your sorting code
		for (var i = 0; i < arr.length; i++){
        	var temp = arr[i];
        	for (var j = i - 1; j > -1 && arr[j] > temp; j--){
           			arr[j + 1] = arr[j];
        	}
        	arr[j + 1] = temp;
    }
    return arr;
}

function binary_search (search, array) {
  // Your searching code
    console.log(array);
    var hasil=0;
    var tempArr=[];
    var middle= Math.floor(array.length/2);

    if(search<array[middle]){
     		for(var h=0;h<middle-1;h++){
      			if(search===array[h]){
        				tempArr.push(h);
      			}
    		}
  	}
   else if(search>array[middle]){
     		for(var k=middle+1;k<array.length-1;k++){
       			if(search===array[k]){
         				tempArr.push(k);
       			}
     			}
   	}
   else if(search===array[middle]){
     			tempArr.push(middle);
  	}

   if(tempArr.length>0){
    			return tempArr[0];
   	}
   else{
      		return -1;
    }
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
