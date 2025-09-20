const str = "abc def";

function findLargestWord(str = "") {
  const strArr = str.split(" ");
  let largestWordIndex = 0;
  for (let i = 1; i < strArr.length; i++) {
    if (strArr[i].length > strArr[largestWordIndex].length) {
      largestWordIndex = i;
    }
  }
  return strArr[largestWordIndex];
}

console.log(findLargestWord(str));
