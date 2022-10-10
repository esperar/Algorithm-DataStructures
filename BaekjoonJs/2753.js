// 윤년 : 연도가 주어졌을때 윤년이면 1 , 아니면 0을 출력하시오

const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim();

if(input % 4 === 0 && (input % 100 != 0 || input % 400 === 0)){
  console.log('1');
}else{
  console.log('0');
}