[LEVEL1][연습문제]

## 핸드폰 번호 가리기

#### 문제 설명
프로그래머스 모바일은 개인정보 보호를 위해 고지서를 보낼 때 고객들의 전화번호의 일부를 가립니다. <br>
전화번호가 문자열 phone_number로 주어졌을 때, 전화번호의 뒷 4자리를 제외한 나머지 숫자를 전부 *으로 가린 문자열을 리턴하는 함수, solution을 완성해주세요.

#### 제한 조건
- s는 길이 4 이상, 20이하인 문자열입니다.

#### 입출력 예
<table>
<tr>
<th>phone_number</th>
<td>return</td>
</tr>
<tr>
<td>"01033334444"</td>
<td>"*******4444"</td>
</tr>
<tr>
<td>"027778888"</td>
<td>"*****8888"</td>
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
function solution(phone_number) {
  //
  const length = phone_number.length;
  const backNumber = phone_number.slice(length - 4, length);
  let star = '';

  for (let i = 0; i < length-4; i++) {
    star += '*';
  }

  return `${star}${backNumber}`;
}

function solution2(phone_number) {
  //
  const length = phone_number.length;
  const star =  '*'.repeat(length - 4);
  const backNumber = phone_number.slice(-4);

  return `${star}${backNumber}`;
}

// 테스트 출력용
console.log(solution('01033334444'));
console.log(solution('01033334444'));
console.log(solution2('01033334444'));
console.log(solution2('027778888'));
```

## 4) 회고
정규식이면 한줄로 가능 ... <br>
repeat() 메소드를 알면 불필요한 for 문을 사용 안 해도 된다..