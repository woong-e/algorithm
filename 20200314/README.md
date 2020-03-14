[LEVEL1][연습문제]

## 서울에서 김서방 찾기

#### 문제 설명
String형 배열 seoul의 element중 Kim의 위치 x를 찾아, 김서방은 x에 있다는 String을 반환하는 함수, solution을 완성하세요. <br>
seoul에 Kim은 오직 한 번만 나타나며 잘못된 값이 입력되는 경우는 없습니다.

#### 제한 조건
- seoul은 길이 1 이상, 1000 이하인 배열입니다.
- seoul의 원소는 길이 1 이상, 20 이하인 문자열입니다.
- Kim은 반드시 seoul 안에 포함되어 있습니다.

#### 입출력 예
<table>
<tr>
<th>seoul</th>
<td>return</td>
</tr>
<tr>
<td>["Jane", "Kim"]</td>
<td>"김서방은 1에 있다"</td>
</tr>
</table>

<br><br><br>

## 1) 이해
- 배열의 길이는 1 이상 1000 이하이다.
- 원소의 길이는 1 이상 20 이하이다.
- seoul 배열 안에는 반드시 Kim이 있다
 
## 2) 계획
- map 함수를 사용해 원소 비교후 index 반환

## 3) 실행
```javascript
function solution(seoul) {
  let answer = '';
  seoul.map((item, index) => {
    if (item === 'Kim') {
      answer = `김서방은 ${index}에 있다`;
    }
  });
  return answer;
}
```

## 4) 회고
인터넷 창으로 바로 푼 문제이다. <br> 
indexOf도 있었었다...
