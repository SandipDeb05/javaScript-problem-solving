const arr = [3, 5, 11, 64, 13, 53, 22, 45];
const target = 11;

function linearSearch(arr, target) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === target) return i;
  }
  return -1;
}

console.log(linearSearch(arr, target));
// O(N)
