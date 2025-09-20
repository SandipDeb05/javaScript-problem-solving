const arr = [1, 2, 3, 4, 5];
const target = 4;

// O(n^2)
function twoSum(arr, target) {
  for (let i = 0; i < arr.length; i++) {
    let first = arr[i];
    for (let j = i + 1; j < arr.length; j++) {
      let second = arr[j];
      if (first + second === target) {
        return [i, j];
      }
    }
  }
  return [-1, -1];
}
console.log(twoSum(arr, target));

// O(n)
function twoSumOptimize(arr, target) {
  const map = new Map();
  for (let i = 0; i < arr.length; i++) {
    const value = target - arr[i];
    if (map.has(value)) return [map.get(value), i];
    map.set(arr[i], i);
  }
  return [-1, -1];
}
console.log(twoSumOptimize(arr, target));
