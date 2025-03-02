const buttons = document.querySelectorAll("button");
const taskId = document.getElementById("task-id");
const completedTask = document.getElementById("completed-task");
const checkTask = document.getElementById("check-task");
const clearBtn = document.getElementById("clear-btn");
const calenderDate = document.getElementById("calender-date");

const now = new Date();

const formattedDate = now.toLocaleDateString("en-US", {
  weekday: "short",
  month: "short",
  day: "2-digit",
  year: "numeric",
});

calenderDate.innerText = formattedDate;
calenderDate.style.fontWeight = "bold";

let taskValue = Number(taskId.innerText);
let checkTaskValue = Number(checkTask.innerText);

buttons.forEach((button) => {
  button.addEventListener("click", function () {
    alert("Board Updated Successfully!");

    if (taskValue > 0) {
      taskValue--;
      document.getElementById("task-id").innerText = taskValue;
    }

    if (checkTaskValue > 0) {
      checkTaskValue++;
      document.getElementById("check-task").innerText = checkTaskValue;
    }

    const title = button.dataset.title;
    const li = document.createElement("li");

    li.classList.add("bg-blue-100");
    li.classList.add("rounded-lg");
    li.classList.add("bg-blue-100");
    li.classList.add("p-2");
    li.classList.add("mt-5");

    const now = new Date().toLocaleTimeString();
    li.innerHTML = `You have complete the task <br> ${title} - ${now}`;

    completedTask.prepend(li);

    button.disabled = true;
  });
});

const endBtn = document
  .getElementById("end-btn")
  .addEventListener("click", function () {
    alert("Congrates!!! You have completed successfully all the current task");
  });

clearBtn?.addEventListener("click", function () {
  if (completedTask.lastChild) {
    completedTask.removeChild(completedTask.lastChild);
  }

  buttons.forEach((button) => {
    button.disabled = false;
  });
});
