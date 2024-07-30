// In the previous myFlat method, we can set enumerable to false for myFlat method, 
// so that we don't have handle edge case as we did in line number 35 using hasOwnProperty
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
Object.defineProperty(Object.prototype, 'myFlat2', {
    value : function(parentProp = '', res = {}) {
      const obj = this;
      for(let prop in obj) {
        const currProp = parentProp ? `${parentProp}.${prop}` : prop; 
        const elem = obj[prop];
        if(elem !== null && typeof elem === "object" && !Array.isArray(elem) && !(elem instanceof Date)) {
          elem.myFlat2(currProp, res);
        }
        else {
          res[currProp] = elem; 
        }
      }
      return res;
    },
    enumerable : false // default 
  }) 
  
  console.log(input.myFlat2());