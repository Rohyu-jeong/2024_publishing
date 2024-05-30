// 동기
// console.log(1);
// 비동기[데이터 가져오기, 지도 위치 가져오기, 시간초재기]
// setTimeout(() => {console.log(2)}, 1000);
// console.log(3);
// console.log(4);

// setTimeout(() => {}, 1000);
// setInterval(() => {console.log("오늘은 목요일")}, 1000)


// setInterval(() => {
//     const count = document.querySelector(".count");
//     count.innerHTML = Number(count.innerText) + 1;
// }, 1000)

// String, Number, Boolean, Array, Element, Object

setInterval(() => {
    const dateEl = document.querySelector(".date_el")
    const date = new Date();
    const koreaDay = {
        1:"월요일", 2:"화요일", 3:"수요일", 4:"목요일", 5:"금요일", 6:"토요일", 7:"일요일"
    }
    
    dateEl.innerText = `${date.toLocaleString()} ${koreaDay[date.getDay()]}`
}, 1000)

