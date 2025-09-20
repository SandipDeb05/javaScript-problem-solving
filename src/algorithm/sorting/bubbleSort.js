const arr = [2, 41, 5, 13, 42, 12, 1, 53, 21, 44, 5];
// const arr = [1, 2, 3, 4, 5];

function bubbleSort(arr) {
  let isSwapped = false;
  for (let i = 0; i < arr.length - 1; i++) {
    for (let j = 0; j < arr.length - 1 - i; j++) {
      if (arr[j] > arr[j + 1]) {
        let temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
        isSwapped = true;
      }
    }
    if (!isSwapped) break;
  }
  return arr;
}

// console.log(bubbleSort(arr));

function bubbleSortWhile(arr) {
  let i = 0;
  let isSwapped = false;
  while (i < arr.length - 1) {
    let j = 0;
    while (j < arr.length - 1 - i) {
      if (arr[j] > arr[j + 1]) {
        let temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
        isSwapped = true;
      }
      j++;
    }
    if (!isSwapped) break;
    i++;
  }
  return arr;
}

console.log(bubbleSortWhile(arr));
