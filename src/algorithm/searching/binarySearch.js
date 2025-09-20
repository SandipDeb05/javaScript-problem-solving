const arr = [1, 4, 10, 12, 15, 22, 34, 64];
const target = 220;

function binarySearch(arr, target) {
  let i = 0;
  let j = arr.length - 1;

  while (i <= j) {
    let middle = Math.floor((i + j) / 2);
    if (arr[middle] === target) return middle;
    if (arr[middle] > target) j = middle - 1;
    if (arr[middle] < target) i = middle + 1;
  }
  return -1;
}

console.log(binarySearch(arr, target));

// o(log n)