// 计数
const data = [2, 5, 3, 0, 2, 3, 0, 3]

countSort(data)
function countSort (data) {

  console.log('🚀 ~ data:', data)

  // 桶
  const min = Math.min(...data)
  const max = Math.max(...data)
  const m = new Map()
  for (let index = min; index <= max; index++) {
    m.set(index, 0)
  }
  
  
  // 计数
  for (let index = 0; index < data.length; index++) {
    m.set(data[index], m.get(data[index]) + 1)
  }
  
  // const c = [...m.values()]
  
  let oldCount = 0
  for (const [key, value] of m.entries()) {
    m.set(key, oldCount += value)
  }
  console.log('🚀 ~ m:', m)
  
  // for (let i = 0; i < c.length; i++) {
  //   if (typeof c[i+1] !== 'number') break
  //   c[i+1] = c[i] + c[i+1]
  // }
  // console.log('🚀 ~ c:', c)
  // console.log('🚀 ~ m:', m)
  
  // 计入
  const r = []
  
  for (let i = 0; i < data.length; i++) {
    r[m.get(data[i]) - 1] = data[i]
    m.set(data[i], m.get(data[i]) - 1)
  }
  console.log('🚀 ~ result:', r)

}
