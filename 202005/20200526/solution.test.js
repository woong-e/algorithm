const solution = require('./solution');

test('내림차순으로 배치하기', () => {
  expect(solution('Zbcdefg')).toBe('gfedcbZ');
});
