// 주사위 상금

const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().split(' ');

let first = Number(input[0]);
let second = Number(input[1]);
let third = Number(input[2]);
let bigger = 0;
let money = 0;

if(first === second && second === third && first === third){
  money = 10000 + (first) * 1000;
  console.log(money)
}

else if(first != second && first != third && second != third){
  moneyMakeDiffer();
  money = bigger * 100;
  console.log(money);
}
else{
  if(first === second){
    money = 1000 +(first) * 100;
    console.log(money);
  }
  else if(first === third){
    money = 1000 +(first) * 100;
    console.log(money);
  }
  else if(second === third){
    money = 1000 +(second) * 100;
    console.log(money);
  }
}

function moneyMakeDiffer(){
  if(first > second && first > third){
    bigger = first;
  }
  else if(second > first && second > third){
    bigger = second;
  }
  else if(third > first && third > second){
    bigger = third;
  }
}