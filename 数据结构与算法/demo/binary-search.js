const arr = [1,2,3,4,5,6,7,8,9,10]
const n = 4

// console.log('🚀 ~ binarySearch(arr, n):', binarySearch(arr, n))
console.log('🚀 ~ binarySearch1(arr, n):', binarySearch1(arr, n))


// 二分查找
function binarySearch (arr, val) {
  let left = 0
  let right = arr.length - 1
  
  while (left <= right) {
    const middle = Math.floor(left + (right - left) / 2)

    console.log('🚀 ~ middle:', middle)
    
    if (arr[middle] === val) return middle
    if (val > arr[middle]) {
      left = middle + 1
    } else {
      right = middle - 1
    }
  }
  return -1
}

// 二分查找 递归
function binarySearch1 (arr, val) {  

  console.log('🚀 ~ arr:', arr)

  let left = 0
  let right = arr.length - 1
  if (left > right) return -1
  
  const middle = Math.floor(left + (right - left) / 2)
  
  if (arr[middle] === val) return middle
  if (arr[middle] < val) {
    left = middle + 1
  } else {
    right = middle - 1
  }
  
  
  return binarySearch1(arr.slice(left, right + 1) , val)
}

// 二分查找 变体 -> 查找最后一个给定值
function binarySearch2 (arr, val) {
  let left = 0
  let right = arr.length - 1
  
  while (left <= right) {
    const middle = Math.floor(left + (right - left) / 2)
    if (arr[middle] > val) {
      right = middle - 1
    } else if (arr[middle] < val) {
      left = middle + 1
    } else {
      if (middle === arr.length - 1 || arr[middle + 1] !== val) {
        return middle
      } else {
        left = middle + 1
      }
    }
  }
  return -1
}

// 二分查找 变体 -> 查找第一个大于给定值的元素
function binarySearch3 (arr, val) {
  let left = 0
  let right = arr.length - 1
  
  while (left <= right) {
    const middle = Math.floor(left + (right - left) / 2)
    if (arr[middle] >= val) {
      if (middle === 0 || arr[middle - 1] < val) return middle
      right = middle - 1
    } else {
      left = middle + 1
    }
  }
  return -1
}

// 二分查找 变体 -> 查找最后一个小于等于给定值的元素
function binarySearch4 (arr, val) {
  let left = 0
  let right = arr.length - 1
  
  while(left <= right) {
    const middle = Math.floor(left + (right - left)/ 2)
    
    if (arr[middle] <= val) {
      if (middle === arr.length - 1 || arr[middle + 1] > val) return middle
      left = middle + 1
    } else {
      right = middle - 1
    }
  }
}