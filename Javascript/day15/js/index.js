import { makeDate } from "./date.js";
import { dataList } from "./tododata.js";
import { addToDoList } from "./addtodolist.js"
import { addNewEvent } from "./addtodo.js"
import { makeTasks, TaskCount } from "./task.js";
import { prevBtnEvent, nextBtnEvent } from "./calevent.js";
import { currentPageDate, todayPageDate } from "./currentpageDate.js";

const dateInfo = new Date();

const date = document.querySelector(".date");
const toDoList = document.querySelector(".toDoList");

let currentDataListIndex = currentPageDate(todayPageDate(dateInfo));

date.innerHTML = makeDate(dataList[currentDataListIndex]); // 오늘 날짜

let dayList = dataList[currentDataListIndex].dataListToDoLists; // currentDataListIndex의 todo 배열

addToDoList(dayList, toDoList); // 기존 리스트 불러오기

let toDoContents = document.querySelectorAll(".toDoContent");

let count = TaskCount(toDoContents);

makeTasks(count);

prevBtnEvent(currentDataListIndex);

nextBtnEvent(currentDataListIndex);

addNewEvent(dataList, currentDataListIndex, toDoList); // 추가 버튼


// const prevBtn = document.querySelector(".prevBtn");

// prevBtn.addEventListener("click", () => {

//     const currentDataList = currentDataListIndex > 0 ? dataList[--currentDataListIndex] : dataList[currentDataListIndex];

//     date.innerHTML = makeDate(currentDataList);
// })

// const nextBtn = document.querySelector(".nextBtn"); 

// nextBtn.addEventListener("click", () => {

//     const currentDataList = currentDataListIndex < dataList.length - 1 ? dataList[++currentDataListIndex] : dataList[currentDataListIndex];

//     date.innerHTML = makeDate(currentDataList);
// })
