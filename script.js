let taskList = document.getElementById("taskList");

// Load saved tasks when page opens
window.onload = function(){
    loadTasks();
}

// ADD TASK
function addTask(){

    let taskInput = document.getElementById("taskInput");
    let taskText = taskInput.value.trim();

    if(taskText === ""){
        alert("Please enter a task");
        return;
    }

    createTaskElement(taskText);
    saveTasks();

    taskInput.value = "";
}

// CREATE TASK ELEMENT
function createTaskElement(taskText){

    let li = document.createElement("li");
    li.innerText = taskText;

    // Mark complete
    li.onclick = function(){
        li.classList.toggle("completed");
        saveTasks();
    }

    // Delete button
    let delBtn = document.createElement("button");
    delBtn.innerText = "X";
    delBtn.className = "delete";

    delBtn.onclick = function(e){
        e.stopPropagation();
        li.remove();
        saveTasks();
    }

    li.appendChild(delBtn);
    taskList.appendChild(li);
}

// SAVE TO LOCAL STORAGE
function saveTasks(){
    localStorage.setItem("tasks", taskList.innerHTML);
}

// LOAD TASKS
function loadTasks(){
    taskList.innerHTML = localStorage.getItem("tasks") || "";
}
