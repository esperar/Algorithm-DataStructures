// 시험성적
// Q : 시험점수를 입력받아 90 ~ 100점은 A 80 ~ 89점은 B 70 ~ 79점은 C 60 ~ 69점은 D로 출력하는 프로그램 작성

const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim();

if(input >= 90){
  console.log("A");
}
else if(input >= 80 && input < 90){
  console.log("B");
}
else if(input >= 70 && input < 80){
  console.log("C");
}
else if(input >= 60 && input < 70){
  console.log("D");
}
else{
  console.log("F");
}