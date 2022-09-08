# 연결리스트 (linkedList)

### 연결리스트의 특징
- 데이터가 물리적으로 인접해있지는 않으나 데이터간의 연결고리를 사용하여 연속적으로 (저장하는 것 처럼) 관리

<br>

### 노드
-  데이터를 저장하는 하나의 단위
-  노드에는 데이터를 저장해야하고 + '다음 노드에 대한 주소'를 저장

<br>

### c언어로 구현해 보았다.

```c
#include <stdio.h>

typedef struct _node {
	int data;
	struct _node* next;
} Node;

// '가변적' . '동적' 데이터를 저장하는 길이가 정해지 있지 않음 => c에서의 '동적 할당'
Node *head, *tail, *cur; 
 
int main() {}

void insert(int data) {

	Node* newNode = (Node*)malloc(sizeof(Node));
	Node n1;

	newNode->data = data;
	newNode->next = NULL;


	if (head == NULL) { // 연결리스트에 노드 존재 x
		head = newNode;
		tail = newNode;
	}
	else {
		tail->next = newNode;
	}
	tail = newNode;
}
```