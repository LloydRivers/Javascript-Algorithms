/* 
Your job here is to write a function (keepOrder in JS/CoffeeScript, keep_order in Ruby/Crystal/Python, keeporder in Julia), which takes a sorted array ary and a value val, and returns the lowest index where you could insert val to maintain the sorted-ness of the array. The input array will always be sorted in ascending order. It may contain duplicates.
*/

const keepOrder = (array, val) => {
  let newElementIndex = 0;
  if (array.length === 0) return 0;
  for (let i = 0; i < array.length; i++) {
    const currentElement = array[i];
    if (val > currentElement) {
      newElementIndex = array.length;
    }
    if (currentElement >= val) {
      newElementIndex = i;
      break;
    }
  }
  return newElementIndex;
};

console.log(keepOrder([1, 1, 2, 2, 2], 2));
