// const input = document.querySelector(".input")
// const btn = document.querySelector(".btn")
// const div = document.createElement("div")

// btn.addEventListener("click", () => {
//     const text = input.value
//     if(text.length <= 8) {
//         div.innerText = "글자수가 짧습니다"
//         div.style.color = "red"
//     } else {
//         div.innerText = "글자수가 충분합니다"
//         div.style.color = "blue"
//     }
// })

// document.body.appendChild(div)


const input = document.querySelector(".input")
const btn = document.querySelector(".btn")
const msg = document.querySelector(".msg")

btn.addEventListener("click", () => {
    const text = input.value
    const isValidLength = text.length >= 8 && text.length <= 20
    const isValidSpecialChar = text.includes("!") || text.includes("#") || text.includes("$")
    const isValidStart = text.startsWith("IT")

    if (!isValidLength) {
        msg.innerText = "8 ~ 20 글자 사이로 글자를 만들어주세요!"
        msg.style.color = "red"
    } else if (!isValidSpecialChar) {
        msg.innerText = "반드시 !, #, $이 포함되어야 해요!"
        msg.style.color = "red"
    } else if (!isValidStart) {
        msg.innerText = "반드시 IT로 시작해야 해요!"
        msg.style.color = "red"
    } else {
        msg.innerText = "올바르게 문자를 설정했습니다"
        msg.style.color = "blue"
    }
})
