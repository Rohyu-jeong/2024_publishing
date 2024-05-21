const box = document.querySelector(".box")
const redBtn = document.querySelector(".redBtn")
const orgBtn = document.querySelector(".orgBtn")
const yellBtn = document.querySelector(".yellBtn")
const greenBtn = document.querySelector(".greenBtn")
const blueBtn = document.querySelector(".blueBtn")

const colorBtn = [redBtn, orgBtn, yellBtn, greenBtn, blueBtn]

colorBtn.forEach((v) =>{
    v.addEventListener("click", () => {
        
        if (v == redBtn) {
            box.classList.add("red")
        } else if (v == orgBtn) {
            box.classList.add("orange")
        } else if (v == yellBtn) {
            box.classList.add("yellow")
        } else if (v == greenBtn) {
            box.classList.add("green")
        } else if (v == blueBtn) {
            box.classList.add("blue")
        }
    })
})

