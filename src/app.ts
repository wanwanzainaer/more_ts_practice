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

const add = (...numbers: number[]) => {
  return numbers.reduce((currentRedult, currentValue) => {
    return (currentRedult += currentValue);
  }, 0);
};

console.log(add(1, 345, 56, 4, 2323.4, 23465, 2123, 2));

const printOutput: (a: number | string) => void = (output) =>
  console.log(output);

printOutput(add(5, 2));

// const test = {
//   name: 'Simon',
//   age: 10,
//   go: { ggg: { sdfsdf: { asdf: 'sadsdf' } } },
// };

// const ttt = { ...test };
// console.log(ttt);

function findTheChar(sentence) {
  const charArray = sentence.split('');
  const words = {};
  for (const i in charArray) {
    words[charArray[i]] = words[charArray[i]] ? words[charArray[i]] + 1 : 1;
  }
  console.log(words);
}
