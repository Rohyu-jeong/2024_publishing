import { makeDate } from "./date.js";
import { addToDoList } from "./addtodolist.js"

export const prevBtnEvent = (currentMonth, currentDate, currentDay, toDoList, dataList, date) => {

    const prevBtn = document.querySelector(".prevBtn");

    prevBtn.addEventListener("click", () => {
        currentDate--;
        currentDay--;
    
        currentMonth = currentDate == 0 ? --currentMonth : currentMonth;
        currentDate = currentDate <= 0 ? 30 : currentDate;
        currentDay = currentDay < 0 ? 6 : currentDay;
    
        date.innerHTML = makeDate(currentMonth, currentDate, currentDay);
        
        toDoList.innerHTML = ``;
    
        let dayList = dataList[currentDate - 1].dataListToDoLists;
    
        dayList == "" ? "" : addToDoList(dayList, toDoList);
    })
}

export const nextBtnEvent = (currentMonth, currentDate, currentDay, toDoList, dataList, date) => {

    const nextBtn = document.querySelector(".nextBtn"); 

    nextBtn.addEventListener("click", () => {
        currentDate++;
        currentDay++;
    
        currentMonth = currentDate == 31 ? ++currentMonth : currentMonth;
        currentDate = currentDate == 31 ? 1 : currentDate;
        currentDay = currentDay > 6 ? 0 : currentDay;
    
        date.innerHTML = makeDate(currentMonth, currentDate, currentDay);
        
        toDoList.innerHTML = ``;
    
        let dayList = dataList[currentDate - 1].dataListToDoLists;
    
        dayList == "" ? "" : addToDoList(dayList, toDoList);
    })
}