// 데이터 타입: 기본 + 참조
// 기본: String[문자], Number[숫자]

// const a = window.prompt("숫자 입력:")
// 문자 -> 숫자 타입 바꾸기
// 1. Number
// const b = Number(a)
// console.log(b + 10)

// 2. parseInt(), parseFloat() - 문자타입만 넣었을 때 유효
// const c = parseInt(a)
// console.log(c + 20)


const num1 = window.prompt("첫 번째 숫자")
const num2 = window.prompt("두 번째 숫자")

const p = Number(num1) + Number(num2)
const m = Number(num1) - Number(num2)
const c = Number(num1) * Number(num2)

const div1 = document.createElement("div")

div1.innerText = `첫 번째 숫자는 ${num1}, 두번째 숫자는 ${num2}, 연산은 ${p}, ${m}, ${c}입니다.`


const age = window.prompt("나이")
const year = 2024 - Number(age)

const div2 = document.createElement("div")

div2.innerText = `나이가 ${age}살이라면, 출생년도는 ${year}년입니다.`


const l = window.prompt("한 변의 길이")

const a = Number(l) * Number(l)

const div3 = document.createElement("div")

div3.innerText = `한 변의 길이가 ${l}라면, 넓이는 ${a}입니다.`


// const s = window.prompt("0~10000사이 초 입력")

// const min = Number(s) / 60
// const sec = Number(s) % 60

// const div4 = document.createElement("div")

// div4.innerText = `${min}분 ${sec}초입니다.`

document.body.appendChild(div1)
document.body.appendChild(div2)
document.body.appendChild(div3)
// document.body.appendChild(div4)