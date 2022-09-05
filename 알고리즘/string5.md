# 두 배열의 원소값을 비교하기
- 배열 두개를 받고 원소를 비교하여 boolean 형으로 리턴한다.
- 배열 길이도 같아야한다.

<br>

```java
package test.str;

public class StringTest7 {

	public static boolean compareArr(int[] arr1 , int[] arr2) {
		
		boolean compare = false;
		int count = 0;
		if(arr1.length == arr2.length) {
			for(int i = 0; i < arr1.length; i++) {
				if(arr1[i] == arr2[i]) {
					count++;
				}
			}
				if(count == arr1.length) {
					compare = true;
				}
		} 
		
		return compare;
		
	}
	
	public static void main(String[] args) {
		
		int[] a = {1,2,3,4,5};
		int[] b = {1,2,3,4};
		int[] c = {1,2,3,2,5};
		int[] d = {1,2,3,4,5};
		
		System.out.println(compareArr(a , b));
		System.out.println(compareArr(a,d));

	}

}
```