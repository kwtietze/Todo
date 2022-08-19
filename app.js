const add = document.querySelector('#push')
const todoInput = document.querySelector('#todo-input')

add.onclick = function() {
    if (todoInput.value.length == 0) {
        alert('Please Enter a Task')
    }
    else{
        document.querySelector('#tasks').innerHTML += `
            <div class="task shadow">
                <span id="taskname">
                    ${todoInput.value}
                </span>
                <button class="done">
                    <span class="material-symbols-outlined">done</span>
                </button>
                <button class="delete">
                    <span class="material-symbols-outlined">delete</span>
                </button>
            </div>
        `;

        let currentTasks = document.querySelectorAll('.delete');
        for(var i=0; i<currentTasks.length; i++){
            currentTasks[i].onclick = function(){
                this.parentNode.remove();
            }
        }
    }
}