
const optionsClassList = [
    {
        className: ".option1",
        isChecked: false,
        msg: "[필수] 서비스 이용약관 동의"
    },
    {
        className: ".option2",
        isChecked: false,
        msg: "[필수] 개인정보 수집 이용 동의서"
    },
    {
        className: ".option3",
        isChecked: false,
        msg: "[필수] 마케팅 활용 동의"
    },
    {
        className: ".option4",
        isChecked: false,
        msg: "[필수] 마케팅 활용 동의"
    }

]

optionsClassList.forEach((v, i) => {
    const div = document.createElement("div")
    div.classList.add(v.className)
    div.classList.add(div.isChecked ? "cheked" : "notChecked")
    div.innerText = v.msg

    div.addEventListener("click", () => {
        div.classList.toggle("notChecked")
        div.classList.toggle("checked")
        optionsClassList[i].isChecked = div.classList.contains("checked")

        const btn = document.querySelector(".btn")
        optionsClassList.every((v) => v.isChecked ? btn.classList.add("passed") : btn.classList.remove("passed"))
    })
    
    const optionList = document.querySelector(".optionList")
    optionList.appendChild(div)

})


