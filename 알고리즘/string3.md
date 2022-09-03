# URL을 입력받아 검사하기

- url을 .으로 구분하여 Scanner로 입력을 받습니다.
- url의 마지막이 'com'으로 끝나는지 검사합니다.
- url에 'java'가 포함되어있는지 검사합니다.
- 'bye'를 입력하면 프로그램을 종료합니다.

```java
package test.str;

import java.util.Scanner;

public class StringTest4 {

	public static void main(String[] args) {
		
		Scanner in = new Scanner(System.in);
		
		while(true) {
			
			String url = in.next();
		
			String[] urlArray = url.split("/.");
			
			if(url.equals("bye")) {
				break;
			}
			
			if(urlArray[urlArray.length - 1].equals("com")) {
				System.out.println(url +"은 'com' 으로 끝납니다.");
			} else {
				System.out.println(url + "은 'com'으로 끝나지 않습니다.");
			}
		
			for(int i = 0; i < urlArray.length; i++) {
				if(urlArray[i].equals("java")) {
					System.out.println(url + "은 'java' 를 포함합니다.");
				} else {
					System.out.println(url + "은 'java' 를 포함하지 않습니다.");
				}
			}
		}

	}

}

```