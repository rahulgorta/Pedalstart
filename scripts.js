document.addEventListener('DOMContentLoaded', () => {
    const taskList = document.getElementById('taskList');
    const addTaskForm = document.getElementById('addTaskForm');

    addTaskForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const title = document.getElementById('taskTitle').value;
        const description = document.getElementById('taskDescription').value;
        const dueDate = document.getElementById('taskDueDate').value;

        const taskItem = document.createElement('li');
        taskItem.className = 'list-group-item d-flex justify-content-between align-items-center';
        taskItem.innerHTML = `
            <div>
                <h5>${title}</h5>
                <p>${description}</p>
                <small>Due: ${dueDate}</small>
            </div>
            <div>
                <button class="btn btn-info btn-sm edit-task">Edit</button>
                <button class="btn btn-danger btn-sm delete-task">Delete</button>
            </div>
        `;

        taskList.appendChild(taskItem);
        $('#addTaskModal').modal('hide');
        addTaskForm.reset();
    });

    taskList.addEventListener('click', (e) => {
        if (e.target.classList.contains('delete-task')) {
            e.target.parentElement.parentElement.remove();
        } else if (e.target.classList.contains('edit-task')) {
            // Handle edit functionality here
            const taskItem = e.target.parentElement.parentElement;
            const title = taskItem.querySelector('h5').textContent;
            const description = taskItem.querySelector('p').textContent;
            const dueDate = taskItem.querySelector('small').textContent.replace('Due: ', '');

            document.getElementById('taskTitle').value = title;
            document.getElementById('taskDescription').value = description;
            document.getElementById('taskDueDate').value = dueDate;

            $('#addTaskModal').modal('show');
            taskItem.remove();
        }
    });
});
