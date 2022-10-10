const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString();

let result = '';

for(let i = 1; i <= Number(input[0]); i++){
  result += i +'\n';
}

console.log(result);