// 基数排序
// const str = 'DaFBcAzbbb'
const str = 'DaFAbb'
const arr = str.split('')

// sort(str)
sortPointer(arr)
function sortPointer (arr) {
  let start = 0
  let end = arr.length-1
  
  while(start <= end) {
    if (!isLower(arr[end])) {
      end--
    }
    if (isLower(arr[start])) {
      start++
    }
    const temp = arr[start]
    arr[start] = arr[end]
    arr[end] = temp
  }
  console.log('🚀 ~ arr:', arr)
}

// 桶
function sort (str) {
  let str1 = ''
  let str2 = ''
  let str3 = ''
  for (let i = 0; i < str.length; i++) {
    if (isLower(str[i])) str1+= str[i] // 小写
    if (isNumber(str[i])) str2+= str[i] // 数字
    if (isUpper(str[i])) str3+= str[i] // 大写
  }
  return str1 + str2 + str3
}

function isUpper (str) {
  return str.charCodeAt() >= 65 && str.charCodeAt() <= 90
}
function isLower (str) {
  return str.charCodeAt() >= 97 && str.charCodeAt() <= 122
}
function isNumber (str) {
  return str.charCodeAt() >= 48 && str.charCodeAt() <= 57
}