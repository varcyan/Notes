// 台阶n

// 递归要干:
// 如果有1个台阶就有一种方案继续走
// 如果有2个台阶就有2中方案走
// 递归终止: 剩余0个台阶

let result = 0
sum(2)
function sum(num) {
  if (num <= 0) {
    console.log(result)
    return
  }
  if (num >= 2) {
    result += 2
  } else if (num >= 1) {
    result += 1
  }
  sum(num - 1)
}