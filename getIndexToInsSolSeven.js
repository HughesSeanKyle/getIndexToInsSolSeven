/*
Basic Algorithm Scripting: Where do I BelongPassed
Return the lowest index at which a value (second argument) should be inserted into an array (first argument) once it has been sorted. The returned value should be a number.

For example, getIndexToIns([1,2,3,4], 1.5) should return 1 because it is greater than 1 (index 0), but less than 2 (index 1).

Likewise, getIndexToIns([20,3,5], 19) should return 2 because once the array has been sorted it will look like [3,5,20] and 19 is less than 20 (index 2) and greater than 5 (index 1).

*/

//Solution Seven
function getIndexToIns(arr, num) {                //1
  return arr.filter(val => num > val).length;     //2
}
  
console.log(getIndexToIns([5, 3, 20, 3], 5));
//Output = 2 
 
 



//Notes
/*
//1
function which takes in two arguments: 
  Arg1: an Array
  Arg2: number/integer

//2
The filter() method creates a new array with all elements that pass the test implemented by the provided function.

Source - [https://devdocs.io/javascript/global_objects/array/filter]

The filter method will check to see if the num input (5) is greater than each value inside the array. In this scenario 5 is greater than both 3 values in the array. Therefore, an array of both 3 values are returned ([3, 3])

The .length property will return how many items are in the returned filtered array ([3, 3]). In this case output is equal to 2. 

The .length property will also satisfy the requirement that if input is "[], 1" then the value 0 should be returned. 

*/

