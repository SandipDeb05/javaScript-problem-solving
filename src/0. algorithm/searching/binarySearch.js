const arr = [3, 5, 11, 13, 22, 45, 53, 64];
const target = 3;

function binarySearch(arr, target) {
  let start = 0;
  let end = arr.length - 1;
  while (start <= end) {
    let middle = Math.floor((start + end) / 2);
    if (arr[middle] === target) return middle;
    if (arr[middle] < target) start = middle + 1;
    if (arr[middle] > target) end = middle - 1;
  }
  return -1;
}

console.log(binarySearch(arr, target));
// O(logN)
// For binary search the array must be sorted
