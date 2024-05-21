// 기본 타입
// 1. 문자
// const favorite1 = window.prompt("당신이 좋아하는 커피는")
// const favorite2 = window.prompt("당신이 좋아하는 빵은")

// console.log("당신이 좋아하는 커피는 " + favorite1 + "이고 당신이 좋아하는 빵은 " + favorite2 + "이군요")
// console.log(`당신이 좋아하는 커피는 ${favorite1}이고 당신이 좋아하는 빵은 ${favorite2}이군요`)


// const a = 'coffee'
// const b = "bread"
// const c = `latte` // backtick

// const name = window.prompt("이름")
// const age = window.prompt("나이")
// const color = window.prompt("색")

// console.log(`제 이름은 [${name}], 나이는 [${age}]살이고, 좋아하는 색은 [${color}]입니다!`)

// const date = window.prompt("날짜")
// const plan = window.prompt("일정")

// console.log(`오늘은 ${date}, 계획하신 일정은 ${plan}입니다.`)

// const btnName = window.prompt("버튼 이름은")
// const btn = document.createElement("button")
// btn.innerText = `입력한 내용: [${btnName}]`

// document.body.appendChild(btn)



// 유저에게 세 번의 prompt로 헥사코드 색깔을 입력을 받고
// 버튼 3개를 만들고 (text: 헥사코드, bg: 헥사코드)
// 박스 하나 만들고 (w:100, h:100, bg: 선택된 버튼의 헥사코드, text: 입력된 헥사코드: [])

const color1 = window.prompt("첫 번째 색깔")
const color2 = window.prompt("두 번째 색깔")
const color3 = window.prompt("세 번째 색깔")

const button1 = document.createElement("button")
const button2 = document.createElement("button")
const button3 = document.createElement("button")

button1.style.backgroundColor = color1
button2.style.backgroundColor = color2
button3.style.backgroundColor = color3

button1.innerText = color1
button2.innerText = color2
button3.innerText = color3

const box = document.createElement("div")
box.style.width = "100px"
box.style.height = "100px"
box.innerText = "선택된 색상 없음"

button1.addEventListener('click', () => {
    box.style.backgroundColor = color1
    box.innerText = `입력된 헥사코드: [${color1}]`
})

button2.addEventListener('click', () => {
    box.style.backgroundColor = color2
    box.innerText = `입력된 헥사코드: [${color2}]`
})

button3.addEventListener('click', () => {
    box.style.backgroundColor = color3
    box.innerText = `입력된 헥사코드: [${color3}]`
})

document.body.appendChild(button1)
document.body.appendChild(button2)
document.body.appendChild(button3)

document.body.appendChild(box)

// #badc58
// #7ed6df
// #686de0