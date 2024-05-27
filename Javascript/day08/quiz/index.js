// 1.
const makeK = (n, k) => Array(n).fill(1).map((v, i) => i + 1).filter((v) => v % k == 0)
const makeK1 = (n, k) => Array(parseInt(n/k)).fill(1).map((v,i)=> k*(i+1))
console.log(makeK1(10, 3))
console.log(makeK1(15, 5))

// 2.
const makeArr = (strArr) => strArr.filter((v) => !v.includes("ad"))

const strArr = ["and", "notad", "abcd"]
console.log(makeArr(strArr))