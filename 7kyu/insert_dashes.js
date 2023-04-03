/* 
Write a function insert_dash(num) / insertDash(num) / InsertDash(int num) that will insert dashes ('-') between each two odd digits in num. For example: if num is 454793 the output should be 4547-9-3. Don't count zero as an odd digit.

Note that the number will always be non-negative (>= 0).

create a holding array.
loop i and i+1
pushing numbers into holding array
both iterator === odd,
push i then - then i+1 
*/

function insertDash(num) {
  //code me
  let temp = [];
  let array = num
    .toString()
    .split("")
    .map((element) => Number(element));

  for (let index = 0; index < array.length; index++) {
    const first = array[index];
    const second = array[index + 1];
    if (first % 2 !== 0 && second % 2 !== 0) {
      if (second !== undefined) {
        temp.push(first, "-");
      } else {
        temp.push(first);
      }
    } else {
      console.log("Here is the temp array inside else", temp);
      temp.push(first);
    }
  }
  return temp.join("");
}
/*[4, 5, 4, 7, '-',9, '-', 3] */
// 4547-9-3
console.log(insertDash(454793)); //4547-9-3
