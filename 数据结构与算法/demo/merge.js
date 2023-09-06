function quickSort(arr) {
  if (arr.length <= 1) {
      return arr;
  }
  var baseIndex = Math.floor((arr.length - 1) / 2);
  var base = arr.splice(baseIndex, 1)[0];
  var left = [],
      right = [];
  while (arr.length) {
      if (arr[0] < base) {
          left.push(arr.shift());
      } else {
          right.push(arr.shift());
      }
  }
  return quickSort(left).concat([base], quickSort(right));
}