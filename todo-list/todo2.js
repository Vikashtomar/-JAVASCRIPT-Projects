document.addEventListener('DOMContentLoaded',function(){
    const taskInput = document.getElementById('taskInput');
    const addTaskBtn = document.getElementById('addTaskBtn');
    const taskList = document.getElementById('taskList');

    addTaskBtn.addEventListener('click',addTask);
    taskList.addEventListener('click',handleTask);


    function addTask(){
        const taskText = taskInput.ariaValueMax.trim();
        if(taskText === ''){
            alert("Add Something...")
            return;
        }

        const li = document.createElement('li');
        li.innerHTML = `<span>$`

    }
})