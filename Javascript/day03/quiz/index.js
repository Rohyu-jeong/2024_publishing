// 1. 색상 버튼 3개 임의로 만들기
// 2. 파레트 상자 하나 만들기
// 3. - + 버튼 만들기

const button1 = document.createElement("button")
const button2 = document.createElement("button")
const button3 = document.createElement("button")
const color = document.createElement("span")

button1.innerText = "버튼1"
button2.innerText = "버튼2"
button3.innerText = "버튼3"

button1.style.backgroundColor = "red"
button2.style.backgroundColor = "blue"
button3.style.backgroundColor = "green"

const pallate = document.createElement("div")
pallate.style.width = "100px"
pallate.style.height = "100px"
color.innerHTML = "선택된 색상 없음"
pallate.appendChild(color)

const minus = document.createElement("button")
const plus = document.createElement("button")

minus.innerText = '-'
plus.innerText = '+'

button1.addEventListener("click", () => {
    pallate.style.backgroundColor = "red"
    pallate.innerText = `색상 : red`
})

button2.addEventListener("click", () => {
    pallate.style.backgroundColor = "blue"
    pallate.innerText = `색상 : blue`
})

button3.addEventListener("click", () => {
    pallate.style.backgroundColor = "green"
    pallate.innerText = `색상 : green`
})

minus.addEventListener("click", () => {
    const lenght = parseInt(pallate.style.width) - 1
    const isLength99 = length === 99
    pallate.style.width = isLength99 ? '100px' : `${length}px`
    pallate.style.height = isLength99 ? '100px' : `${length}px`
})

plus.addEventListener("click", () => {
    const lenght = parseInt(pallate.style.width) + 1
    pallate.style.width = `${lenght}px`
    pallate.style.height = `${lenght}px`
})

document.body.appendChild(pallate)
document.body.appendChild(button1)
document.body.appendChild(button2)
document.body.appendChild(button3)
document.body.appendChild(minus)
document.body.appendChild(plus)

