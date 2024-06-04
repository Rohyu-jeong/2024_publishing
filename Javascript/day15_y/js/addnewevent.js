import { makeTasks } from "./task.js";
import { TaskCount } from "./task.js";

export const addNewEventListener = (newToDoContent) => {

    newToDoContent.addEventListener("click", () => {
        const checkList = newToDoContent.querySelector(".checkList");
        const time = newToDoContent.querySelector(".time");

        checkList.classList.toggle("checked");
        time.classList.toggle("hidden");

        const toDoContents = document.querySelectorAll(".toDoContent");
        const count = TaskCount(toDoContents);
        makeTasks(count);
    });

}