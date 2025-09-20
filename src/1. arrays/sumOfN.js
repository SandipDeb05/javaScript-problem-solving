const arr1 = [1, 2, 3, 4, 5, 7, 8, 9, 10];
function findMissingNumber(arr = [], N) {
  const sumOfN = (N * (N + 1)) / 2;
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum = sum + arr[i];
  }
  if (sumOfN - sum === 0) return null;
  return sumOfN - sum;
}
console.log(findMissingNumber(arr1, 10));

const arr2 = [1, 2, 3, 4, 5, 6, 5, 7, 8, 9, 10];
function findDuplicateNumber(arr, N) {
  const sumOFN = (N * (N + 1)) / 2;
  let sumOfArr = 0;
  for (let i = 0; i < arr.length; i++) {
    sumOfArr = sumOfArr + arr[i];
  }
  return sumOfArr - sumOFN;
}
console.log(findDuplicateNumber(arr2, 10));
