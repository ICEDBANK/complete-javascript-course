"use strict";

// const variable Delcaration
const btnTaskAdd = document.getElementById("add-task");
const taskDescInputEl = document.querySelector("#task-desc-input");
const taskTitleInputEl = document.querySelector("#task-title-input");
const taskTableBodyEl = document.querySelector("#task-table tbody");

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

    // Add the task to the table
    addTask(newTask);

    // Clear the input fields
    taskDescInputEl.value = "";
    taskTitleInputEl.value = "";
  } else {
    alert("Please enter both a task title and description.");
  }
};

const addTask = function (task) {
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

  // Append the cells to the row
  row.appendChild(titleCell);
  row.appendChild(descCell);
  row.appendChild(statusCell);

  // Append the row to the table body
  taskTableBodyEl.appendChild(row);
};

const removeTask = function (taskNameOrIndex) {
  // Remove a task by name or index.
};

const markTaskCompleted = function (taskNameOrIndex) {
  // Mark a specified task as completed.
};

const displayTasks = function () {
  // Display the current list of tasks with their statuses.
};

const validateTaskExists = function (taskNameOrIndex) {
  // Check if a task exists by name or index.
};

btnTaskAdd.addEventListener("click", handleUserInput);
