const add = document.querySelector('#push')
const todoInput = document.querySelector('#todo-input')
let todoId = Date.now()

add.onclick = function submitTodo() {

    let todoId = Date.now()
    
    if (todoInput.value.length == 0) {
        alert('Please Enter a Task')
    }
    else{
        document.querySelector('#tasks').innerHTML += `
            <div id="${todoId}" class="task shadow">
                <button id="taskname" onclick="doneTodo()">
                    ${todoInput.value}
                </button>
                <button class="delete">
                    <span class="material-symbols-outlined">delete</span>
                </button>
            </div>`;

        todoInput.value = '';

        let currentTasks = document.querySelectorAll('.delete');
        for(var i=0; i<currentTasks.length; i++){
            currentTasks[i].onclick = function(){
                this.parentNode.remove();
            }
        }
    }
}

function doneTodo() {

    let entry = document.querySelector('#taskname')
    let taskArea = document.querySelector('.task')

    entry.classList.toggle('strike')
    taskArea.style.backgroundColor = '#d1d1d1'
}