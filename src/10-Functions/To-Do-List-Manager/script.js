"use strict";

// const variable Delcaration
const btnTaskAdd = document.getElementById("add-task");
const taskDescInputEl = document.querySelector("#task-desc-input");
const taskTitleInputEl = document.querySelector("#task-title-input");
const taskTableBodyEl = document.querySelector("#task-table");

// let variable Declaraction
let taskObject = [];

// Function Declaration
const handleUserInput = function () {
  // Retrieve user inputs.
  const taskDescription = taskDescInputEl.value;
  const taskTitle = taskTitleInputEl.value;

  // Check if input fields are not empty
  if (taskDescription && taskTitle) {
    // Create a new task object
    const newTask = {
      title: taskTitle,
      description: taskDescription,
      completed: false,
    };

    // Add the new task to the taskObject array
    taskObject.push(newTask);

    // Update the display of tasks
    displayTasks();

    // Clear the input fields
    taskDescInputEl.value = "";
    taskTitleInputEl.value = "";
  } else {
    alert("Please enter both a task title and description.");
  }
};

const addTask = function (task, index) {
  // Create a new row
  const row = document.createElement("tr");

  // Create cells for task title, description, and status
  const titleCell = document.createElement("td");
  const descCell = document.createElement("td");
  const statusCell = document.createElement("td");

  // Fill the cells with the task data
  titleCell.innerText = task.title;
  descCell.innerText = task.description;
  statusCell.innerText = task.completed ? "Completed" : "Pending";

  // Add buttons for removing and completing tasks
  const actionsCell = document.createElement("td");
  const removeButton = document.createElement("button");
  removeButton.innerText = "Remove";
  removeButton.onclick = function () {
    removeTask(index);
  };

  const completeButton = document.createElement("button");
  completeButton.innerText = "Complete";
  completeButton.onclick = function () {
    markTaskCompleted(index);
  };

  actionsCell.appendChild(removeButton);
  actionsCell.appendChild(completeButton);

  // Append the cells to the row
  row.appendChild(titleCell);
  row.appendChild(descCell);
  row.appendChild(statusCell);
  row.appendChild(actionsCell);

  // Append the row to the table body
  taskTableBodyEl.appendChild(row);
};

const removeTask = function (index) {
  // Remove a task by index
  taskObject.splice(index, 1);
  displayTasks();
};

const markTaskCompleted = function (index) {
  // Mark a specified task as completed
  taskObject[index].completed = true;
  displayTasks();
};

const displayTasks = function () {
  // Clear the table body
  taskTableBodyEl.innerHTML = "";

  // Display all tasks
  taskObject.forEach((task, index) => {
    addTask(task, index);
  });
};

const validateTaskExists = function (taskNameOrIndex) {
  // Check if a task exists by name or index
  return typeof taskNameOrIndex === "number"
    ? taskObject[taskNameOrIndex] !== undefined
    : taskObject.find((task) => task.title === taskNameOrIndex) !== undefined;
};

btnTaskAdd.addEventListener("click", handleUserInput);
