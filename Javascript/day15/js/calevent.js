import { currentPageDate } from "./currentpageDate.js";

export const prevBtnEvent = (currentDataListIndex) => {

    const prevBtn = document.querySelector(".prevBtn");

    prevBtn.addEventListener("click", () => {

        currentDataListIndex = currentDataListIndex > 0 ? --currentDataListIndex : currentDataListIndex;

        currentPageDate(currentDataListIndex);

    })

}

export const nextBtnEvent = (currentDataListIndex) => {

    const nextBtn = document.querySelector(".nextBtn"); 

    nextBtn.addEventListener("click", () => {

        currentDataListIndex = currentDataListIndex < dataList.length - 1 ? ++currentDataListIndex : currentDataListIndex;

        currentPageDate(currentDataListIndex);

    })

}