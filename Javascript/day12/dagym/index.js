import { centerList } from "./data.js";

const contentList = document.querySelector(".contentList");

const makeTags = (tags) => {
    const tag = tags.join(" / ")
    return `<div class="infoTags">${tag}</div>`
}

const makeGymName = (gymName) => `<div class="infoGymName">${gymName}</div>`

const makeReview = (reviewRate, reviewCount) => {
    const review = `
        <div class="review">
            <span class="reviewStar">
                <i class="fa-solid fa-star"></i>
                ${reviewRate}
            </span>
            <span class="reviewCount">
                (${reviewCount})
            </span>
        </div>
    `
    return reviewRate != 0 ? review : ""
}

const makeAddress = (address) => `<span class="infoAddress">${address}</span>`

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
        <span class="dailyLowest">일일권</span>
    `
    return hasDailyItem ? daily : ""
}

const makeLowestPrice= (isLowestPrice) => {
    const lowest = `
        <span class="dailyLowest">다짐회원가</span>
    `
    return isLowestPrice ? lowest : ""
}

const makePrice = (originalPrice, lowestPrice, period, count) => {
    const periodOrCount = period == null ? count : period
    const originalP = parseInt(Math.floor(originalPrice / periodOrCount / 10) * 10)
    const lowestP = parseInt(Math.floor(lowestPrice / periodOrCount / 10) * 10)
    const discount = parseInt((originalPrice - lowestPrice) / originalPrice * 100)

    const lowest = `
    <div class="priceL">
        <span class="priceN">${lowestP}원~</span>
        <span class="priceM">/월</span>
    </div>
    `
    const origin = `
    <div class="priceO">
        <div class="original">${originalP}원</div>
        <div class="disPrice">
        <span class="discount">${discount}%</span>
        <span class="priceN">${lowestP}원~</span>
        <span class="priceM">/월</span>
        </div>
    </div>
    `

    return originalPrice == lowestPrice ? lowest : origin
}

const makeProgramFree = (program) => {
    const programList = `        
        <div class="programBoxFree">
            <div class="programFreeName">무료 프로그램</div>
            <span class="programFreeNameList">${program}</span>
        </div>
        `
    return program == "" ? "" : programList;
}

const makeProgramService = (service) => {
    const serviceList = `        
        <div class="programBoxService">
            <div class="programFreeName">무료 서비스</div>
            <span class="programFreeNameList">${service}</span>
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
                <div class="reviewAddress">
                    ${makeReview(v.review.rate, v.review.count)}
                    ${makeAddress(v.address)}
                </div>
            ${makeReservation(v.isReservationRequired)}
            </div>
            <div class="infoDailyPrice">
            <div class="infoDailyLosest">
            ${makeDailyItem(v.hasDailyItem)}
            ${makeLowestPrice(v.isLowestPrice)}
            </div>
            ${makePrice(v.price.originalPrice, v.price.lowestPrice, v.price.period, v.price.count)}
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