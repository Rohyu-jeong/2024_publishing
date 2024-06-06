import { makeDate } from "./date.js";
import { dataList } from "./tododata.js";

export const todayPageDate = (dateInfo) => {
    let currentMonth = dateInfo.getMonth() + 1; // 월
    let currentDate = dateInfo.getDate(); // 일

    let currentDataListIndex = dataList.findIndex((v) => v.dataListMonth == currentMonth && v.dataListDate == currentDate);

    return currentDataListIndex;
}

export const currentPageDate = (currentDataListIndex) => currentDataListIndex;