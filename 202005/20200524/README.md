[LEVEL1][연습문제]

## 평균 구하기

#### 문제 설명
정수를 담고 있는 배열 arr의 평균값을 return하는 함수, solution을 완성해보세요.

#### 제한 조건
- arr은 길이 1 이상, 100 이하인 배열입니다.
- arr의 원소는 -10,000 이상 10,000 이하인 정수입니다.

#### 입출력 예
<table>
<tr>
<th>arr</th>
<td>return</td>
</tr>
<tr>
<td>[1,2,3,4]</td>
<td>2.5</td>
</tr>
<tr>
<td>[5,5]</td>
<td>5</td>
</tr>
</table>

<br><br><br>

## 1) 이해
- 배열의 길이는 1 이상 100 이하인 배열이다.
- 원소의 길이는 -10,000 이상 100,000 이하인 정수이다.
 
## 2) 계획
- 배열의 길이를 구하고 원소의 합을 구한 후 길이맡큼 나누기

## 3) 실행
```javascript
function solution(array) {
  //
  const length = array.length;
  const sum = array.reduce((a,b) => a + b);
  return sum / length;
}
```

테스트 코드
```javascript
test('평균 구하기', () => {
  expect(solution([1,2,3,4])).toBe(2.5);
});

test('평균 구하기', () => {
  expect(solution([5,5])).toBe(5);
});
```

## 4) 회고
