const solution = require('./solution');

test('시저암호 TEST 1', () => {
  expect(solution('AB', 1)).toBe('BC');
});

test('시저암호 TEST 2', () => {
  expect(solution('z', 1)).toBe('a');
});

test('시저암호 TEST 3', () => {
  expect(solution('a B z', 4)).toBe('e F d');
});
