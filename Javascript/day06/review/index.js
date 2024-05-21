const input = document.querySelector(".input")
const btn = document.querySelector(".btn")
const open = document.querySelector(".open")
const close = document.querySelector(".close")

close.style.display = "none"

btn.addEventListener("click", () => {
    
    if(input.type === "password") {
        input.type = "text"
        close.style.display = "block"
        open.style.display = "none"
    } else {
        input.type = "password"
        close.style.display = "none"
        open.style.display = "block"
    }

})

