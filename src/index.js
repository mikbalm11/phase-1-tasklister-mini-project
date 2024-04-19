document.addEventListener("DOMContentLoaded", () => {
  document.querySelector('form').addEventListener("submit", (e) => {
      e.preventDefault();
      const newToDo = e.target.querySelector('#new-task-description').value

      //pass in the newToDo variable as an argument to buildToDo. 
      buildToDo(newToDo);
  
      //after buildToDo function runs, reset the newTaskForm so the input is empty
      document.querySelector('form').reset();
    });
});

// add button to each task to edit items
// add listen for button click 
// create new form element on DOM
// create a second button to save the form
// capture user input after second button click
// update innertext of li with the new input

function buildToDo(newToDo){
  const taskItem = document.createElement('li');
  const deleteButton = document.createElement('button');
  const editButton = document.createElement('button');
  const selectionList = document.createElement('select');

  const optionArray = ['High', 'Medium', 'Low'];

  for (e of optionArray) {
    var option = document.createElement('option');
    option.value = e;
    option.text = e;
    selectionList.appendChild(option);
  }

  deleteButton.textContent = '❌';
  editButton.textContent = '✎';
  taskItem.textContent = `${newToDo} `;

  taskItem.appendChild(deleteButton);
  taskItem.appendChild(editButton);
  taskItem.appendChild(selectionList);

  document.querySelector('#tasks').appendChild(taskItem);

  selectionList.addEventListener('change', function() {
    const selectedPriority = selectionList.value;
    updateTextColor(taskItem, selectedPriority);
  });

  editButton.addEventListener('click', editForm)
  // pass li

  // editButton.addEventListener('click', editTask.bind(null, taskItem));
  deleteButton.addEventListener('click', deleteTask);
}

/* <form id="create-task-form" action="" method="POST">
<label for="new-task-description">Task description:</label>
<input type="text" id="new-task-description" name="new-task-description" placeholder="description">
<input type="submit" value="Create New Task">
</form> */

function editForm (e) {
  // create the form elemnt on DOM
  const editForm = document.createElement('form');
  const editLabel = document.createElement('label');
  editLabel.innerText = "Edit task"
  const editInput = document.createElement('input');
  //e.
  // structure and append the form
  // will this be the correct spot?

}

function updateTextColor(taskItem, priority) {
  switch (priority) {
    case 'High':
      taskItem.style.color = 'red';
      break;
    case 'Medium':
      taskItem.style.color = 'yellow';
      break;
    case 'Low':
      taskItem.style.color = 'green';
      break;
    default:
      taskItem.style.color = 'black';
  }
}

// function editTask(taskItem, e) {
//   const taskText = taskItem.textContent.trim();
//   const input = document.createElement('input');
//   input.type = 'text';
//   input.value = taskText;
//   taskItem.textContent = '';
//   taskItem.appendChild(input);
//   input.focus();

//   input.addEventListener('keyup', function(event) {
//     if (event.key === 'Enter') {
//       const newTaskText = input.value.trim();
//       taskItem.textContent = newTaskText;
//     }
//   });
// }

function deleteTask(e) {
  e.target.parentNode.remove();
}