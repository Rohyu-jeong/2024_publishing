const menu = []
const index = 0

const text = document.querySelector(".text")
const btn = document.querySelector(".btn")
const textMenu = document.querySelector(".menu")

btn.addEventListener("click", () => {
    menu[index++] = text.value
    menu.forEach((v) => {
        const div = document.createElement("div")
        div.innerText = v
        textMenu.appendChild(div)
    })
})

