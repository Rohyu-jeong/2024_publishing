// console.log("자바스크립트! 시작!")

// 미니퀴즈
// 자바스크립트 공부 다짐
// 오늘 점심 메뉴:

// console.log("공부 다짐:")
// console.log("열심히 하자")

// console.log("점심 메뉴 없음")

// window.alert('알림')
// window.confirm("아무거나")
// window.prompt("왜 안나온데?")

// window.open("https://www.naver.com/")

// const a = document.createElement('div')
// a.innerText = "아메리카노"
// a.addEventListener('mouseover', () => {
//     window.alert("메가 커피 짱짱")
// })

// document.body.appendChild(a)

// 화면에 버튼 태그를 만들고
// 안의 내용은 석가탄신일
// 클릭'click'을 하면 alert으로 부처님 오심 ㄹㅇ

// const a = document.createElement('button')
// a.innerText = "석가탄신일"
// a.addEventListener('click', () => {
//     window.alert("부처님 오심 ㄹㅇ")
// })

// document.body.appendChild(a)

// 버튼 태그 만들고, 안에 아메리카노
// 클릭을 하면, 라떼

// const a = document.createElement('button')
// a.innerText = "아메리카노"
// a.addEventListener('click', () => {
//     a.innerText = "라떼"
// })

// document.body.appendChild(a)

// const b = window.prompt("무엇이든 물어보살")
// console.log(b)

// 첫 번째 prompt 버튼 전의 이름
// 두 번째 prompt 버튼 클릭 후 이름
// 클릭 전 이름 버튼 만들고, 클릭하면 두번 째 클릭 이름으로 바뀜

// const prev = window.prompt("첫 번째 버튼 이름")
// const after = window.prompt("두 번째 버튼 이름")
// const btn  = document.createElement('button')
// btn.innerText = prev

// btn.addEventListener('click', () => {
//     btn.innerText = after
// })

// document.body.appendChild(btn)

// const a = document.createElement("div")
// a.innerHTML = "<button>코리아 아이티</button>"
// document.body.appendChild(a)

// button 태그 만들고, 배경색 하늘색, 폰트 사이즈 20px
// 클릭을 하면, 빨간색으로 바뀌는 퀴즈

// const btn = document.createElement('button')
// btn.innerText = "버튼"
// btn.style.backgroundColor = "skyblue"
// btn.style.fontSize = "20px"

// btn.addEventListener('click', () => {
//     btn.style.backgroundColor = "red"
// })

// document.body.appendChild(btn)

// 버튼이 5개 있음, 빨, 주, 노, 초, 파
// 모두 css를 배경은 각각 해당 색으로 바꾸고, text 빨, 주, 노, 초, 파
// div 태그가 w: 100, h: 100, border: 1px solid black 있는데
// 여기서 위의 5개 버튼 중 하나를 누르면 div의 backgroundcolor가 해당 색으로 바뀌는 프로그램
const red = document.createElement("button");
const orange = document.createElement("button");
const yell = document.createElement("button");
const green = document.createElement("button");
const blue = document.createElement("button");

red.innerText = "빨";
orange.innerText = "주";
yell.innerText = "노";
green.innerText = "초";
blue.innerText = "파";

red.style.backgroundColor = "red";
orange.style.backgroundColor = "orange";
yell.style.backgroundColor = "yellow";
green.style.backgroundColor = "green";
blue.style.backgroundColor = "blue";

const div = document.createElement("div");
div.style.width = "100px";
div.style.height = "100px";
div.style.border = "1px solid black";

red.addEventListener("click", () => {
  div.style.backgroundColor = "red";
});

orange.addEventListener("click", () => {
  div.style.backgroundColor = "orange";
});

yell.addEventListener("click", () => {
  div.style.backgroundColor = "yellow";
});

green.addEventListener("click", () => {
  div.style.backgroundColor = "green";
});

blue.addEventListener("click", () => {
  div.style.backgroundColor = "blue";
});

document.body.appendChild(red);
document.body.appendChild(orange);
document.body.appendChild(yell);
document.body.appendChild(green);
document.body.appendChild(blue);

document.body.appendChild(div);
