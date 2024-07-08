// 1. a= {} => object literal
const person = {
  firsName: "suryanarayana",
  lastName: "reddy",
  printFullName: function () {
    console.log(this.firsName, this.lastName);
  },
};

console.log(person);
person.printFullName();

// 2. Factory Function (same type of object with different paramters)

function FactoryPerson(fName, lName) {
  return {
    firsName: fName,
    lastName: lName,
    printFullName: function () {
      console.log(this.firsName, this.lastName);
    },
  };
}

const fPerson1 = FactoryPerson("Srinivas", "More");
const fPerson2 = FactoryPerson("Pratik", "wadekar");
console.log(fPerson1);
fPerson1.printFullName();
fPerson2.printFullName();

// 3. Construtor function
// name of function should be starting with capital letter

function ConstrutorPerson(fName, lName) {
  this.firsName = fName;
  this.lastName = lName;
  this.printFullName = function () {
    console.log(fName, lName);
  };
}

// const constructorPerson1 = new ConstrutorPerson("Srinivas", "More");
// const constructorPerson2 = new ConstrutorPerson("Pratik", "wadekar");
// console.log(constructorPerson1);
// constructorPerson1.printFullName();
// constructorPerson2.printFullName();

ConstrutorPerson("Srinivas", "More");

// 4. using Object

const oPerson = new Object();
// oPerson : {}
oPerson.firsName = "Sheela";
oPerson.lastName = "N";
oPerson.printFullName = function () {
  console.log(firsName, lastName);
};

oPerson.printFullName();

// 5. Object.create

const fn = function () {
  console.log(this.firsName, this.lastName);
};

const objCreate = Object.create(fn);
objCreate.firsName = "Sheela";
objCreate.lastName = "N";
// objCreate.printFullName();

// 2nd Example object.create
// creating the prototype for the object that will be created later
function greeting() {
  this.greeting = "Hello Muthu!";
}
// using the object.create() method to create a function whose object inherits
// properties from the prototype
function greetMuthu() {
  greeting.call(this); // {}
}
// creating an greetMuthu function object with the prototype object's properties (such as greeting)
greetMuthu.prototype = Object.create(greeting.prototype);

// greetMuthu -> parent obj -> greeting prototype
const app = new greetMuthu();
// app -> prototype -> greeting.prototype

// Displaying the object created
console.log(app.greeting); //Output : Hello Muthu!

//6. ES 6 classes

class Person {
  constructor(fName, lName) {
    this.firstName = fName;
    this.lastName = lName;
  }
  printFullName = function () {
    console.log(this.firstName, this.lastName);
  };
}

const PersonClass = new Person("Aditya", "Chava");

console.log(PersonClass);
PersonClass.printFullName();

//7. Object.assign, spread operator

const assign = Object.assign({}, PersonClass);
