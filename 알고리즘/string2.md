# 인자의 첫번째 값을 제외한 값들의 합을 구하기

- 다음 코드를 실행하면 9 5 14를 출력한다. 여기서 sumExceptFirst() 메서드를 완성하라

<br>

```java
public class StringTest2 {

	public static void main(String[] args) {
		
		System.out.println(sumExceptFirst(1,2,3,4));
		int arr[] = {2,3};
		System.out.println(sumExceptFirst(1,arr));
		System.out.println(sumExceptFirst(1,2,3,4,5));

	}
```

> 자바는 가변 길이 변수를 배열처럼 취급한다.

```java
package test.str;

public class StringTest2 {

	public static void main(String[] args) {
		
		System.out.println(sumExceptFirst(1,2,3,4));
		int arr[] = {2,3};
		System.out.println(sumExceptFirst(1,arr));
		System.out.println(sumExceptFirst(1,2,3,4,5));

	}

	private static int sumExceptFirst(int ...is) {
		
		int sum = 0;
		for(int i = 1; i < is.length; i++) {
			sum += is[i];
		}
		
		return sum;
		
	}
	
	private static int sumExceptFirst(int first , int[] arr) {
		
		int sum = 0;
		
		for(int i = 0; i < arr.length; i++) {
			sum += arr[i];
		}
		
		return sum;
	}
	
}
```