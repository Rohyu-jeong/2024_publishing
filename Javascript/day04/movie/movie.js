const minus = document.querySelector(".minus")
const plus = document.querySelector(".plus")
const count = document.querySelector(".count")
const price = document.querySelector(".price")

minus.addEventListener("click", () => {
    const ticketCount = Number(count.innerText) - 1

    if(ticketCount >= 10) {
        price.innerText = (ticketCount  * 10000 * 0.8)
        count.innerText = Number(price.innerText) - 1
    } else if (ticketCount >= 5) {
        price.innerText = (ticketCount * 10000 * 0.9)
        count.innerText = Number(price.innerText) - 1
    } else if (5 > ticketCount && ticketCount > 0) {
        price.innerText = (ticketCount * 10000)
        count.innerText = Number(price.innerText) - 1
    }
    else {
        price.innerText = 0
        count.innerText = 0
    }
})

plus.addEventListener("click", () => {
    const ticketCount = Number(count.innerText) + 1

    if(ticketCount >= 10) {
        price.innerText = (ticketCount  * 10000 * 0.8)
    } else if (ticketCount >= 5) {
        price.innerText = (ticketCount * 10000 * 0.9)
    } else {
        price.innerText = (ticketCount * 10000)
    }

    count.innerText = Number(count.innerText) + 1
})
