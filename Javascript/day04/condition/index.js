// if 조건문
// if (조건식)
// else

// const num = Number(window.prompt("나이"))
// if (age > 19) {
//     console.log("성인이네요")
// } else {
//     console.log("미성년자이네요")
// }
// console.log("프로그램 끝")


// const num1 = Number(window.prompt("첫 번째 숫자"))
// const num2 = Number(window.prompt("두 번째 숫자"))

// if (num1 > num2) {
//     console.log(num1)
// } else {
//     console.log(num2)
// }


// const age = 15;
// if(age > 19) {
//     console.log("성인")
// } else if (19 >= age && age >= 16) {
//     console.log("고딩")
// } else if (age >= 16 && age > 13) {
//     console.log("중딩")
// } else {
//     console.log("초딩")
// }


// const num = Number(window.prompt("정수 입력"))

// if (num > 0) {
//     console.log("양수")
// } else if (num === 0) {
//     console.log("0")
// } else {
//     console.log("음수")
// }


// const math = Number(window.prompt("수학 점수"))

// if (math >= 90) {
//     console.log("A")
// } else if (math >= 80) {
//     console.log("B")
// } else if (math >= 70) {
//     console.log("C")
// } else {
//     console.log("D")
// }


// num % 2 === 1 홀수
// num % 2 === 0 짝수
// const num = Number(window.prompt("숫자 입력"))

// const isPositive = num > 0
// const isNegative = num < 0
// const isOdd = num % 2 === 1
// const isEven = num % 2 === 0

// if (isPositive) {
//     if (isOdd) {
//         console.log("양의 홀수")
//     } else {
//         console.log("양의 짝수")
//     }
// } else if (isNegative) {
//     if (num % 2 === -1) {
//         console.log("음의 홀수")
//     } else {
//         console.log("음의 짝수")
//     }
// } else {
//     console.log("0")
// }


// const age = 10
// if (age > 5) {
//     if (age > 13) {
//         console.log("청소년")
//     } else {
//         console.log("유소년")
//     }
// }


// switch
const season = "봄"

switch (season) {
    case '봄': {
        console.log("날이 좋아요")
        break
    }
    case '여름':
        console.log("날이 더워요")
        break
    case '가을':
        console.log("날이 쌀쌀해요")
        break
    case '겨울':
        console.log("날이 추워요")
        break
}