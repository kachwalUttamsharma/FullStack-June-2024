const Languages = {
  eng: "English",
  math: "Mathematics",
};

const handler = {
  vals: ["Hindi", "English", "Mathematics", "Bengali"],
  keys: ["Ben"],
  get(target, prop) {
    try {
      if (prop in target) {
        return target[prop];
      } else {
        throw new Error("Property does not exist");
      }
    } catch (error) {
      console.log("error thrown", error);
    }
  },
  set(target, prop, value) {
    try {
      target[prop] = value;
      //   if (prop in target && handler.vals.includes(value)) {
      //     target[prop] = value;
      //   } else if (!(prop in target) && handler.vals.includes(value)) {
      //     target[prop] = value;
      //   } else {
      //     throw new Error("This is not a valid value");
      //   }
    } catch (error) {
      console.log("error thrown", error);
    }
  },
};

const proxy = new Proxy(Languages, handler);

// console.log(proxy.eng);

// console.log(proxy.science);

// proxy.ben = "Bengali";

// console.log(proxy);

// map, filter, reduce

const people = [
  { name: "Alice", age: 25 },
  { name: "Bob", age: 17 },
  { name: "Charlie", age: 22 },
  { name: "David", age: 15 },
  { name: "Edward", age: 30 },
];

// filter people by age above or equal 18
// and get average age of people

// [25,17,22,15,30] -> [25, 22, 30]
// acc (0 + 25/3) => (25/3 + 22/3) => (25/3+22/3+30/3)
// reduce -> reduce array of items into one item

const averageAge = people
  .map((p) => p.age)
  .filter((a) => a >= 18)
  .reduce((acc, age, ind, arr) => {
    return acc + age / arr.length;
  }, 0);

console.log(averageAge);

const number = [1, 2, 3, 4, 5, 6, 7];

// sum of all even number after each number is multiplied by 4

const sum = number
  .map((n) => n * 4)
  .filter((n) => n % 2 === 0)
  .reduce((acc, curr) => {
    return acc + curr;
  }, 0);

console.log(sum);

// generators
