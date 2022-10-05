# 스택 (Stack)

- 스택은 삽입과 삭제가 한쪽 끝에서만 발생하는 `선형 리스트`다.  
> LIFO (Last In, First Out) 방식

- 스택의 연산에는 push pot peek 연산이 있다.
  - `push` : 스택의 연산에 자료 삽입
  - `pop` : 자료를 삭제
  - `peek` : 현재 스택의 top 포인터가 가리키는 자료의 내용을 조사하는 peek 연산자가 있다.

### 구현

```c
#include <stdio.h>
#include <stdlib.h>

// 파일명 : stack.c
// 목표 : 배열과 연결리스트를 사용해서
// 스택(push, pop, peek)의 기능을 구현

// 1.배열 기반 구현
#define STACK_SIZE 10

int topIdx; // 스택의 맨 위 데이터가 어디에 저장? 
int arrStack[STACK_SIZE];

void init() {
	topIdx = -1; // 스택이 비어있다고 정의

}

void push(int data) {
	if(topIdx < STACK_SIZE - 1)
		arrStack[++topIdx] = data;
}
```
