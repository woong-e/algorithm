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

console.log(solution('01033334444'));
console.log(solution('01033334444'));
console.log(solution2('01033334444'));
console.log(solution2('027778888'));