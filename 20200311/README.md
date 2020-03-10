[LEVEL1][연습문제]

https://programmers.co.kr/learn/courses/30/lessons/12901

## 2016년

#### 문제 설명
2016년 1월 1일은 금요일입니다. <br>
2016년 a월 b일은 무슨 요일일까요?  <br>
두 수 a ,b를 입력받아 2016년 a월 b일이 무슨 요일인지 리턴하는 함수, solution을 완성하세요. <br> 
요일의 이름은 일요일부터 토요일까지 각각 SUN,MON,TUE,WED,THU,FRI,SAT 입니다.  <br>
예를 들어 a=5, b=24라면 5월 24일은 화요일이므로 문자열 TUE를 반환하세요.

#### 제한 조건
- 2016년은 윤년입니다.
- 2016년 a월 b일은 실제로 있는 날입니다. (13월 26일이나 2월 45일같은 날짜는 주어지지 않습니다)

#### 입출력 예
<table>
<tr>
<th>a</th>
<th>b</th>
<td>return</td>
</tr>
<tr>
<td>5</td>
<td>24</td>
<td>"TUE"</td>
</tr>
</table>

<br><br><br>

## 1) 이해
- a=월, b=일 으로 값이 들어옴
- 해당 월,일의 요일 반환
 
## 2) 계획
- Date함수 사용
- Object로 반환된 값을 String으로 변환
- 반환된 값의 맨 앞이 요일이므로 앞 3자리를 자른다.
- 자른 값은 대소문자가 섞여 있으므로 대문자로 바꿔 반환.

## 3) 실행
```javascript
function getDayName(a, b) {
    const date = new Date(`2016-${a}-${b}`);
    return date.toString().slice(0,3).toUpperCase()
}

console.log(getDayName(2, 14)); // TUE
```

## 4) 회고
slice 함수는 Array만 사용 가능한 줄알았는데 Object에도 사용가능하다. <br>
toUpperCase, toLowerCase 함수를 사용하여 대문자, 소문자로 변경할 수 있는 것을 처음 알았다....