// 1번 문제. 유저에게 밑변과 높이를 입력을 받고 정삼각형의 넓이 나타내기
const b = window.prompt("밑변")
const h = window.prompt("높이")

const div1 = document.createElement("div")
div1.innerText = `정삼각형의 넓이 : ${Number(b) * Number(h) * 0.5}`

document.body.appendChild(div1)

// 2번 문제. 한국 돈 원을 입력하면 엔화로 바꿔주기
const w = window.prompt("원화 입력")

const div2 = document.createElement("div")
div2.innerText = `엔화 : ${Number(w) * 0.114}엔`

document.body.appendChild(div2)