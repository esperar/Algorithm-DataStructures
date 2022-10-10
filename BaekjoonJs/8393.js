const fs = require('fs');
const input = fs.readFileSync('./dev/stdin').toString().split(' ');

let count = 0;

for(let i = 1 ; i <= input[0] ; i++){
  count += i;
}

console.log(count);