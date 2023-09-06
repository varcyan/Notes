const arr = [24,35,5,1,6,6,2]
sort(arr)

// 插入排序
function sort (arr) {
  let sortedIndex = 0
  let minIndex
  while(sortedIndex < arr.length) {
    minIndex = sortedIndex
    for (let i = sortedIndex; i < arr.length; i++) {
      if (arr[minIndex] > arr[i]) minIndex = i
    }
    const temp = arr[sortedIndex]
    arr[sortedIndex] = arr[minIndex]
    arr[minIndex] = temp
    sortedIndex++
  }
}