// 참조 타입 : array, element

// const divTag = document.createElement("div")

// divTag.appendChild() // 자식 태그 추가하기
// divTag.removeChild() // 자식에 해당 태그 지우기

// divTag.style     직접 CSS 관여
// divTag.classList 클래스 리스트 보기
// divTag.classList.add("red") 클래스 리스트에 red 추가
// divTag.classList.remove("red") 클래스 리스트에 red 삭제
// divTag.classList.toggle("red") 클래스 리스트에 red가 있으면 삭제 없으면 추가

const box = document.querySelector(".box")
const sizeBtn = document.querySelector(".sizeBtn")
const color = document.querySelector(".color")
const borderBtn = document.querySelector(".borderBtn")

sizeBtn.addEventListener("click", () => {
    sizeBtn.innerText = sizeBtn.innerText == "늘리기" ? "줄이기" : "늘리기"
    box.classList.toggle("medium")
    box.classList.toggle("large")
})

color.addEventListener("click", () => {
    color.innerText = color.innerText == "빨간색" ? "파란색" : "빨간색"
    box.classList.toggle("red")
    box.classList.toggle("blue")
})

borderBtn.addEventListener("click", () => {
    borderBtn.innerText = borderBtn.innerText == "테두리 직각" ? "테두리 둥글" : "테두리 직각"
    box.classList.toggle("radius")
})

