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
