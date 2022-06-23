class Todo {
    constructor(task, description, dueDate, priority, notes) {
        this.task = task;
        this.description = description;
        this.dueDate = dueDate;
        this.priority = priority
        this.notes = notes
    }
}

const content = document.getElementById('content')
const task = document.getElementById('task')
const desc = document.getElementById('description')
const due = document.getElementById('dueDate')
const priority = document.getElementById('priority')
const notes = document.getElementById('notes')
const submitBtn = document.getElementById('submit')
submitBtn.addEventListener('click', submission)

function submission() {
    let list = new Todo(task.value, desc.value, due.value, priority.value, notes.value)
    console.log(list)
    clearForm()
}

function clearForm(){
    task.value = ''
    desc.value = ''
    due.value = ''
    priority.value = ''
    notes.value = ''
}

let form = document.getElementById('myForm');
function handleForm(event) { event.preventDefault(); }
form.addEventListener('submit', handleForm)
//let myTodo = new Todo('Sweep', "Sweep kitchen", 'Today', 'Medium')