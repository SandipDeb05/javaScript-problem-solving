const arr = [4, 42, 34, 12, 46, 2, 114, 53, 25, 74, 34];

function bubbleSort(arr) {
  for (let i = 0; i < arr.length - 1; i++) {
    let isSwapped = false;
    for (let j = 0; j < arr.length - 1 - i; j++) {
      if (arr[j] > arr[j + 1]) {
        let temp = arr[j + 1];
        arr[j + 1] = arr[j];
        arr[j] = temp;
        isSwapped = true;
      }
    }
    if (!isSwapped) break;
  }
  return arr;
}

console.log(bubbleSort(arr));
// O(n^2)

// [4,2,1,3]->[2,4,1,3]->[2,1,4,3]->[2,1,3,4]
// [2,1,3,4]->[1,2,3,4]->[1,2,3,4]
