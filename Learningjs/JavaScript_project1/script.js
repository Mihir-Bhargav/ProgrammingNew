// function add_task() {
//   const Taskupcoming = document.getElementById("Taskupcoming");
//   const Tasktoday = document.getElementById("Tasktoday");

//   if (Taskupcoming && Taskupcoming.checked) {
//     try {
//       const new_task = document.getElementById("input_add_task").value;
//       if (!new_task.trim()) return;

//       const newCard = document.createElement("div");
//       newCard.className = "events-upcoming"; // Use consistent styling

//       const checkbox = document.createElement("input");
//       checkbox.type = "checkbox";
//       checkbox.classList.add("task-checkbox"); // single class for all checkboxe
//       checkbox.classList.add("task-checkbox");
//       checkbox.addEventListener("change", function () {
//         if (this.checked) {
//           this.parentElement.remove(); // removes the task card immediately
//         }
//       });

//       const heading = document.createElement("h4");
//       heading.textContent = new_task;

//       newCard.appendChild(checkbox);
//       newCard.appendChild(heading);

//       document.querySelector("#task_upcoming").appendChild(newCard);
//       saveTask(new_task); // ✅ Save here

//       // Clear input field after adding task
//       document.getElementById("input_add_task").value = "";
//     } catch (error) {
//       console.log(error);
//     }
//   } else if (Tasktoday && Tasktoday.checked) {
//     console.log("Testing");
//     try {
//       const new_task = document.getElementById("input_add_task").value;
//       if (!new_task.trim()) return;

//       const newCard = document.createElement("div");
//       newCard.className = "events-upcoming"; // Use consistent styling

//       const checkbox = document.createElement("input");
//       checkbox.type = "checkbox";
//       checkbox.classList.add("task-checkbox"); // single class for all checkboxe
//       checkbox.classList.add("task-checkbox");
//       checkbox.addEventListener("change", function () {
//         if (this.checked) {
//           this.parentElement.remove(); // removes the task card immediately
//         }
//       });

//       const heading = document.createElement("h4");
//       heading.textContent = new_task;

//       newCard.appendChild(checkbox);
//       newCard.appendChild(heading);

//       document.querySelector("#tasks_for_today").appendChild(newCard);
//       saveTask(new_task); // ✅ Save here

//       // Clear input field after adding task
//       document.getElementById("input_add_task").value = "";
//     } catch (error) {
//       console.log(error);
//     }
//   }
// }

// function saveTask(task) {
//   let tasks = JSON.parse(localStorage.getItem("savedTasks")) || [];
//   tasks.push(task);
//   localStorage.setItem("savedTasks", JSON.stringify(tasks));
// }

// function loadTasks() {
//   let tasks = JSON.parse(localStorage.getItem("savedTasks")) || [];
//   tasks.forEach((task) => {
//     const newCard = document.createElement("div");
//     newCard.className = "events-upcoming";

//     const checkbox = document.createElement("input");
//     checkbox.type = "checkbox";
//     checkbox.classList.add("task-checkbox");
//     checkbox.addEventListener("change", function () {
//       if (this.checked) {
//         this.parentElement.remove();
//         // Optional: remove from localStorage too
//       }
//     });

//     const heading = document.createElement("h4");
//     heading.textContent = task;

//     newCard.appendChild(checkbox);
//     newCard.appendChild(heading);

//     document.querySelector("#tasks_for_today").appendChild(newCard); // or your container div
// document.addEventListener("DOMContentLoaded", loadTasks);
//   });
// }

document.addEventListener("DOMContentLoaded", loadTasks);

function add_task() {
  const Taskupcoming = document.getElementById("Taskupcoming");
  const Tasktoday = document.getElementById("Tasktoday");
  const new_task = document.getElementById("input_add_task").value.trim();

  if (!new_task) return;

  let category = "";
  if (Taskupcoming && Taskupcoming.checked) {
    category = "upcoming";
  } else if (Tasktoday && Tasktoday.checked) {
    category = "today";
  } else {
    alert("Please select a category");
    return;
  }

  createTaskCard(new_task, category);
  saveTask(new_task, category);
  document.getElementById("input_add_task").value = "";
}

function createTaskCard(taskText, category) {
  const newCard = document.createElement("div");
  newCard.className = "events-upcoming";

  const checkbox = document.createElement("input");
  checkbox.type = "checkbox";
  checkbox.classList.add("task-checkbox");
  checkbox.addEventListener("change", function () {
    if (this.checked) {
      this.parentElement.remove();
      removeTask(taskText, category); // Optional: sync with storage
    }
  });

  const heading = document.createElement("h4");
  heading.textContent = taskText;

  newCard.appendChild(checkbox);
  newCard.appendChild(heading);

  const container =
    category === "today"
      ? document.querySelector("#tasks_for_today")
      : document.querySelector("#task_upcoming");

  container.appendChild(newCard);
}

function saveTask(taskText, category) {
  let tasks = JSON.parse(localStorage.getItem("savedTasks")) || [];
  tasks.push({ text: taskText, category: category });
  localStorage.setItem("savedTasks", JSON.stringify(tasks));
}

function loadTasks() {
  let tasks = JSON.parse(localStorage.getItem("savedTasks")) || [];
  tasks.forEach(({ text, category }) => {
    createTaskCard(text, category);
  });
}

function removeTask(taskText, category) {
  let tasks = JSON.parse(localStorage.getItem("savedTasks")) || [];
  tasks = tasks.filter(
    (task) => !(task.text === taskText && task.category === category)
  );
  localStorage.setItem("savedTasks", JSON.stringify(tasks));
}
