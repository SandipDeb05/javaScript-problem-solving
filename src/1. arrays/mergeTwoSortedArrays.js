const arr1 = [1, 12, 13, 34, 55];
const arr2 = [34, 15, 26, 37, 78];

function mergeTwoSortedArrays(arr1, arr2) {
  const res = [];
  let i = 0;
  let j = 0;
  while (i < arr1.length && j < arr2.length) {
    if (arr1[i] < arr2[j]) {
      res.push(arr1[i]);
      i++;
    } else if (arr1[i] > arr2[j]) {
      res.push(arr2[j]);
      j++;
    } else {
      res.push(arr1[i]);
      res.push(arr1[j]);
      i++;
      j++;
    }
  }
  while (i < arr1.length) {
    res.push(arr1[i]);
    i++;
  }
  while (j < arr2.length) {
    res.push(arr2[j]);
    j++;
  }
  return res;
}

console.log(mergeTwoSortedArrays(arr1, arr2));
