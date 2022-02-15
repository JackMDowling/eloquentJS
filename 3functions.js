function min(a, b) {
  if (a < b) {
    return a;
  } else {
    return b;
  }
}

// console.log(min(-100, 10));

function isEven(x) {
  let num = x - 2;
  if (num < 0) {
    num = num * -1;
  }
  //   console.log(num);
  if (num === 0) {
    return true;
  } else if (num === 1) {
    return false;
  } else if (num > 1) {
    return isEven(num);
  }
}

let result = isEven(-1);
console.log(result);

function countB(string) {
  let count = 0;
  for (let i = 0; i < string.length; i++) {
    if (string[i] === "B") {
      count++;
    }
  }
  return count;
}

function countChar(string, character) {
  if (typeof character !== "string") {
    return "the character has to be a string dummy";
  }
  let count = 0;
  for (let i = 0; i < string.length; i++) {
    if (string[i] === character) {
      count++;
    }
  }
  return count;
}

console.log(countChar("big ass elephant", null));
