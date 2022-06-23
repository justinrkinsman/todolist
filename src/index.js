class Todo {
    constructor(task, description, dueDate, priority) {
        this.task = task;
        this.description = description;
        this.dueDate = dueDate;
        this.priority = priority
    }
}

const content = document.getElementById('content')

let myTodo = new Todo('Sweep', "Sweep kitchen", 'Today', 'Medium')
console.log(myTodo.task)