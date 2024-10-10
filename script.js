
function addTask() {
    const taskInput = document.getElementById('inputTask').value;
    if (taskInput.trim() !== '') {
        const newTask = document.createElement('li');
        newTask.textContent = taskInput;
        const deleteBtn = document.createElement('button');
        deleteBtn.textContent = 'Delete';
        deleteBtn.addEventListener('click', function () {
            newTask.remove();
        });
        newTask.appendChild(deleteBtn);
        document.getElementById('task-list').appendChild(newTask);
        document.getElementById('inputTask').value = '';
    } else {
        alert("Please enter a task");
    }
}
document.getElementById('addTaskBtn').addEventListener('click', addTask);