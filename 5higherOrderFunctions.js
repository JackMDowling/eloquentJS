/*
function reduce(array, combine, start) {
  let current = start;
  for (let element of array) {
    current = combine(current, element);
  }
  return current;
}

console.log(reduce([1, 2, 3, 4], (a, b) => a + b, 0));
// → 10

let arrays = [[1, 2, 3], [4, 5], [6]];
// Your code here.
// → [1, 2, 3, 4, 5, 6]

*/

const flatten = (array) => {
  let result = array.reduce((previous, current) => {
    previous = previous.concat(current);
    return previous;
  });
  return result;
};

// let arrays = [[1, 2, 3], [4, 5], [6]];

// console.log("result = ", flatten(arrays));
