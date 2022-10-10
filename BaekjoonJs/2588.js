const fs = require('fs');
const [a , b] = fs.readFileSync('/dev/stdin').toString().split('\n');
const [b1,b2,b3] = b.split(''); // 한글자씩 쪼개기

// a = 472
// b1 : 3 b2 : 8 b3 : 5

const result1 = a * b3;
const result2 = a * b2;
const result3 = a * b1;
const result = a * b;

console.log(result1);
console.log(result2);
console.log(result3);
console.log(result);