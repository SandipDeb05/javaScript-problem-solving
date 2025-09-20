const arr = [4, 3, 2, 1, 6];
function reverse(arr) {
  let i = 0;
  let j = arr.length - 1;
  while (i < j) {
    let temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
    i++;
    j--;
  }
  return arr;
}
console.log(reverse(arr));

const num = -231001000;
function reverseNum(num) {
  let res = 0;
  let count = 0;
  let flag = false;
  let isNegative = false;
  if (num < 0) {
    num = Math.abs(num);
    isNegative = true;
  }
  while (num > 0) {
    const lastValue = num % 10;
    if (lastValue === 0 && flag === false) count++;
    if (lastValue !== 0) flag = true;
    res = lastValue + res * 10;
    num = Math.floor(num / 10);
  }

  let temp = "";
  while (count > 0) {
    temp += "0";
    count--;
  }
  res = temp.concat(res.toString());
  if (isNegative) return res.concat("-");
  return res;
}
console.log(reverseNum(num));
