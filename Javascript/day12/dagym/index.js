import { centerList } from "./data.js";

const contentList = document.querySelector(".contentList");

const makeTags = (tags) => {
    const tag = tags.join(" / ")
    return `<div class="infoTags">${tag}</div>`
}

const makeGymName = (gymName) => `<div class="infoGymName">${gymName}</div>`

const makeAddress = (address) => `<div class="infoAddress">${address}</div>`

const makeReservation = (isReservationRequired) => {
    const reservation = `
        <div class="infoReser">
            <i class="fa-solid fa-calendar-days"></i>
            <span>예약필요</span>
        </div>
    `
    return isReservationRequired ? reservation : ""
}

const makeDailyItem= (hasDailyItem) => {
    const daily = `
        <div class="dailyLowest">일일권</div>
    `
    return hasDailyItem ? daily : ""
}

const makeLowestPrice= (isLowestPrice) => {
    const lowest = `
        <div class="dailyLowest">다짐회원가</div>
    `
    return isLowestPrice ? lowest : ""
}

const makePrice = (originalPrice, lowestPrice, period) => {
    const originalP = parseInt(originalPrice / period)
    const lowestP = parseInt(lowestPrice / period)
    const discount = parseInt((originalPrice - lowestPrice) / originalPrice * 100)

    const lowest = `
    <div class="price">
        <span class="priceN">${lowestP}~</span>
        <span>/월</span>
    </div>
    `
    const origin = `
    <div class="price">
        <div class="original">${originalP}원</div>
        <span class="discount">${discount}%</span>
        <span class="priceN">${lowestP}~</span>
        <span>/월</span>
    </div>
    `

    return originalPrice == lowestPrice ? lowest : origin
}

const makeProgramFree = (program) => {
    const programList = `        
        <div class="programBoxFree">
            <div class="programFreeName">무료 프로그램</div>
            <span>${program}</span>
        </div>
        `
    return program == "" ? "" : programList;
}

const makeProgramService = (service) => {
    const serviceList = `        
        <div class="programBoxService">
            <div class="programFreeName">무료 서비스</div>
            <span>${service}</span>
        </div>
        `
    return service == "" ? "" : serviceList;
}


centerList.forEach((v) => {
  contentList.insertAdjacentHTML(
    "beforeend",
    `
        <div class="content">
        <div class="contentBox">
        <div class="imgBox">
            <img
            src="${v.gymPhotoSmall}"
            alt=""
            />
        </div>
        <div class="info">
            <div class="infoHeart">
            <i class="fa-regular fa-heart"></i>
            </div>
            <div class="infos">
            ${makeTags(v.tags)}
            ${makeGymName(v.gymName)}
            ${makeAddress(v.address)}
            ${makeReservation(v.isReservationRequired)}
            </div>
            <div class="infoDailyPrice">
            ${makeDailyItem(v.hasDailyItem)}
            ${makeLowestPrice(v.isLowestPrice)}
            ${makePrice(v.price.originalPrice, v.price.lowestPrice, v.price.period)}
            </div>
        </div>
        </div>
        <div class="programBox">
        ${makeProgramFree(v.program.free)}
        ${makeProgramService(v.service.free)}
        </div>
    </div>
    `
  );
});
