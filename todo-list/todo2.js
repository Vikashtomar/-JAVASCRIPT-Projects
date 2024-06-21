// document.addEventListener('DOMContentLoaded',function(){
//     const taskInput = document.getElementById('taskInput');
//     const addTaskBtn = document.getElementById('addTaskBtn');
//     const taskList = document.getElementById('taskList');

//     addTaskBtn.addEventListener('click',addTask);
//     taskList.addEventListener('click',handleTask);


//     function addTask(){
//         const taskText = taskInput.ariaValueMax.trim();
//         if(taskText === ''){
//             alert("Add Something...")
//             return;
//         }

//         const li = document.createElement('li');
//         li.innerHTML = `<span>${taskText}</span>
//                 <button class='edit'>Edit</button>
//                  <button class='delete'>Delete</button> `

//                  taskList.appendChild(li);
//                  taskInput.value = '';
//                      }
//             function handleTask(e){
// if(e.target.classList.contains('delete')){
//     deleteTask(e.target);
// }
// else if(e.target.classList.contains('edit')){
//     editTask(e.target)
// }
//      }

//      function deleteTask(button){
//         const li = button.parentElement;
//         taskList.removeChild(li);

//      }
//      function editTask(button){
//         const li = button.parentElement;
//         const span = li.querySelector('span');
//         const taskText = prompt('edit your task',span.textContent);
//         if(taskText !== null && taskText.trim() !==''){
//             span.textContent = taskText.trim();
//         }
//      }
// });
document.addEventListener('DOMContentLoaded', function() {
    const taskInput = document.getElementById('taskInput');
    const addTaskBtn = document.getElementById('addTaskBtn');
    const taskList = document.getElementById('taskList');

    addTaskBtn.addEventListener('click', addTask);
    taskList.addEventListener('click', handleTask);

    function addTask() {
        const taskText = taskInput.value.trim();
        if (taskText === '') {
            alert('Please enter a task');
            return;
        }

        const li = document.createElement('li');
        li.innerHTML = `<span>${taskText}</span>
                        <button class="edit">Edit</button>
                        <button class="delete">Delete</button>`;
        taskList.appendChild(li);
        taskInput.value = '';
    }

    function handleTask(e) {
        if (e.target.classList.contains('delete')) {
            deleteTask(e.target);
        } else if (e.target.classList.contains('edit')) {
            editTask(e.target);
        }
    }

    function deleteTask(button) {
        const li = button.parentElement;
        taskList.removeChild(li);
    }

    function editTask(button) {
        const li = button.parentElement;
        const span = li.querySelector('span');
        const taskText = prompt('Edit your task', span.textContent);
        if (taskText !== null && taskText.trim() !== '') {
            span.textContent = taskText.trim();
        }
    }
});
