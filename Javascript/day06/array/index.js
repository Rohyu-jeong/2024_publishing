// 참조 : array
// Array = Array() or []

// const fruits = ["apple", "banana", "orange", "kiwi"]

// 인덱스
// fruits[0] // apple
// fruits[1] // banana

// 추가 및 갱신
// fruits.push("grape")
// fruits[0] = "mango"

// 삭제
// fruits.pop() // 맨 뒤에 삭제
// delete fruits[1] // banana 삭제

// 가공하는 기능
// 1. 변형 - push, pop, reverse, shift[맨 앞에 자르기], sort
// 2. 접근자 - indexof[몇번째], slice[자르고 새로운 배열로 주기]
// 3. 반복[(v) => {v}] - forEach, map

// const num = [3, 7, 2, 91, 309, 23, 124]
// const fruits = ["apple", "banana", "orange", "kiwi"]

// 요소 바꾸기
// const newArr = num.map((v) => v + 10)

// const newArr1 = num.map((v) => v + 100)

// const newArr2 = num.map((v) =>  v ** 2)

// const newArr3 = num.map((v) => v % 2 == 1 ? v ** 2 : v + 100)

// const newArr4 = fruits.map((v) => v.includes('a') ? v.toUpperCase() : "icecream")

// console.log(newArr4)

// filter
// const num = [3, 7, 2, 91, 309, 23, 124]
// const fruits = ["apple", "banana", "orange", "kiwi", "mango", "durian", "strawberry", "melon", "watermelon"]

// const numArr = num.filter((v) => v > 10)

// const numArr1 = num.filter((v) => v % 2 == 0)

// const fruArr = fruits.filter ((v) => v.length >= 6)

// 체이닝
// const fruArr1 = fruits.filter((v) => !(v.includes("i"))).map((v) => v.length)

// console.log(fruArr1)


// every && some
const arr3 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

const every1 = arr3.every((v) => v > 0)

console.log(`every1:${every1}`)

const some1 = arr3.some((v) => v >= 10)

console.log(`some1:${some1}`)


