const minus = document.createElement("button")
minus.innerText = '-'

const result = document.createElement("span")
result.innerText = '0'

const plus = document.createElement("button")
plus.innerText = '+'

minus.addEventListener('click', () => {
    result.innerText = Number(result.innerText) - 1
})

plus.addEventListener('click', () => {
    result.innerText = Number(result.innerText) + 1
})

document.body.appendChild(minus)
document.body.appendChild(result)
document.body.appendChild(plus)
