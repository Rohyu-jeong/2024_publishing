import { centerList } from "./centerData.js";
import { liteAdList } from "./liteAdData.js";

class daGym {

    constructor(list) {
        this.gymName = list.gymName;
        this.gymPhotoSmall = list.gymPhotoSmall;
        this.address = list.address;
        this.isWomenOnly = list.isWomenOnly;
        this.isReservationRequired = list.isReservationRequired;
        this.hasDailyItem = list.hasDailyItem;
        this.isLowestPrice = list.isLowestPrice;
        this.tags = list.tags;
        this.program = list.program.free;
        this.service = list.service.free;
        this.count = list.price.count;
        this.isLowestPrice = list.price.isLowestPrice;
        this.lowestPrice = list.price.lowestPrice;
        this.originalPrice = list.price.originalPrice;
        this.period = list.price.period;
        this.reviewRate = list.review.rate;
        this.reviewCount = list.review.count;
    }

    makeTags () {
        const tag = this.tags.join(" / ")
        return `<div class="infoTags">${tag}</div>`
    }

    makeGymName () {
        return `<div class="infoGymName">${this.gymName}</div>`
    }

    makeReview () {
        return `
        <div class="review">
            <span class="reviewStar">
                <i class="fa-solid fa-star"></i>
                ${this.reviewRate}
            </span>
            <span class="reviewCount">
                (${this.reviewCount})
            </span>
        </div>
        `
    }

    makeAddress () {
        return `<span class="infoAddress">${this.address}</span>`
    }

    makeReservation () {
        const reservation = `
        <div class="infoReser">
            <div class="infoReserIcon">
                <i class="fa-solid fa-calendar-days"></i>
            </div>
            <span>예약필요</span>
        </div>
        `
        return this.isReservationRequired ? reservation : ""
    }

    makeDailyItem () {
        const daily = `
        <span class="dailyLowest">일일권</span>
        `
    return this.hasDailyItem ? daily : ""
    }

    makeLowestPrice () {
        const lowest = `
        <span class="dailyLowest">다짐회원가</span>
        `
        return this.isLowestPrice ? lowest : ""
    }

    makePrice () {
        const periodOrCount = this.period == null ? this.count : this.period
        const originalP = parseInt(Math.floor(this.originalPrice / periodOrCount / 10) * 10)
        const lowestP = parseInt(Math.floor(this.lowestPrice / periodOrCount / 10) * 10)
        const discount = parseInt((this.originalPrice - this.lowestPrice) / this.originalPrice * 100)

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

        return this.isLowestPrice ? origin : lowest
    }

    makeProgramFree () {
        const programList = `        
        <div class="programBoxFree">
            <div class="programFreeName">무료 프로그램</div>
            <span class="programFreeNameList">${this.program}</span>
        </div>
        `
        return this.program == "" ? "" : programList;
    }

    makeProgramService () {
        const serviceList = `        
        <div class="programBoxService">
            <div class="programFreeName">무료 서비스</div>
            <span class="programFreeNameList">${this.service}</span>
        </div>
        `
        return this.service == "" ? "" : serviceList;
    }

    makeInfos () {
       return `
        <div class="infos">
            ${this.makeTags ()}
            ${this.makeGymName ()}
            <div class="reviewAddress">
                ${this.makeReview()}
                ${this.makeAddress()}
            </div>
            ${this.makeReservation()}
        </div>
        <div class="infoDailyPrice">
            <div class="infoDailyLosest">
                ${this.makeDailyItem()}
                ${this.makeLowestPrice()}
            </div>
            ${this.makePrice()}
        </div>
        `
    }

    makeLiteAdList (first) {
        first.insertAdjacentHTML("beforeend", 
        `
        <div class="firstContent">
        <div class="contentBox">
        <div class="fistImgBox">
            <img
            src="${this.gymPhotoSmall}"
            alt=""
            />
        </div>
        <div class="fistInfo">
            <div class="firstHeart">
            <i class="fa-regular fa-heart"></i>
            </div>
            ${this.makeInfos()}
        </div>
        </div>
        <div class="firstProgramBox">
        ${this.makeProgramFree()}
        ${this.makeProgramService()}
        </div>
    </div>
    `
        );
    }

    makeCenterList (second) {
        second.insertAdjacentHTML(
            "beforeend",
            `
                <div class="secondContent">
                <div class="contentBox">
                <div class="secondImgBox">
                    <img
                    src="${this.gymPhotoSmall}"
                    alt=""
                    />
                </div>
                <div class="secondInfo">
                    <div class="secondHeart">
                    <i class="fa-regular fa-heart"></i>
                    </div>
                    ${this.makeInfos()}
                </div>
                </div>
                <div class="secondProgramBox">
                ${this.makeProgramFree()}
                ${this.makeProgramService()}
                </div>
            </div>
            `
          );
    }

}

const first = document.querySelector(".first");
const second = document.querySelector(".second");

const glass = document.querySelector(".glass");

const dailyBtn = document.querySelector(".dailyBtn");
const lowestBtn = document.querySelector(".lowestBtn");

const tagList = ["헬스", "P.T", "기구필라테스", "G.X", "골프", "필라테스", "요가", "사우나", "크로스핏", "주짓수", "복싱", "그룹P.T", "점핑운동"];

liteAdList.forEach((v) => {
    const liteAd = new daGym(v);
    liteAd.makeLiteAdList(first);
})

centerList.forEach((v) => {
    const center = new daGym(v);
    center.makeCenterList(second);
})

liteAdList.forEach ((v) => {

})

