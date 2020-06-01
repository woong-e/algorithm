[LEVEL1][연습문제]

## 시저 암호


#### 문제 설명
어떤 문장의 각 알파벳을 일정한 거리만큼 밀어서 다른 알파벳으로 바꾸는 암호화 방식을 시저 암호라고 합니다. <br/>
예를 들어 AB는 1만큼 밀면 BC가 되고, 3만큼 밀면 DE가 됩니다. z는 1만큼 밀면 a가 됩니다. <br/>
문자열 s와 거리 n을 입력받아 s를 n만큼 민 암호문을 만드는 함수, solution을 완성해 보세요.

#### 제한 조건
- 공백은 아무리 밀어도 공백입니다.
- s는 알파벳 소문자, 대문자, 공백으로만 이루어져 있습니다.
- s의 길이는 8000이하입니다.
- n은 1 이상, 25이하인 자연수입니다.

#### 입출력 예
<table>
<tr>
<th>s</th>
<th>n</th>
<td>return</td>
</tr>
<tr>
<td>"AB"</td>
<td>1</td>
<td>"BC"</td>
</tr>
<tr>
<td>"Z"</td>
<td>1</td>
<td>"a"</td>
</tr>
<tr>
<td>"a B C"</td>
<td>4</td>
<td>"e F d"</td>
</tr>
</table>

<br><br><br>

## 1) 이해
- n의 숫자만큼 이동한다
- z에서 1만큼 이동은 a로
- 공백은 그대로 공백
 
## 2) 계획
- a~z까지의 문자열을 선언
- split('')으로 자른다
- 자른 문자열을 비교하여 n만큼 이동후 리턴

## 3) 실행
```javascript
function solution(s, n) {
  //
  let answer = '';
  s.split('').map((item, index) => {
    const ascilCode = item.charCodeAt(0);
    let plus = ascilCode + n;

    if (ascilCode >= 65 && ascilCode <= 90) {
      if (plus > 90) plus -= 26;
      return answer += String.fromCharCode(plus);
    }

    if (ascilCode >= 97 && ascilCode <= 122) {
      if(plus > 122) plus -= 26;
      return answer += String.fromCharCode(plus);
    }

    if (item === ' ') return answer += ' ' ;
  });

  return answer;
}
```

테스트 코드
```javascript
test('시저암호 TEST 1', () => {
  expect(solution('AB', 1)).toBe('BC');
});

test('시저암호 TEST 2', () => {
  expect(solution('z', 1)).toBe('a');
});

test('시저암호 TEST 3', () => {
  expect(solution('a B z', 4)).toBe('e F d');
});
```

## 4) 회고
- 계획이 수포로 돌아갔다..
- 알파벳 관련 알고리즘 문제는 아스키코드를 참고하면 편하다
- 대문자 65~90
- 소문자 97~122