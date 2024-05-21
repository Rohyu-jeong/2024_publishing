// 데이터 타입: 기본[string, number, boolean, null, undefined] & 참조[Array]
// Array
// const colors = ["#1abc9c", "#3498db", "#e74c3c", "#7f8c8d"]
// colors.push("#f1c40f") // push 배열에 추가해주세요
// colors.sort() // sort 배열을 정렬해주세요

// colors.forEach((x) => {
//     const box = document.createElement("div")
//     box.style.width = "100px"
//     box.style.height = "100px"
//     box.style.backgroundColor = x
//     document.body.appendChild(box)
// }); // 한 명씩 불러주셈

// const menu = ["americano", "latte", "mint", "vanlina", "milktea"]

// menu.forEach((x) => {
//     console.log(x.toUpperCase())
// })

// const price = [2000, 3000, 5000, 3000, 4000, 6000]

// price.forEach((x) => {
//     if (x <= 3000) {
//         console.log("저렴하네요")
//     } else {
//         console.log("비싸네요")
//     }
// })


// replace(a, b) [a를 b로]
// replaceAll(a, b) [모든 a를 b로]
// const a = "hello".replace("l", "z")
// console.log(a)


// slice(a, b) [a, b-1]까지 문자 자르기

// const option = ["100 blue", "200 green", "500 black", "400 red"]

// option.forEach((x) =>{
//     const arr = x.split(" ")
//     const div = document.createElement("div")
//     div.style.width = arr[0] + "px"
//     div.style.height = arr[0] + "px"
//     div.style.backgroundColor = arr[1]
//     document.body.appendChild(div)
// })

const button = document.createElement("button")
button.innerText = "버튼"
document.body.appendChild(button)


button.addEventListener("click", () => {
    const prom = window.prompt("width, height")
    const color = window.prompt("색")
    const div = document.createElement("div")
    div.style.width = "prom" + "px"
    div.style.height = "prom" + "px"
    div.style.backgroundColor = "color"
    document.body.appendChild(div)
})




