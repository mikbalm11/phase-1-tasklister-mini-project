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
  //first, the buildToDo function creates an li element and a button element. 
  const taskLi = document.createElement('li');
  const deleteButton = document.createElement('button');
  const selectionList = document.createElement('select');
  //selectionList.textContent = "Priority";

  const optionArray = ["High", "Medium", "Low"]

  for (e of optionArray) {
    var option = document.createElement('option');
    option.value = e;
    option.text = e;
    selectionList.appendChild(option);
  }



  deleteButton.textContent = '❌';
  taskLi.textContent = `${newToDo} `;

  taskLi.appendChild(deleteButton);
  taskLi.appendChild(selectionList);

  //selectionList.addEventListener('form', deleteTask);

  document.querySelector('#tasks').appendChild(taskLi);


  deleteButton.addEventListener('click', deleteTask);
}

function deleteTask(e) {
  e.target.parentNode.remove();
}