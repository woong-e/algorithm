[LEVEL1][연습문제]

https://programmers.co.kr/learn/courses/30/lessons/12901

## 가운데 글자 가져오기

#### 문제 설명
단어 s의 가운데 글자를 반환하는 함수, solution을 만들어 보세요. <br>
단어의 길이가 짝수라면 가운데 두글자를 반환하면 됩니다.

#### 제한 조건
- s는 길이가 1 이상, 100이하인 스트링입니다.

#### 입출력 예
<table>
<tr>
<th>s</th>
<td>return</td>
</tr>
<tr>
<td>abcde</td>
<td>"c"</td>
</tr>
<tr>
<td>qwer</td>
<td>"we"</td>
</tr>
</table>

<br><br><br>

## 1) 이해
- 길이가 1 이상 100이하다.
- 홀수면 가운데 1글자 반환
- 짝수면 가운데 2글자 반환
 
## 2) 계획
- 인수의 길이를 구한다
- 문자열 자르기 함수는 slice를 사용
- 짝수인 경우 길이 / 2 - 1, 길이 / 2 + 1 
- 홀수인 경우 길이 / 2 나머지가 생겨 Math.floor 함수 사용

## 3) 실행
```javascript
function solution(s) {
  //
  const length = s.length;
  const division = length / 2;

  if (length % 2 === 0) {
    return s.slice(division - 1, division + 1);
  }

  return s.slice(Math.floor(division), Math.floor(division) + 1);
}

console.log(solution('asdf'));      // sd
console.log(solution('qewrtyuio')); // t
```

## 4) 회고
Math 객체를 잘 알아둬야겠다..
slice 말고 substring()도 사용해봐야지..