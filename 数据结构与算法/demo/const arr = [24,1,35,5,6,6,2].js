const arr = [24,1,35,5,6,6,2]
sort(arr)
function sort (arr) {
  let min = arr[0]
  for (let i = 1; i < arr.length; i++) {
    if (min > arr[i]) min = arr[i]
  }
  console.log(min);
}