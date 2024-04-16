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


function buildToDo(newToDo){
  const taskLi = document.createElement('li');
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
  taskLi.textContent = `${newToDo} `;

  taskLi.appendChild(deleteButton);
  taskLi.appendChild(editButton);
  taskLi.appendChild(selectionList);

  document.querySelector('#tasks').appendChild(taskLi);

  selectionList.addEventListener('change', function() {
    const selectedPriority = selectionList.value;
    updateTextColor(taskLi, selectedPriority);
  });

  editButton.addEventListener('click', editTask.bind(null, taskLi));
  deleteButton.addEventListener('click', deleteTask);
}

function updateTextColor(taskLi, priority) {
  switch (priority) {
    case 'High':
      taskLi.style.color = 'red';
      break;
    case 'Medium':
      taskLi.style.color = 'yellow';
      break;
    case 'Low':
      taskLi.style.color = 'green';
      break;
    default:
      taskLi.style.color = 'black';
  }
}

function editTask(taskLi, e) {
  const taskText = taskLi.textContent.trim();
  const input = document.createElement('input');
  input.type = 'text';
  input.value = taskText;
  taskLi.textContent = ''; // Clear task content
  taskLi.appendChild(input);
  input.focus();

  // When editing is done (by pressing Enter), update task text
  input.addEventListener('keyup', function(event) {
    if (event.key === 'Enter') {
      const newTaskText = input.value.trim();
      taskLi.textContent = newTaskText;
    }
  });
}

function deleteTask(e) {
  e.target.parentNode.remove();
}