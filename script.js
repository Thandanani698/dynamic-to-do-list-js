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
