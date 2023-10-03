// Function to add a new task
function addTask() {
    const taskInput = document.getElementById('taskInput');
    const taskDeadline = document.getElementById('taskDeadline');
    const taskText = taskInput.value.trim();
    const deadlineText = taskDeadline.value;

    if (taskText === '') return;

    const taskList = document.getElementById('taskList');

    const li = document.createElement('li');
    li.innerHTML = `
        <div class="checkbox" onclick="toggleCompleted(this)">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M9 16.17L5.83 13l-1.42 1.41L9 19 21 7l-1.41-1.41z"/></svg>
        </div>
        <div class="task-details">
            <span>${taskText}</span>
            <span class="deadline">Deadline: ${deadlineText}</span>
        </div>
        <button onclick="deleteTask(this)">Delete</button>
    `;

    taskList.appendChild(li);
    taskInput.value = '';
    taskDeadline.value = '';
}


// Function to toggle task completion
function toggleCompleted(checkbox) {
    checkbox.parentNode.classList.toggle('completed');
}

// Function to delete a task
function deleteTask(button) {
    const taskList = document.getElementById('taskList');
    const li = button.parentNode;
    taskList.removeChild(li);
}
