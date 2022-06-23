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

let four = 2 + 2
function submission() {
    let list = new Todo(task.value, desc.value, due.value, priority.value)
    let newDiv = document.createElement('div')
    newDiv.setAttribute('id', 'taskContent')
    newDiv.textContent = (`${list.task}`)
    let detailsBtn = document.createElement('button')
    detailsBtn.setAttribute('id', `detailsBtn${four}`)
    detailsBtn.textContent = "Details"
    let check = document.createElement('input')
    check.setAttribute('type', 'checkbox')
    check.setAttribute('id', 'check')
    let editBtn = document.createElement('button')
    editBtn.setAttribute('id', 'editBtn')
    editBtn.textContent = 'Edit'
    let delBtn = document.createElement('button')
    delBtn.setAttribute('id', 'delete')
    delBtn.textContent = 'Delete'
    let contentDiv = document.createElement('div')
    contentDiv.setAttribute('id', 'contentDiv')
    contentDiv.appendChild(newDiv)
    contentDiv.appendChild(detailsBtn)
    contentDiv.appendChild(check)
    contentDiv.appendChild(editBtn)
    contentDiv.appendChild(delBtn)
    content.appendChild(contentDiv)
    fullList.push(list)
    const buttons = document.querySelectorAll('button')
    buttons.forEach((button) => {
        button.addEventListener('click', () => {
            if(button.textContent =='Details'){
                console.log(fullList)
            }else if (button.textContent =='Edit'){
                console.log('Edit')
            }else if (button.textContent == 'Delete'){
                console.log('Delete')
            }
        })
})
    //console.log(fullList)
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

/*const detailsBtnClick = document.getElementById('detailsBtn')
    detailsBtnClick.addEventListener('click', function(e){
    if(e.target && e.target.id=='detailsBtn'){
        console.log(fullList)
    }
})*/