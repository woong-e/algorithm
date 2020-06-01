[LEVEL1][연습문제]

## 문자열 내림차순으로 배치하기


#### 문제 설명
문자열 s에 나타나는 문자를 큰것부터 작은 순으로 정렬해 새로운 문자열을 리턴하는 함수, solution을 완성해주세요. <br />
s는 영문 대소문자로만 구성되어 있으며, 대문자는 소문자보다 작은 것으로 간주합니다.

#### 제한 조건
- str은 길이 1 이상인 문자열입니다.

#### 입출력 예
<table>
<tr>
<th>s</th>
<td>return</td>
</tr>
<tr>
<td>"Zbcdefg"</td>
<td>"gfedcbZ"</td>
</tr>
</table>

<br><br><br>

## 1) 이해
- s는 대소문자로만 구성
- 대문자는 소문자보다 작다
 
## 2) 계획
- 문자열을 split('') 으로 분리
- sort()로 정렬
- reverse()로 내림차순
- join('')으로 배열을 합침

## 3) 실행
```javascript
function solution(s) {
  //
  return s.split('').sort().reverse().join('');
}
```

테스트 코드
```javascript
test('내림차순으로 배치하기', () => {
  expect(solution('Zbcdefg')).toBe('gfedcbZ');
});

```

## 4) 회고
