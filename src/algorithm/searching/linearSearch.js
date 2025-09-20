const arr = [10, 12, 34, 4, 64, 1, 22, 15];
const target = 41;

function findIndexOf(arr, target) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === target) return i;
  }
  return -1;
}

console.log(findIndexOf(arr, target));

// o(n)
