// 사분면 고르기
// 주어진 x y 좌표를 받고 사분면을 출력해라

const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').trim().split('\n');
const x = Number(input[0]);
const y = Number(input[1]);

if(x > 0 && y > 0){
  console.log('1');
}
else if(x < 0 && y > 0){
  console.log('2');
}
else if(x < 0 && y < 0){
  console.log('3');
}
else if(x > 0 && y < 0){
  console.log('4');
}