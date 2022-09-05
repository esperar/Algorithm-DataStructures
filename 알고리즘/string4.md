# 주어진 배열의 원소를 역순으로 반환

- 배열을 인자로 받는다.
- 받은 배열인자의 원소를 역순으로 바꾸어 리턴한다.

<br>

```java
package test.str;

public class StringTest6 {
	
	static int[] reverse(int[] org) {
			
		for(int i = 0; i < org.length / 2; i++) {
			
			int temp = org[i];
			org[i] = org[org.length - i - 1];
			org[org.length - i - 1] = temp;
		}
		
		return org;
		
	}

	public static void main(String[] args) {
		
		int[] arr = {1,2,3,4,5};
		int[] reverseArr = reverse(arr);
		
		for(int j = 0; j < arr.length; j++) {
			System.out.print(reverseArr[j]);
		}
		

	}

}

```
> 이 코드에서 봐야할 것은 reverse 메서드에 for문의 반복횟수를 length / 2 로 돌려야한다는 것이다.