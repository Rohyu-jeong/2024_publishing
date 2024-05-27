// 함수 만들기

// const result1 = (my_string, n) => [...my_string].map((v) => v.repeat(n)).join("")

// console.log(result1("hello", 3))

// const result2 = (myString) => [...myString].map((v) => v == 'a' ? 'A' : v.toLowerCase()).join("")

// console.log(result2("abstract algebra"))

const result = Array(10).fill(0).map((v, i) => i % 2? -(i + 1) : i + 1).reduce((a, c) => a + c)

console.log(result)