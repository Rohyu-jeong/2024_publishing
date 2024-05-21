const minus = document.createElement("button")
const plus = document.createElement("button")
const num = document.createElement("span")

minus.innerText = '-'
plus.innerText = '+'
num.innerText = "0"

minus.addEventListener('click', () => {
    num.innerText = Number(num.innerText) >= 1 ? Number(num.innerText) - 1 : 0
})

plus.addEventListener('click', () => {
    num.innerText = Number(num.innerText) + 1
})

document.body.appendChild(minus)
document.body.appendChild(num)
document.body.appendChild(plus) 