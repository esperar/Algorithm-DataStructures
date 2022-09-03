# 문자열에 포함된 문자의 개수 반환

1. String char countChar(String s , char c) 메서드가 있다.
2. s 에 포함된 c의 개수를 반환해라. 

<br> 

> charAt() 메소드를 사용했다.
```java
package test.str;

public class StringTest1 {
	static int countChar(String s , char c) {
		int count = 0;
		
		for(int i = 0; i < s.length(); i++) {
			if(c == s.charAt(i)) {
				count++;
			}
		}
		
		return count;
	}
	
	public static void main(String[] arg) {
		
		System.out.println(countChar("hello" , 'o'));
	}
}

```