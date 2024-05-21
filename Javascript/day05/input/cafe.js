const coffee = document.querySelector(".coffee")
const price = document.querySelector(".price")
const count = document.querySelector(".count")
const btn = document.querySelector(".btn")
const msg = document.querySelector(".msg")
const list = document.querySelector(".list")
const total = document.querySelector(".total")
let totalResult = 0

btn.addEventListener("click", () => {
    const isWord = !!coffee.value.length && !!price.value.length && !!count.value.length
    const isPV = typeof price.value === "number"
    const isCV = typeof count.value === "number"
    const pv = Number(price.value)
    const cv = Number(count.value)
    msg.style.color = "red"

    if (!isWord) {
        msg.innerText = "글자 입력"
    } else if(isPV || isCV) {
        msg.innerText = "숫자여야만 합니다"
    } else if (pv < 1000) {
        msg.innerText = "1000 이상부터 가능"
    } else if (0 > cv || cv > 10000) {
        msg.innerText = "1 ~ 10000개수 여야 합니다."
    } else {
        msg.innerText = "제출"
        totalResult += cv

        const coffeeList = document.createElement("div")
        coffeeList.innerText = `${coffee.value} ${pv}원 ${cv}개`
        list.appendChild(coffeeList)


        total.innerText = `총 개수 : ${totalResult}개`
    }

})


