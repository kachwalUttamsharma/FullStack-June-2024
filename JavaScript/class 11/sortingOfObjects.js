const people = [
  { name: "Alice", age: 25 },
  { name: "Bob", age: 17 },
  { name: "Charlie", age: 22 },
  { name: "David", age: 15 },
  { name: "Edward", age: 30 },
];

// for numbers
people.sort((a, b) => a.age - b.age);
console.log(people);
// for strings
people.sort((a, b) => a.name.localeCompare(b.name));
console.log(people);

// if you dont want to manipulate existing array then use toSorted
const p1 = people.toSorted((a, b) => a.age - b.age);
console.log("P1", p1);

const p2 = people.toSorted((a, b) => a.name.localeCompare(b.name));
console.log("P2", p2);
