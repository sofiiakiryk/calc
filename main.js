function checkOperators(inputString) {
  const pattern = /(\d[+\-*/])|([+\-*/]\d)|([+\-*/]{2,})/g;
  return !pattern.test(inputString);
}
const testString2 = "1+-2";
console.log(checkOperators(testString2));
