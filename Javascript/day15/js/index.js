import { makeDate } from "./date.js";


const date = document.querySelector(".date");
date.innerHTML = makeDate();




let newToDo;
let newTime;

const addNew = document.querySelector(".addNew");
const toDoList = document.querySelector(".toDoList");

addNew.addEventListener("click", ()=> {
    newToDo = window.prompt("New To Do");
    newTime = window.prompt("New Time");

    newTime = newTime == null ? "ALL DAY" : newTime;

    toDoList.innerHTML = `
        <div class="toDoContent">
            <div class="checkList">
                <div class="checkIcon">
                    <i class="fa-regular fa-square"></i>
                    <i class="fa-solid fa-square-check hidden"></i>
                </div>
                <div class="toDo">
                    <span>${newToDo}</span>
                </div>
            </div>
            <div class="time">
                <span>${newTime}</span>
            </div>
        </div>
        `
})

