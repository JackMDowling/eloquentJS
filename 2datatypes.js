const triangle = () => {
  let tri = "";
  while (tri.length <= 7) {
    console.log(tri);
    tri += "#";
  }
  console.log(tri);
};

triangle();

const fizzBuzz = () => {
  let n = 1;
  while (n <= 100) {
    if (n % 3 == 0 && n % 5 == 0) {
      console.log("FizzBuzz");
    } else if (n % 3 == 0) {
      console.log("Fizz");
    } else if (n % 5 == 0) {
      console.log("Buzz");
    } else {
      console.log(n);
    }
    n++;
  }
};

fizzBuzz();

const chessboard = (n = 8) => {
  if (n === 1) {
    console.log(" ");
  } else {
    let row = "";
    // Create a row n long
    for (let i = 1; i <= n; i++) {
      if (i % 2 == 1) {
        row += " ";
      } else if (i % 2 == 0) {
        row += "#";
      }
    }
    let count = 1;
    let board = row;
    let newRow = row;
    while (count < n) {
    // Reverse the row back and forth until you have n columns
      newRow = newRow.split("").reverse().join("");
      board += `\n` + newRow;
      count++;
    }
    console.log(board);
  }
};

chessboard(50);
