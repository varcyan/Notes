  // const arr = [1,3,5,6,9,10]
  const arr = [1,2,3]

  let n = arr.length
  calc(arr)
  function calc (arr) {
    let res = 0
    change(arr, 0)
  }

  function change (arr, n) {
    console.log(n)
    if (n === arr.length) return
    for (let i=n; i < arr.length - 1; i++) {
      const cur = arr[i]
      arr[i] = arr[i+1]
      arr[i+1] = cur
    }
    change(arr, 0)
  }
