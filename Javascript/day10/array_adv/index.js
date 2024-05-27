// type casting: Number, String, Boolean

// String -> Array

const coffee = "americano";

// 1. split(""), Array.from(), ...[전개 구문]
const a1 = coffee.split("");
const a2 = Array.from(coffee);
const a3 = [...coffee];

const a4 = [...coffee].filter((v) => ![..."aieou"].some((v1) => v1 == v))

const a5 = [...coffee].map((v) => v == 'e'  ? v.toUpperCase() : v)

// Array -> String
const fruits = ["apple", "banana", "orange"];

// join('')
const b1 = fruits.join("") // applebananaorange
const b2 = fruits.toString() // apple,banana,orange

const b3 = fruits.map((v) => [...v].filter((v1) => v1 != "a").join(""))

const vowels = [..."aieouAIEOU"]

const b4 = [...coffee].filter((v) => vowels.some((v1) => v1 == v))

// 모든 철자 풀어주기 // flat()
const b5 = fruits.map((v) => [...v]).flat()
// const b5 = [...fruits.join("")]

console.log(b5)

// reduce[누적시키다] acc[누적된 값], curr[현재]
[1, 3, 5, 7, 9].reduce((a, c) => {
    console.log(`a:${a} c:${c}`)
    return a + c
})

Array(10).fill(0).map((v, i) => i + 1).reduce((a, c) => a + c)

const result = Array(10).fill(0).map((v, i) => i + 1).reduce((a, c) => c % 2 == 0 ? a - c : a + c)