// Function Defination vs Function Expression

// Function Defination
function abc() {}

// Function Expression
const abc1 = function () {};

// High order function

// when a function either receives a function or return a function that particular
// function is called as higher order function
// Array ==> Map, reduce, filter
// polyfill

const arr = [1, 2, 3, 4, 5, 6, 7];

// splice
// used to add remove replace items

//adding
// (start, no of items , number of items to added or replced)
const splicedArrAdd = arr.splice(2, 0, 1, 2);

// when you dont provide start and end index it return empty array
// but update exisiting original array
console.log(arr, " ", splicedArrAdd);

// only on delted or removed items will be returned
const splicedDeleted = arr.splice(2, 3);
console.log(splicedDeleted);

// only on delted or removed items will be returned and replacement will happen
// in original array
const arr1 = [12, 32, 23, 34, 44];
const splicereplace = arr1.splice(2, 2, 40, 50);
console.log(arr1, " ", splicereplace);

// slice

// return elements from start index to end index (doesnt include end index)
const arr2 = [2, 3, 4, 5, 6];
const slicedArray = arr2.slice(1, 3);
console.log(slicedArray);
