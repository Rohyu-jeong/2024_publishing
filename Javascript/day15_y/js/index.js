import { makeDate } from "./date.js";
import { dataList } from "./tododata.js";
import { addToDoList } from "./addtodolist.js"
import { addNewEvent } from "./addtodo.js"
import { makeTasks } from "./task.js";
import { TaskCount } from "./task.js";
import { prevBtnEvent } from "./calevent.js";
import { nextBtnEvent } from "./calevent.js";

const dateInfo = new Date();


const date = document.querySelector(".date");
const toDoList = document.querySelector(".toDoList");

let currentMonth = dateInfo.getMonth(); // 월
let currentDate = dateInfo.getDate(); // 일
let currentDay = dateInfo.getDay(); // 요일

date.innerHTML = makeDate(currentMonth, currentDate, currentDay); // 오늘 날짜

let dayList = dataList[currentDate - 1].dataListToDoLists; // currentDay의 todo 배열

addToDoList(dayList, toDoList); // 기존 리스트 불러오기

let toDoContents = document.querySelectorAll(".toDoContent");

let count = TaskCount(toDoContents);

makeTasks(count);

addNewEvent(dataList, currentDay, toDoList); // 추가 버튼

prevBtnEvent(currentMonth, currentDate, currentDay, toDoList, dataList, date);

nextBtnEvent(currentMonth, currentDate, currentDay, toDoList, dataList, date);





