// const angka = [1,2,3,4,5,6,7];
// angka.sort();
// console.log(angka)

// const huruf = ['a', 'b', 'c', 'd', 'e']
// huruf.pop()
// console.log(huruf)

// const sayuran = ['tomat', 'bayam', 'kangkung']
// console.log(sayuran.unshift('paprika', 'timun'))
// console.log(sayuran)

// const kata = ['ini', 'adalah', 'sebuah', 'kata']
// console.log(kata.join('_'))

const number = [3, 1, 4, 1, 5, 9, 2].sort();
console.log(number);

const number1 = [...new Set(number)];
console.log(number1);

const number2 = number.pop();
console.log(number);

number.unshift(7);
console.log(number);

const nuf = number.shift();
console.log(nuf);

console.log(number.join());

console.log(number.reverse());

let angka = [12, 12, 23, 341, 2334, 454, 124, 4512, 134, 1234];
let huruf = ["angka12", "ini_huruf"];
const array3 = huruf.concat(angka);
console.log(array3);

console.log(angka.indexOf(23));

console.log(angka.includes(122));

angka.splice(1, 0, 122);
console.log(angka);

console.log(angka.slice(1, 4));

console.log(huruf.reverse());

const board = [
  [1, 1, 1],
  [2, 2, 2],
  [3, 3, 3],
];
console.log(board[0][2]);
