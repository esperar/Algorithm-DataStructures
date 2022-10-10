const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().split(' ');

const n = Number(input[0]);

for(i = 1; i < 9; i++){
  console.log(`${n} * ${i} = ${n * i}`);
}