function solution(array) {
  //
  const length = array.length;
  const sum = array.reduce((a,b) => a + b);
  return sum / length;
}

module.exports = solution;