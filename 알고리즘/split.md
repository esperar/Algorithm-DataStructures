# 수와 상관없이 공백을 구분자로 자르기
- 사용자가 입력한 내용의 공백을 구분자로 하여 잘라 배열에 저장한다.
- 다음 배열의 내용을 출력하는 코드를 작성하라
- q를 입력하면 종료한다.

<br>

```
>>  string  temp  aa bbb cc     lalala
string
temp
aa
bbb
cc
lalala
```

<br>

```java
package test;

import java.util.Scanner;

public class Test8 {

	public static void main(String[] args) {
		
		while(true) {
			Scanner sc = new Scanner(System.in);
			System.out.print(">>");
			String input = sc.nextLine();
			String[] list = input.trim().split("\\s* \\s*");;
		
			if(input.equalsIgnoreCase("q")) {
				break;
			}
		
			for(int i = 0 ; i < list.length; i++) {
				System.out.println(list[i]);
			}
		}
		
		
	}

}

```