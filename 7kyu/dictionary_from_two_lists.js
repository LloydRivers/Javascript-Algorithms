/*
There are two lists, possibly of different lengths. The first one consists of keys, the second one consists of values. Write a function createDict(keys, values) that returns a dictionary created from keys and values. If there are not enough values, the rest of keys should have a None (JS null)value. If there not enough keys, just ignore the rest of values.

Example 1:

keys = ['a', 'b', 'c', 'd']
values = [1, 2, 3]
createDict(keys, values) // returns {'a': 1, 'b': 2, 'c': 3, 'd': null}

HERE
I am a beginner so I am writing my thoughts here.

My thoughts are here
Create an empty object
Loop over the array.
i must be less than the length of the values array.
arr[i]: values[i] or null
*/

function createDict(keys, values) {
  // Create an empty object to store the dictionary
  const dict = {};

  // Loop over the keys array
  for (let i = 0; i < keys.length; i++) {
    // If there's a corresponding value for the current key, add it to the dictionary
    if (i < values.length) {
      dict[keys[i]] = values[i];
    } else {
      // Otherwise, add null to the dictionary for the current key
      dict[keys[i]] = null;
    }
  }

  // Return the completed dictionary
  return dict;
}
