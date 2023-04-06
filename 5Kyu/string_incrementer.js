/*
Your job is to write a function which increments a string, to create a new string.

If the string already ends with a number, the number should be incremented by 1.
If the string does not end with a number. the number 1 should be appended to the new string.
Examples:

foo -> foo1

foobar23 -> foobar24

foo0042 -> foo0043

foo9 -> foo10

foo099 -> foo100

Attention: If the number has leading zeros the amount of digits should be considered.

I will need to isolate the numbers from the rest of the string.
I will need to check how many numbers there are e.g 10 or 300, or 40000
if there are no numbers there > foo -> foo1
*/


function incrementString(str) {
  // Check if the string ends with a number
  const match = str.match(/\d+$/);
  console.log(match);
  if (match !== null) {
    // If there is a number at the end of the string, increment it
    const num = parseInt(match[0]) + 1;
    console.log("num", num);
    const prefix = str.slice(0, match.index);
    console.log("prefix", prefix);
    console.log(prefix + num.toString().padStart(match[0].length, "0"));
    return prefix + num.toString().padStart(match[0].length, "0");
  } else {
    // If there is no number at the end of the string, append 1
    return str + "1";
  }
}

// console.log(incrementString("foo"));
// console.log(incrementString("foobar000"));
console.log(incrementString("foobar003000"));
