// const a = document.querySelector(".box"); 
// a.style.backgroundColor = "blue";
// a.addEventListener('click', () => {
//     window.alert("아메리카노 클릭함")
// })

const bar = document.querySelector(".bar")
const x = document.querySelector(".xIcon")
x.style.display = "none"
x.style.transition = "all 0.5s"

bar.addEventListener('click', () => {
    bar.style.display = "none"
    x.style.display = "block"
})

x.addEventListener('click', () => {
    bar.style.display = "block"
    x.style.display = "none"
})