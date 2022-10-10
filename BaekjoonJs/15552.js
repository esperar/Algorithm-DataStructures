const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().split('\n');

let result = '';
const size = Number(input[0]);

for(let i = 1; i <= size; i++){
  let inputNumber = input[i].split(' ');
  result += Number(inputNumber[0]) + Number(inputNumber[1]) +'\n';
}

console.log(result);