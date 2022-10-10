// 알람시계
// 시와 분을 입력받고 그 입력받은 시간에 -45분을 해 출력

const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().split(' ');

let t = Number(input[0]);
let m = Number(input[1]);

m -= 45;

if(m < 0){
  m += 60;
  t--;
  if(t === -1){
    t = 23;
  }
}

console.log(`${t} ${m}`);