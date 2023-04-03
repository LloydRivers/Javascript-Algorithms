/*
Create the function consecutive(arr) that takes an array of integers and return the minimum number of integers needed to make the contents of arr consecutive from the lowest number to the highest number.

For example:
If arr contains [4, 8, 6] then the output should be 2 because two numbers need to be added to the array (5 and 7) to make it a consecutive array of numbers from 4 to 8. Numbers in arr will be unique.

Notes:

I need to sort the array [4, 6, 8]

second[i+1] - first[i] = 1
*/
function consecutive(arr) {
  if (arr.length === 0 || arr.length === 1) {
    return 0;
  }
  const sort = arr.sort();
  const length = sort.length;
  const max = Math.max(...arr);
  const min = Math.min(...arr);
  const range = max - min;
  if (length === range + 1) {
    return 0;
  }
  return range + 1 - length;
}
console.log(consecutive([4, 8, 6]));
