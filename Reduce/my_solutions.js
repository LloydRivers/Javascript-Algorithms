const { people } = require("../Data/Data.js");

// 1. Find the total age of all people in the array.
const totalAge = people.reduce((acc, person) => acc + person.age, 0);

// 2. Group people by their employment status (i.e., employed or unemployed).

const employedPeople = people.reduce(
  (acc, person) => (person.isEmployed ? [...acc, person] : acc),
  []
);

// 3. Find the most common hobby among all people in the array.

const commonHobby = people
  .flatMap((person) => person.hobbies)
  .reduce((acc, hobby) => {
    acc[hobby] = (acc[hobby] || 0) + 1;
    return acc;
  }, {});

const mostCommonHobby = Object.keys(commonHobby).reduce((a, b) => {
  return commonHobby[a] > commonHobby[b] ? a : b;
}, Object.keys(commonHobby)[0]);

console.log(mostCommonHobby);
