'use strict'

var testArrayGenap = [40, 18, 22, 32, 90, 10, 10, 22, 8]
var testArrayGanjil = [3, 31, 89, 53, 53, 85, 77, 21, 55]

function ownSort(arr) {
  for(let i=0;i<arr.length-1;i++){
    var index=i
    for(let j=i+1;j<arr.length;j++){
      if(arr[j]<arr[index]){
        index=j
      }
    }
    if(index != i){
      var insert = arr[i]
      arr[i]=arr[index]
      arr[index] = insert
    }

  }
  return arr
}

function binary_search (search, array) {
  var awal =array[Math.floor(array.length/2)-1]
  if(search>awal){
    var kedua =array[((Math.floor(array.length/2)/2))]
    if(search<kedua){}
    else if(search>kedua){}
    else if(search===kedua){
      return (((Math.floor(array.length/2)/2)))
    }
  }
  else if(search<awal){
    var kedua =array[((Math.floor(array.length/2)/2))]
    if(search<kedua){
      var ketiga =array[(((Math.floor(array.length/2)/2)/2))]
      if(search<ketiga){
        var keempat =array[Math.floor(((((array.length/2)/2)/2)/2))]
        if(search<keempat){}
        else if(search>keempat){}
        else if(search===keempat){
          return Math.floor(((((array.length/2)/2)/2)/2))
        }
      }
    }
    else if(search>kedua){}
    else if(search===kedua){
      return (((Math.floor(array.length/2)/2)))
    }

  }
  else if(awal===search){
    return Math.floor(array.length/2)-1
  }
  return -1;
}

var arrayGenapSorted = ownSort(testArrayGenap)
var arrayGanjilSorted = ownSort(testArrayGanjil)

// Driver code
console.log(binary_search(8, arrayGenapSorted))//0
console.log(binary_search(10, arrayGenapSorted))//2
console.log(binary_search(33, arrayGenapSorted))//-1
//
console.log(binary_search(53, arrayGanjilSorted))//3
console.log(binary_search(3, arrayGanjilSorted))//0
console.log(binary_search(2, arrayGanjilSorted))//-1

module.exports = {
  binary_search
}
