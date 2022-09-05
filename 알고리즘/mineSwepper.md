# 지뢰찾기 게임 프로그램

- 프로그램은 3개의 명령행 인수(m,c,p) 를 받아들이고 , m x n 크기의 배열을 생성해 지뢰를 숨긴다.
- 숨긴 지뢰가 있는 원소는 *로 표기하고, 없는 원소 _로 표시한다. 원소에 지뢰가 있을 확률은 세 번째 명령행 인수인 p이다.
- 지뢰 숨김 여부를 나타내는 2차원 배열을 출력하고, 지뢰를 숨기지 않은 원소를 _ 대신에 이웃한 지뢰 개수로 채운 2차원 배열도 함께 출력한다.
- 이웃한 지뢰는 상하좌우 및 대각선 원소에 숨긴 지뢰를 의미한다.
- 지뢰 숨긴 지역을 30%로 설정하려면, 난수 발생 정적 함수 Math.random() 값이 0.3 보다 적은 원소에 지뢰를 숨긴다.

<br>

```java
package test.str;

import java.util.Scanner;

public class StringTest9 {
	
	static void mineSweeper(int m, int n , double p) {
		int[][] arr = new int[m][n];
		final int boom = -1;
		
		// 지뢰 생성
		for(int i = 0; i < m; i++) {
			for(int j = 0; j < m; j++) {
				double rand = Math.random();
				if(rand < p) {
					arr[i][j] = boom; 
				} else {
					arr[i][j] = 0;
				}
			}
		}
		
		// 지뢰 생성여부 출력
		for(int i = 0; i < m; i++) {
			for(int j = 0; j < n; j++) {
				if(arr[i][j] == 0) {
					System.out.print("- ");
				} else if(arr[i][j] == boom) {
					System.out.print("* ");
				}
			}
			System.out.println(" ");
		}
		
		// 근처 지뢰 수 구하기
		for(int i = 0; i < m; i++) {
			for(int j = 0; j < n; j++) {
				if(arr[i][j] != boom) {
					try {
						for(int k = -1; k < 2; k++) {
							if(arr[i + k][j] == boom) {
								arr[i][j]++;
							}
							if(arr[i][j+k] == boom) {
								arr[i][j]++;
							}
							if(arr[i+k][j+k] == boom) {
								arr[i][j]++;
							}
						}
					
					} catch(Exception e) {}
				}
			}
		}
		
		System.out.println(" ");
		System.out.println(" ");
		System.out.println(" ");
		
		// 지뢰 생성여부 출력
		for(int i = 0 ; i < m; i++) {
			for(int j = 0; j < n; j++) {
				if(arr[i][j] == boom) 
					System.out.print("* ");
				else 
					System.out.print(arr[i][j] +" ");
			}
			System.out.println(" ");
		}
	}

	public static void main(String[] args) {
		
		Scanner sc = new Scanner(System.in);
		
		int m = sc.nextInt();
		int n = sc.nextInt();
		double p = sc.nextDouble();
		
		mineSweeper(m,n,p);
		
	}

}


```

> 출력결과는 _ * 로 이루어진 지뢰판과 이웃한 지뢰의 갯수와 * 로 이루어진 지뢰판이 출력된다 (m x n)