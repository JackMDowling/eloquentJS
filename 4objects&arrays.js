const findRange = (start, end, step = 1) => {
  let range = [];
  if (step > 0 && start < end) {
    while (start < end) {
      range.push(start);
      start += step;
    }
  } else if (step < 0 && start > end) {
    while (start > end) {
      range.push(start);
      start += step;
    }
  } else {
    return "Invalid parameters";
  }
  return range;
};
// console.log(findRange(40, 20, -3));

const arraySum = (numArray) => {
  let sum = 0;
  for (let i = 0; i < numArray.length; i++) {
    sum += numArray[i];
  }
  return sum;
};

// console.log(arraySum(findRange(1, 10)));

const reverseArray = (array) => {
  let reversedArray = [];
  for (let i = array.length - 1; i >= 0; i--) {
    reversedArray.push(array[i]);
  }
  return reversedArray;
};

// console.log(reverseArray([1, 2, 3, 4, 5]));

const reverseArrayInPlace = (array) => {
  let i = 0;
  let j = array.length - 1;
  while (i <= j) {
    let left = array[i];
    let right = array[j];
    array[i] = right;
    array[j] = left;
    i++;
    j--;
  }
  return array;
};

// console.log(reverseArrayInPlace([1, 2, 3, 4, 5]));

const arrayToList = (array) => {
  let lastVal = array[array.length - 1];
  let node = { value: lastVal, rest: null };
  for (let i = array.length - 2; i >= 0; i--) {
    let lastNode = node;
    node = { value: array[i], rest: lastNode };
  }
  return node;
};

// console.log(arrayToList([1, 2, 3, 4, 5]));

const listToArray = (node) => {
  let array = [];
  while (node.rest !== null) {
    let value = node.value;
    array.push(value);
    node = node.rest;
  }
  if (node.rest === null) {
    array.push(node.value);
    return array;
  }
};

// console.log(listToArray(arrayToList([1, 2, 3, 4, 5])));

const prepend = (element, list) => {
  let node = { value: element, rest: list };
  return node;
};

// console.log(prepend(10, prepend(20, null)));

const nth = (list, number) => {
  if (number === 0 && list.rest !== null) {
    return list.value;
  } else if (list.rest !== null && number > 0) {
    list = list.rest;
    number = number - 1;
    console.log(list);
    console.log(number);
    // remember to return the recursive call or it'll come back undefined
    return nth(list, number);
  } else if (list.rest === null && number > 0) {
    return undefined;
  }
};

// console.log(nth(arrayToList([10, 20, 30, 40, 50, 60, 70, 80, 90, 100]), 4));

const deepEquals = (a, b) => {
  if (
    typeof a === "object" &&
    typeof b === "object" &&
    a !== null &&
    b !== null
  ) {
      const aKeys = Object.keys(a);
      const bKeys = Object.keys(b);
      if (aKeys.length !== bKeys.length) { 
        return false;
      } 
  } else if (a === b) {
    return true;
  } else {
    return false;
  }
};
