'use strict'

// var testArrayGenap = [40, 18, 22, 32, 90, 10, 10, 22, 8]
var testArrayGanjil = [3, 31, 89, 53, 53, 85, 77, 21, 55]

function ownSort(arr) {
  let arrayNumb = arr

  let length = arrayNumb.length

  for(let i = 0; i < length; i++){
    for(let j = length - (length - i); j >= 0; j--){
      
      if(arrayNumb[j] > arrayNumb[j+1]){
        let tmp = arrayNumb[j]
        arrayNumb[j] = arrayNumb[j+1]
        arrayNumb[j+1] = tmp
        
      }
    }
  }
  return arrayNumb

}

function binary_search (search, array, min, max) {
  let cutMiddle = Math.floor((min+max)/2)
  let maximum = max
  let minimum = min


  if(maximum < minimum && array[cutMiddle] !== search){
    return -1
  }

  if(array[cutMiddle] === search){
    return cutMiddle
  } else{
    
    if(array[cutMiddle] < search){
      minimum = cutMiddle + 1

      return binary_search(search,array,minimum,maximum)
    } 
    
    else if(array[cutMiddle] > search){
      maximum = cutMiddle - 1
      return binary_search(search,array,minimum,maximum)
    } 
  }
}

// var arrayGenapSorted = ownSort(testArrayGenap)
var arrayGanjilSorted = ownSort(testArrayGanjil)

// Driver code
// console.log(binary_search(8, arrayGenapSorted, 0, arrayGenapSorted.length - 1))
// console.log(binary_search(10, arrayGenapSorted, 0, arrayGenapSorted.length - 1))
// console.log(binary_search(33, arrayGenapSorted, 0, arrayGenapSorted.length - 1))

console.log(binary_search(53, arrayGanjilSorted, 0, arrayGanjilSorted.length - 1))
console.log(binary_search(3, arrayGanjilSorted, 0, arrayGanjilSorted.length - 1))
console.log(binary_search(2, arrayGanjilSorted, 0, arrayGanjilSorted.length - 1))

module.exports = {
  binary_search
}
