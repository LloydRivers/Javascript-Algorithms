/* 
Given a mixed array of number and string representations of integers, add up the non-string integers and subtract the total of the string integers.

Return as a number.
*/

function divCon(array) {
  let total = 0;
  let division = 0;
  for (let index = 0; index < array.length; index++) {
    const element = array[index];
    if (typeof element === "number") {
      total += element;
    } else {
      division += Number(element);
    }
  }
  return Math.ceil(total - division);
}

console.log(divCon([9, 3, "7", "3"])); // , 2))
console.log(divCon(["5", "0", 9, 3, 2, 1, "9", 6, 7])); // 14
console.log(divCon(["3", 6, 6, 0, "5", 8, 5, "6", 2, "0"])); //13
