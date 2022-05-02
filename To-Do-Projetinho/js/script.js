// Função que adiciona tarefa
function addTask() {

    //Titulo da tarefa
    const taskTitle = document.querySelector("#task-title").value;

    if (taskTitle) {

        // Clona template
        const template = document.querySelector(".template");

        const newTask = template.cloneNode(true);

        // adiciona titulo
        newTask.querySelector(".task-title").textContent = taskTitle;

        //Remover as classes desnecessarias
        newTask.classList.remove("template");
        newTask.classList.remove("hide");

        //Adiciona tarefa na lista
        const list = document.querySelector("#task-list");

        list.appendChild(newTask);

        // Adicionar evento de remover
        const removebtn = newTask.querySelector(".remove-btn").addEventListener("click", function() {
            removeTask(this);
        });

        // Limpar texto
        document.querySelector("#task-title").value = "";
    }
}

// Função de remover tarefa
function removeTask(task) {

    task.parentNode.remove(true);

};


// Evento adicionando tarefas
const addBtn = document.querySelector("#add-btn");

addBtn.addEventListener("click", function(e) {

    e.preventDefault();

    addTask();

});