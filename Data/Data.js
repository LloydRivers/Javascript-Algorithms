const people = [
  {
    name: "John",
    surname: "Doe",
    age: 35,
    address: {
      street: "123 Main St",
      city: "Anytown",
      state: "CA",
      zip: "12345",
    },
    hobbies: ["reading", "cooking", "gardening"],
    isEmployed: true,
    startDate: new Date("2020-01-01"),
    endDate: null,
  },
  {
    name: "Jane",
    surname: "Smith",
    age: 27,
    address: {
      street: "456 Oak St",
      city: "Sometown",
      state: "NY",
      zip: "67890",
    },
    hobbies: ["hiking", "photography", "painting"],
    isEmployed: false,
    startDate: null,
    endDate: null,
  },
  {
    name: "Alice",
    surname: "Johnson",
    age: 42,
    address: {
      street: "789 Maple Ave",
      city: "Otherstown",
      state: "TX",
      zip: "54321",
    },
    hobbies: ["traveling", "yoga", "baking", "gardening"],
    isEmployed: true,
    startDate: new Date("2018-05-01"),
    endDate: new Date("2022-03-31"),
  },
];

module.exports = {
  people,
};
