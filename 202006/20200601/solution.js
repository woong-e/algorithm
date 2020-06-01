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

module.exports = solution;
