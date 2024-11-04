// script.js

function addTask() {
    const taskInput = document.getElementById("task-input");
    const taskText = taskInput.value.trim();

    if (taskText === "") {
        alert("Please enter a task!");
        return;
    }

    const taskList = document.getElementById("task-list");

    // Create a new list item for the task
    const taskItem = document.createElement("li");
    taskItem.classList.add("task-item");

    // Add task text and a delete button
    taskItem.innerHTML = `
        <span onclick="toggleComplete(this)">${taskText}</span>
        <button class="delete-btn" onclick="deleteTask(this)">Delete</button>
    `;

    // Add the task to the list
    taskList.appendChild(taskItem);
    taskInput.value = ""; // Clear the input field
}

function toggleComplete(task) {
    task.parentElement.classList.toggle("completed");
}

function deleteTask(button) {
    const taskItem = button.parentElement;
    taskItem.remove();
}
