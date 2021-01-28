// const userName = 'Max';

// let age = 30;

// age = 29;

// if (age > 20) {
//   let isOdd = true;
// }

// const add = (a: number, b: number) => {
//   return a + b;
// };

// console.log(add(2, 5));

const add = (a: number, b: number) => a + b;

const printOutput: (a: number | string) => void = (output) =>
  console.log(output);

printOutput(add(5, 2));
