const email = document.querySelector(".email")
const password = document.querySelector(".password")
const passwordC = document.querySelector(".passwordC")
const btn = document.querySelector(".btn")

const list = [email, password, passwordC]

email.addEventListener("input", (e) => {
    const targetV = e.target.value
    const emailC = ["@naver.com", "@daum.com", "@gmail.com","@kakao.com"]

    emailC.some((v) => targetV.includes(v)) ? email.classList.add("checked") : email.classList.remove("checked")
})

password.addEventListener("input", (e) => {
    const targetV = e.target.value

    const len = targetV.length >= 8
    const special = ["!", "@", "#", "$", "%"]
    const spe = special.some((v) => targetV.includes(v)) ? password.classList.add("checked") : password.classList.remove("checked")
})

passwordC.addEventListener("input", (e) => {
    const targetV = e.target.value

    targetV === password.value ? passwordC.classList.add("checked") : passwordC.classList.remove("checked")
})




