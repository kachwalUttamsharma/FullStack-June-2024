Object.prototype.superClone = function (object) {
    if (!object) {
    	throw new Error(object, " is null or undefined");
    }
	// Check for primitive data types and functions
	if (typeof object !== "object") {
		return object; 
	}
	// Check for Date object
	if (object instanceof Date) {
		return new Date(object);
	}
    const cloning = Array.isArray(object) ? [] : {};
    for (let prop in object) {
      	if (object.hasOwnProperty(prop)) {
			// Simply do superClone to every element, Base conditions will do their work
			cloning[prop] = this.superClone(object[prop]); 
		}
    }
    return cloning;
};

const testCase1 = [1, 2, 3, [4, 5], 6];
const clonedTestCase1 = Object.superClone(testCase1);
console.log("Cloned result:", clonedTestCase1);

clonedTestCase1[3][0] = 10;

console.log("After modification:\n", "Original:", testCase1, "\n", "Cloned:", clonedTestCase1);


const testCase2 = {
	key1 : [1, 2, [3, 4]],
	key2 : new Date("2001-11-30").toDateString(),
	key3 : {
		key4 : "Hello from original",
	}
}
const clonedTestCase2 = Object.superClone(testCase2);
console.log("Cloned result:", clonedTestCase2);

clonedTestCase2.key1[2][0] = 10;
clonedTestCase2.key2 = new Date("2024-11-30").toDateString();
clonedTestCase2.key3.key4 = "Hello from cloned";

console.log("After modification:\n", "Original:", testCase2, "\n", "Cloned:", clonedTestCase2);