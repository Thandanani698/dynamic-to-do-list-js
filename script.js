// Function to be executed when the DOM is fully loaded
document.addEventListener('DOMContentLoaded', function() {
    const addButton = document.getElementById('add-task-btn');
    const taskInput = document.getElementById('task-input');
    const taskList = document.getElementById('task-list');

    // Function to add a task
    function addTask() {
        const taskText = taskInput.value.trim();  // Retrieve and trim the input value

        // Check if the task text is not empty
        if (taskText === "") {
            alert("Please enter a task.");
            return;
        }

        // Create a new <li> element for the task
        const li = document.createElement('li');
        li.textContent = taskText;

        // Create the remove button
        const removeButton = document.createElement('button');
        removeButton.textContent = 'Remove';
        removeButton.classList.add('remove-btn');

        // Add an event listener to remove the task when clicked
        removeButton.addEventListener('click', function() {
            taskList.removeChild(li);
        });

        // Append the remove button to the <li> element
        li.appendChild(removeButton);

        // Append the <li> to the task list
        taskList.appendChild(li);

        // Clear the input field
        taskInput.value = '';
    }

    // Event listener for the 'Add Task' button
    addButton.addEventListener('click', addTask);

    // Allow adding tasks by pressing the "Enter" key
    taskInput.addEventListener('keypress', function(event) {
        if (event.key === 'Enter') {
            addTask();
        }
    });
});
document.addEventListener('DOMContentLoaded', function() {
    const addButton = document.getElementById('add-task-btn');
    const taskInput = document.getElementById('task-input');
    const taskList = document.getElementById('task-list');

    // Load tasks from Local Storage
    function loadTasks() {
        const storedTasks = JSON.parse(localStorage.getItem('tasks') || '[]');
        storedTasks.forEach(taskText => addTask(taskText, false)); // 'false' means don't re-save to Local Storage
    }

    // Add task function (save to local storage)
    function addTask(taskText, save = true) {
        if (taskText.trim() === "") {
            alert("Please enter a task.");
            return;
        }

        const li = document.createElement('li');
        li.textContent = taskText;

        const removeButton = document.createElement('button');
        removeButton.textContent = 'Remove';
        removeButton.classList.add('remove-btn');
        removeButton.addEventListener('click', function() {
            removeTask(taskText, li);
        });

        li.appendChild(removeButton);
        taskList.appendChild(li);

        // Save task to Local Storage if save is true
        if (save) {
            const storedTasks = JSON.parse(localStorage.getItem('tasks') || '[]');
            storedTasks.push(taskText);
            localStorage.setItem('tasks', JSON.stringify(storedTasks));
        }

        taskInput.value = ''; // Clear input
    }

    // Remove task function (update Local Storage)
    function removeTask(taskText, li) {
        // Remove task from DOM
        taskList.removeChild(li);

        // Remove from Local Storage
        const storedTasks = JSON.parse(localStorage.getItem('tasks') || '[]');
        const updatedTasks = storedTasks.filter(task => task !== taskText);
        localStorage.setItem('tasks', JSON.stringify(updatedTasks));
    }

    // Event listener for the 'Add Task' button
    addButton.addEventListener('click', function() {
        addTask(taskInput.value);
    });

    // Event listener to add task when Enter is pressed
    taskInput.addEventListener('keypress', function(event) {
        if (event.key === 'Enter') {
            addTask(taskInput.value);
        }
    });

    // Load tasks on page load
    loadTasks();
});
