"use strict";

// const variable Delcaration
const btnTaskAdd = document.getElementById("add-task");
const taskDescInputEl = document.querySelector("#task-desc-input");
const taskTitleInputEl = document.querySelector("#task-title-input");

// let variable Declaraction
let taskObject = [];

// Function Declaration
const handleUserInput = function () {
  // Manage user inputs and direct them to appropriate functions.
  let td = taskDescInputEl.value;
  let ti = taskTitleInputEl.value;
  taskObject.push(td, ti);
  td = "";
  ti = "";
  taskDescInputEl.textContent = "";
  taskTitleInputEl.textContent = "";
};

const addTask = function (task) {
  // Add a new task to the list.
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
