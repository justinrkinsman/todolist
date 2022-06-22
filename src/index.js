class Todo {
    constructor(title, description, dueDate, priority) {
        this.title = title;
        this.description = description;
        this.dueDate = dueDate;
        this.priority = priority
    }
}

let myTodo = new Todo('Sweep', "Sweep kitchen", 'Today', 'Medium')
console.log(myTodo)