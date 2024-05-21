// 단축평가[short_circuit]

// true || "Dog" // true
// false || "Dog" // "Dog"
// true && "Dog" // "Dog"
// false && "Dog" // "Dog"

const userName = prompt("유저 입력")
const name = userName || "Guest"
console.log(`${name} 환영합니다`)

const isLogIn = true // 로그인 로직
isLogIn && console.log("로그인 성공")