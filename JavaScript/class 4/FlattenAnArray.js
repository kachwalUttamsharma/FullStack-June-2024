// input array : [1,2,3,[4,5,6], [7,8], 9]
// [1,2,3,4,5,6,7,8,9]
// multi-dimensional to single array

// arr.flat();

// how can we access this on Array
// instead on array object

const myFlat = function (arr) {
  if (!arr || !Array.isArray(arr)) {
    throw new Error("expected parameter should be an array");
  }
  let newArr = [];
  for (let i = 0; i < arr.length; i++) {
    const elem = arr[i];
    if (Array.isArray(elem)) {
      const smallArr = myFlat(elem);
      newArr.push(...smallArr);
    } else {
      newArr.push(elem);
    }
  }
  return newArr;
};

const arr = [1, 2, 3, [4, 5, 6], [7, 8], 9];
// const res = myFlat(arr);
// console.log(arr);
// console.log(res);

// Implementing myFlat to the prototype, same logic
Array.prototype.myFlat2 = function () {
  const arr = this;
  if(!arr || !Array.isArray(arr)) {
    throw new Error("expected parameter should be an array");
  }
  let newArr = [];
  for(let i = 0; i < arr.length; i++) {
    const elem = arr[i];
    if(Array.isArray(elem)) {
      const smallArr = elem.myFlat2(); 
      newArr.push(...smallArr);
    }
    else {
      newArr.push(elem);
    }
  }
  return newArr;
}

const res = arr.myFlat2();
console.log(arr, "\n", res);