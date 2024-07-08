// const map = new Map();

// // adding values into map
// map.set("name", "Aditya");
// map.set("Rollno", 20);

// // access
// console.log(map.get("Rollno"));

// console.log(map);

// // if it contains
// console.log(map.has("name"));

// map.delete("name");

// console.log(map);

// map.size;
// map.clear();
// console.log(map);
// console.log("----------------------------");
// // set, get, has, delete, size, clear

// const set = new Set();
// set.add(1);
// set.add(2);
// set.add(2);
// console.log(set.has(1));
// console.log(set);
// console.log(set.size);
// // set.clear();
// set.delete(2);
// console.log(set);

// weakmap or weakset
// keys are the objects
// weak ?? -> they garbage collection

const weakMap = new WeakMap();

let obj = { key: "value" };
weakMap.set(obj, "some value");
// console.log(weakMap.has(obj));
// console.log(weakMap.get(obj));
// obj = null;

// if (global.gc) {
//   global.gc();
// }

// console.log(weakMap.has(obj));

const weakset = new WeakSet();
let obj1 = { key: "value" };
weakset.add(obj1);
console.log(weakset.has(obj1));
obj1 = new String("random"); // new String()
weakset.add(obj1);
console.log(weakset.has(obj1));
