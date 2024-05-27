// 참조 타입: 
// 프로그래밍 타입) Array, Object, Function
// Html에서 가져온 타입) Elment, Event

// const input = document.querySelector(".input")
// input.addEventListener("input", (e) => {
//     console.log(e.target.value)
// })

// const input = document.querySelector(".input")
// input.addEventListener("input", (e) => {
//     e.target.value.length >= 10 ? input.style.color = "red" : input.style.color = "black";
// })

const input = document.querySelector(".input")
input.addEventListener("input", (e) => {
    e.target.value = e.target.value.length < 10 ? e.target.value : e.target.value.slice(0, 10)
})