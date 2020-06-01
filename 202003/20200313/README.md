[LEVEL1][연습문제]

## 문자열 다루기 기본

#### 문제 설명
문자열 s의 길이가 4 혹은 6이고, 숫자로만 구성돼있는지 확인해주는 함수, solution을 완성하세요. <br>
예를 들어 s가 a234이면 False를 리턴하고 1234라면 True를 리턴하면 됩니다.

#### 제한 조건
- s는 길이 1 이상, 길이 8 이하인 문자열입니다.

#### 입출력 예
<table>
<tr>
<th>s</th>
<td>return</td>
</tr>
<tr>
<td>"a234"</td>
<td>false</td>
</tr>
<tr>
<td>'1234'</td>
<td>true</td>
</tr>
</table>

<br><br><br>

## 1) 이해
- 문자열의 길이는 4 또는 6이다
- 인수의 값이 숫자로 구성 돼어있는지 확인
- 문자가 들어있음 false 반환
 
## 2) 계획
- s의 길이가 4 또는 6인지 확인
- inNaN 함수를 사용해서 숫자인지 확인

## 3) 실행
```javascript
function solution(s) {
  return s && (s.length === 4 || s.length === 6) && /^[0-9]+$/.test(s);
  // return s ? (s.length === 4 || s.length === 6) && Number.isNaN(s) : false;
}

console.log(solution('1111'));
console.log(solution('a111'));
console.log(solution(null));
console.log(solution('111111'));
console.log(solution(undefined));
console.log(solution(NaN));
```

## 4) 회고
inNaN, 지수형식, 정규식 알아야겠다....