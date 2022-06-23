class Todo {
    constructor(task, description, dueDate, priority) {
        this.task = task;
        this.description = description;
        this.dueDate = dueDate;
        this.priority = priority
    }
}

let fullList = [];
const content = document.getElementById('content')
const details = document.getElementById('details')
const task = document.getElementById('task')
const desc = document.getElementById('description')
const due = document.getElementById('dueDate')
const priority = document.getElementById('priority')
const submitBtn = document.getElementById('submit')
submitBtn.addEventListener('click', submission)


function submission() {
    let list = new Todo(task.value, desc.value, due.value, priority.value)
    let newDiv = document.createElement('div')
    newDiv.setAttribute('id', 'taskContent')
    newDiv.textContent = (`${list.task}`)
    let detailsBtn = document.createElement('button')
    detailsBtn.setAttribute('id', 'detailsBtn')
    detailsBtn.textContent = "Details"
    details.appendChild(detailsBtn)
    content.appendChild(newDiv)
    fullList.push(list)
    console.log(fullList)
    clearForm()
}

function clearForm(){
    task.value = ''
    desc.value = ''
    due.value = ''
    priority.value = ''
}

function addListToPage() {
}

let form = document.getElementById('myForm');
function handleForm(event) { event.preventDefault(); }
form.addEventListener('submit', handleForm)
//let myTodo = new Todo('Sweep', "Sweep kitchen", 'Today', 'Medium')

/* const detailsBtnClick = document.getElementById('detailsBtn')
    detailsBtnClick.addEventListener('click', function(e){
    if(e.target && e.target.id=='detailsBtn'){
        console.log(list.desc)
    }
})*/