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
    addListToPage()
    console.log(fullList)
    /*const detailsButtons = document.querySelectorAll('[id^="detailsBtn"]')
    detailsButtons.forEach((detailsButton) => {
        detailsButton.addEventListener('click', () => {
                console.log(fullList[detailsButton.id.slice(-1)].description)
                console.log(fullList[detailsButton.id.slice(-1)].dueDate)
                console.log(fullList[detailsButton.id.slice(-1)].priority)
        })
})*/
    document.addEventListener('click', function(e){
        if(e.target && e.target.textContent == 'Details') {
            let detailsDiv = document.createElement('div')
            let index = e.target.id.slice(-1)
            let ogDiv = document.getElementById(`contentDiv${index}`)
            detailsDiv.textContent = `${(fullList[index].description)} ${(fullList[index].dueDate)} ${(fullList[index].priority)}`
            ogDiv.appendChild(detailsDiv)
        }
    })
    clearForm()
    
}

function clearForm(){
    task.value = ''
    desc.value = ''
    due.value = ''
    priority.value = ''
}

function addListToPage() {
    let list = new Todo(task.value, desc.value, due.value, priority.value)
    let newDiv = document.createElement('div')
    newDiv.setAttribute('id', `taskContent${fullList.length}`)
    newDiv.textContent = (`${list.task}`)
    let detailsBtn = document.createElement('button')
    detailsBtn.setAttribute('id', `detailsBtn${fullList.length}`)
    detailsBtn.textContent = "Details"
    let check = document.createElement('input')
    check.setAttribute('type', 'checkbox')
    check.setAttribute('id', `check${fullList.length}`)
    let editBtn = document.createElement('button')
    editBtn.setAttribute('id', `editBtn${fullList.length}`)
    editBtn.textContent = 'Edit'
    let delBtn = document.createElement('button')
    delBtn.setAttribute('id', `delete${fullList.length}`)
    delBtn.textContent = 'Delete'
    let contentDiv = document.createElement('div')
    contentDiv.setAttribute('id', `contentDiv${fullList.length}`)
    let leftSide = document.createElement('div')
    leftSide.setAttribute('id', `leftSide${fullList.length}`)
    leftSide.appendChild(newDiv)
    leftSide.appendChild(detailsBtn)
    leftSide.appendChild(check)
    leftSide.appendChild(editBtn)
    leftSide.appendChild(delBtn)
    contentDiv.appendChild(leftSide)
    content.appendChild(contentDiv)
    fullList.push(list)
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