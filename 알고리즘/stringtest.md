# 섞인 글자 맞추기 퀴즈

1. 배열 arr 요소 중 하나를 임의로 골라 반환
1. 주어진 문자열 str 의 각 문자의 순서를 뒤섞은 다음, 새로운 문자열로 반환
1. question을 보여준 후 사용자에게서 answer을 입력받는다. 
1. q를 누르면 게임을 종료시켜야 한다.
1. 정답을 맞추면 그다음 문제를 출제한다.

<br>

```java
package test.chap05test.three;

import java.util.Arrays;
import java.util.Scanner;

public class StringExample {

	public static void main(String[] args) {
		
		Scanner sc = new Scanner(System.in);
		String[] arr = {"GWANG" , "JUSW" , "MEIS" ,"TER"};
		String answer = getAnswer(arr);
		String question = getScrambledWord(answer);
		String ans = "";
		
		while(true) {
			
			if(answer.equals(ans)){
				System.out.println("정답 !");
				answer = getAnswer(arr);
				question = getScrambledWord(answer);
			} else if(ans.equalsIgnoreCase("Q")) {
				break;
			} else {
				System.out.println("정답이 아닙니다.");
			}
			
			System.out.println("Question :" + question);
			System.out.print("답 : ");

			ans = sc.next();
			
		}
		
	}

	private static String getScrambledWord(String answer) {
		
		char[] array = answer.toCharArray();
		
		
		for(int i = 0; i < array.length ; i++) {
			int random = (int)(Math.random() * array.length);
			// 배열값 섞기
			char temp = array[i];
			array[i] = array[random];
			array[random] = temp;
		}
		String str = String.valueOf(array);
				
		return str;
	}
	
	private static String getAnswer(String[] arr) {

		return arr[(int)(Math.random() * arr.length)]; 
	}

}

```