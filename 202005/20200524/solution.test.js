const solution = require('./solution');

test('평균 구하기', () => {
  expect(solution([1,2,3,4])).toBe(2.5);
});

test('평균 구하기', () => {
  expect(solution([5,5])).toBe(5);
});