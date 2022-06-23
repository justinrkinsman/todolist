class Todo {
    constructor(task, description, dueDate, priority) {
        this.task = task;
        this.description = description;
        this.dueDate = dueDate;
        this.priority = priority
    }
}

const content = document.getElementById('content')
const task = document.getElementById('task')
const desc = document.getElementById('description')
const due = document.getElementById('dueDate')
const priority = document.getElementById('priority')
const submitBtn = document.getElementById('submit')
submitBtn.addEventListener('click', submission)

function submission() {
    let list = new Todo(task.value, desc.value, due.value, priority.value)
    let newDiv = document.createElement('div')
    newDiv.textContent
    content.appendChild(newDiv)
    clearForm()
}

function clearForm(){
    task.value = ''
    desc.value = ''
    due.value = ''
    priority.value = ''
    notes.value = ''
}

function addListToPage() {
}

let form = document.getElementById('myForm');
function handleForm(event) { event.preventDefault(); }
form.addEventListener('submit', handleForm)
//let myTodo = new Todo('Sweep', "Sweep kitchen", 'Today', 'Medium')