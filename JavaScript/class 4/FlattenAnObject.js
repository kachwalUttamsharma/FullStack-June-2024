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
};

// to
function flattenObject(obj, parent = "", res = {}) {
  for (let key in obj) {
    let propName = parent ? parent + "." + key : key;
    if (typeof obj[key] === "object" && !Array.isArray(obj[key])) {
      flattenObject(obj[key], propName, res);
    } else {
      res[propName] = obj[key];
    }
  }
  return res;
}

console.log(flattenObject(input));

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

const output = input.myFlat();
console.log(input, "\n", output);
console.log(flattenObject(input));
