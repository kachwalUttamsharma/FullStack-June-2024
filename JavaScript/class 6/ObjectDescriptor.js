// const person1 = {
//   firsName: {
//     value: "suryanarayana",
//     writable: false,
//   },
//   lastName: "reddy",
//   printFullName: function () {
//     console.log(this.firsName, this.lastName);
//   },
// };

// for each property in object you can set some permission
// like is it editable (writable) -> helps to create final variable or constant variable in object
// or is it emmunerable -> helps to decide whether particular property should be available
// in iteration
// or is it configurable -> protect its properties and functions

const person = {};
Object.defineProperty(person, "firstName", {
  value: "suryanarayana",
  writable: false,
  enumerable: false,
  configurable: false,
});
Object.defineProperty(person, "lastName", {
  value: "reddy",
  writable: true,
  enumerable: false,
  configurable: true,
});
person.firstName = "Sheela";

console.log(person.firstName);
delete person.firstName;
console.log(person.firstName);

console.log("-------------------------");
for (let key in person) {
  console.log(key);
}
console.log("-------------------------");
console.log(person.lastName);
