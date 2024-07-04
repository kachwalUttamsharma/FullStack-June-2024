const input = {
	firstName: "John",
	lastName: "Doe",
	address: {
		street: "North 1st street",
		city: "San Jose",
		state: "CA",
		country: "USA",
		postCodes: {
			firstBlock: 10,
			secondBlock: 12,
		},
	},
	birthDate: "1987-07-16"
};

// to

const output = {
  firstName: "John",
  lastName: "Doe",
  "address.street": "North 1st street",
  "address.city": "San Jose",
  "address.state": "CA",
  "address.country": "USA",
  "address.postCodes.firstBlock": 10,
  "address.postCodes.secondBlock": 12,
};

// Initalize with default parameters cause we need parent prop to append the child prop
Object.prototype.myFlat = function(parentProp = '', res = {}) { 
	const obj = this;
	for(let prop in obj) {
		if(obj.hasOwnProperty(prop)) {
			// Append the prop to parentProp if parentProp exists
			const currProp = parentProp ? `${parentProp}.${prop}` : prop; 
			const elem = obj[prop];
			// Edge cases : elem can be array or date object
			if(elem !== null && typeof elem === "object" && !Array.isArray(elem) && !(elem instanceof Date)) {
				elem.myFlat(currProp, res);
			}
			else {
				// For array and date, we can use superClone, as for now I'm copying the same value
				res[currProp] = elem; 
			}
		}
	}
	return res;
}

const output1 = input.myFlat();
console.log(input, "\n", output1);

console.log(flattenObject(input));