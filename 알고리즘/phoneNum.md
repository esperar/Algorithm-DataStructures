# 전화번호부 만들기(생성 , 조회 , 삭제)

### 문제
- 회원 정보를 저장하는 전화번호를 만든다.
- 생성 조회 삭제 기능이 있다.
- Scanner로 입력받아 1 : 생성 2 : 조회 3 : 삭제 4 : 종료로 각 기능을 구현한 후 실행할 수 있도록 한다.

### 풀이

<br>

```java
package phoneproject;

import java.util.ArrayList;
import java.util.Scanner;

public class MyPhoneBook {
	
	static Scanner sc = new Scanner(System.in);
	static ArrayList<PhoneInfo> phoneBook = new ArrayList<>();

	public static void main(String[] args) {
		
		int input;
		while(true) {
			showMenu();
			System.out.print("입력 : ");
			input = sc.nextInt();
			sc.nextLine();
			switch(input) {
			case 1 :
				addNumber();
				break;
			case 2 :
				readNumber();
				break;
			case 3 :
				deleteNumber();
				break;
			case 4 :
				System.out.println("프로그램을 종료합니다.");
				return;
			default : 
				System.out.println("잘못 입력 하셨습니다.");
				break;
			}
		}
	}
	

	private static void showMenu() {
		System.out.println("[메뉴 선택]");
		System.out.println("1. 전화번호 입력");
		System.out.println("2. 전화번호 조회");
		System.out.println("3. 전화번호 삭제");
		System.out.println("4. 종료");
	}

	private static void addNumber() {
		
		PhoneInfo phoneinfo = null;
		
		String name;
		String number;
		String email;
		
		System.out.print("Name : ");
		name = sc.next();
		System.out.print("Number : ");
		number = sc.next();
		System.out.print("Email : ");
		email = sc.nextLine();
	
		
		if(email != null) {
			phoneinfo = new PhoneInfo(name , number , email);
		} else {
			phoneinfo = new PhoneInfo(name , number);
		}
			
			
		phoneBook.add(phoneinfo);
	}
	
	private static void readNumber() {
		int index;
		System.out.print("select index >> ");
		index = sc.nextInt();
		try {
			phoneBook.get(index).show();
			
		} catch(IndexOutOfBoundsException e) {
			System.out.println("값이 존재하지 않습니다.");
		}
	}
	
	private static void deleteNumber() {
		int index;
		System.out.print("delete index >> ");
		index = sc.nextInt();
		try {
			phoneBook.remove(index);
		} catch(IndexOutOfBoundsException e) {
			System.out.println("값이 존재하지 않습니다.");
		}
	}
	
}

```