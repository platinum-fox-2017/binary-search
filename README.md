# binary-search

## Release 1: Write the algorithm

1. Prior to running binary search function, ensure array that will be processed has been sorted (ascending/descending)
2. Create binary search function that takes a 'search' parameter, input array, and a default parameter 'midpoint' that can be stacked and returned upon being called

2.a Initialize a variable that takes the middle/center index of the array

2.b set an (IF) conditional statement such that if array at center index is equals to 'search' parameter:
    2.b.1 PRINT the sum of index at center of array plus the 'midpoint'
2.c set an (ELSE IF) conditional statement when the search parameter value is less than value of array at center index AND array length is greater than 1:
    2.c.1 return (Recursively) the function with the search parameter and new array that comprises values from index at start to middle.
2.d set an (ELSE IF) conditional statement when the search parameter value is  greater than value of array at center index AND array length is greater than 1:
    2.d.1 accumulate 'midpoint' variable (step 2.a) with length of array at starting index to middle
    2.d.2 return (Recursively) the function with the search parameter, new array with values from center to end, and the midpoint value.
2.e other than the above conditional statement, would return -1

