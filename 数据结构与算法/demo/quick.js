const arr = [1, 200, 4,1000,22232323,44,112,12, 3, 9, 5, 6, 7] // n
quickSort(arr)
function quickSort (arr) {
  if (arr.length <= 1) return arr
  
  const middleValue = arr.pop()
  const left = []
  const right = []
  
  while(arr.length) {
    if (arr[0] > middleValue) {
      right.push(arr.shift())
    } else {
      left.push(arr.shift())
    }
  }
  
  return quickSort(left).concat(middleValue, quickSort(right))
}