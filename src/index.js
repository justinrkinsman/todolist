class Todo {
    constructor(task, description, dueDate, priority/*, project*/) {
        this.task = task;
        this.description = description;
        this.dueDate = dueDate;
        this.priority = priority;
        //this.project = project;
    }
}

class Projects {
    constructor(name, dueDate, priority){
        this.name = name;
        this.dueDate = dueDate;
        this.priority = priority;
    }
}

let fullList = [];
let projectList = [];
/*let testBtn = document.getElementById('fullList')
testBtn.addEventListener('click', displayFullList)
function displayFullList(){
    console.log(fullList)
}*/


const content = document.getElementById('content')
const details = document.getElementById('details')
const task = document.getElementById('task')          //
const desc = document.getElementById('description')   //
const due = document.getElementById('dueDate')        // gets values from input boxes
const priority = document.getElementById('priority')  //
//const project = document.getElementById('project')    //
const submitBtn = document.getElementById('submit')
const projectsList = document.getElementById('projectsList')
submitBtn.addEventListener('click', submission)

document.addEventListener('click', function(e){
    if(e.target && e.target.id.startsWith("detailsBtn")) {
        console.log(e.target.id)
        let detailsDiv = document.createElement('div')
        let index = e.target.id.slice(-1)
        let ogDiv = document.getElementById(`contentDiv${index}`)
        detailsDiv.setAttribute('id', `detailsText${index}`)
        detailsDiv.textContent = `${(fullList[index].description)} ${(fullList[index].dueDate)} ${(fullList[index].priority)}`
        ogDiv.appendChild(detailsDiv)
    }else if (e.target && e.target.id.startsWith('check')){
        let index = e.target.id.slice(-1)
        let element = document.getElementById(`contentDiv${index}`)
        element.style.opacity = '0.3'
    }else if (e.target && e.target.id.startsWith('delete')){
        let index = e.target.id.slice(-1)
        let removeDiv = document.getElementById(`contentDiv${index}`)
        content.removeChild(removeDiv)
        //fullList.splice(index, 1)
    }else if (e.target && e.target.id.startsWith('edit')){
        let index = e.target.id.slice(-1)
        let currentTask = document.getElementById(`taskContent${index}`)
        let currentDesc = fullList[index].description
        let currentDue = fullList[index].dueDate
        let currentPriority = fullList[index].priority
        //let currentProject = fullList[index].project
        console.log(currentDesc)
        let newTask = document.createElement('input')
        newTask.setAttribute('type', 'text')
        newTask.setAttribute('id', `newTaskInput${index}`)
        newTask.defaultValue = currentTask.textContent
        let editForm = document.createElement('div')
        let editTask = document.createElement('div')
        let editDesc = document.createElement('div')
        let editDue = document.createElement('div')
        let editPriority = document.createElement('div')
        //let editProject = document.createElement('div')
        let newTaskLabel = document.createElement('LABEL')
        let newDescLabel = document.createElement('LABEL')
        let newDueLabel = document.createElement('LABEL')
        let newPriorityLabel = document.createElement('LABEL')
        //let newProjectLabel = document.createElement('LABEL')
        newTaskLabel.htmlFor = newTask
        newTaskLabel.textContent = 'Task'
        editTask.appendChild(newTask)
        editTask.appendChild(newTaskLabel)
        let newDesc = document.createElement('input')
        newDesc.setAttribute('type', 'text')
        newDesc.setAttribute('id', `newDescInput${index}`)
        newDesc.defaultValue = currentDesc
        newDescLabel.htmlFor = newDesc
        newDescLabel.textContent = 'Description'
        editDesc.appendChild(newDesc)
        editDesc.appendChild(newDescLabel)
        let newDue = document.createElement('input')
        newDue.setAttribute('type', 'text')
        newDue.setAttribute('id', `newDueInput${index}`)
        newDue.defaultValue = currentDue
        newDueLabel.htmlFor = newDue
        newDueLabel.textContent = 'Due Date'
        editDue.appendChild(newDue)
        editDue.appendChild(newDueLabel)
        let newPriority = document.createElement('input')
        newPriority.setAttribute('type', 'input')
        newPriority.setAttribute('id', `newPriorityInput${index}`)
        newPriority.defaultValue = currentPriority
        newPriorityLabel.htmlFor = newPriority
        newPriorityLabel.textContent = 'Priority'
        editPriority.appendChild(newPriority)
        editPriority.appendChild(newPriorityLabel)
        /*let newProject = document.createElement('input')
        newProject.setAttribute('type', 'input')
        newProject.setAttribute('id', `newProjectInput${index}`)
        newProject.defaultValue = currentProject
        newProjectLabel.htmlFor = newProject
        newProjectLabel.textContent = 'Project'
        editProject.appendChild(newProject)
        editProject.appendChild(newProjectLabel)*/
        let newTaskSubmit = document.createElement('button')
        newTaskSubmit.textContent = 'Accept'
        editForm.appendChild(editTask)
        editForm.appendChild(editDesc)
        editForm.appendChild(editDue)
        editForm.appendChild(editPriority)
        //editForm.appendChild(editProject)
        editForm.appendChild(newTaskSubmit)
        content.appendChild(editForm)
        newTaskSubmit.addEventListener('click', function(e){
            if (e.target && e.target.textContent == 'Accept'){
                //let currentTask = document.getElementById(`taskContent${index}`)
                currentTask.textContent = newTask.value
                fullList[index].task = newTask.value
                fullList[index].description = newDesc.value
                fullList[index].dueDate = newDue.value
                fullList[index].priority = newPriority.value
                //fullList[index].project = newProject.value
                console.log(fullList)
            }
        })   
    }else if (e.target && e.target.textContent == 'Confirm'){
        //let newProjectDiv = document.getElementById('newProjectDiv')
        //let newProjectForm = document.getElementById('newProjectForm')
        let newProjectName = document.getElementById('newProjectNameInput')
        let newProjectDueDate = document.getElementById('newProjectDueDateInput')
        let newProjectPriority = document.getElementById('newProjectPriorityInput')
        let newProjectListItem = document.createElement('div')
        let projectsList = document.getElementById('projectsList')
        //console.log(newProjectName.value, newProjectDueDate.value, newProjectPriority.value)
        newProjectDiv.removeChild(newProjectForm)
        newProjectDiv.removeChild(confirmBtn)
        newProjectListItem.textContent = newProjectName.value
        projectsList.appendChild(newProjectListItem)
        let addProject = new Projects(newProjectName.value, newProjectDueDate.value, newProjectPriority.value)
        projectList.push(addProject)
        console.log(projectList)
    }
})

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
    clearForm()
    //newProject()
}

let newProjectBtn = document.getElementById('newProjectBtn')
newProjectBtn.addEventListener('click', newProject)

function newProject(){
    let newProjectDiv = document.getElementById('newProjectDiv')
    let newProjectForm = document.createElement('div')
    newProjectForm.setAttribute('id', 'newProjectForm')
    let newProjectName = document.createElement('input')
    newProjectName.setAttribute('id', 'newProjectNameInput')
    let newProjectNameLabel = document.createElement('LABEL')
    newProjectNameLabel.htmlFor = newProjectName
    newProjectNameLabel.textContent = 'Project Name'
    newProjectForm.appendChild(newProjectNameLabel)
    newProjectForm.appendChild(newProjectName)
    let newProjectDueDate = document.createElement('input')
    newProjectDueDate.setAttribute('id', 'newProjectDueDateInput')
    let newProjectDueDateLabel = document.createElement('LABEL')
    newProjectDueDateLabel.htmlFor = newProjectDueDate
    newProjectDueDateLabel.textContent = 'Due Date'
    newProjectForm.appendChild(newProjectDueDateLabel)
    newProjectForm.appendChild(newProjectDueDate)
    newProjectDiv.appendChild(newProjectForm)
    let newProjectPriority = document.createElement('input')
    newProjectPriority.setAttribute('id', 'newProjectPriorityInput')
    let newProjectPriorityLabel = document.createElement('LABEL')
    newProjectPriorityLabel.htmlFor = newProjectPriority
    newProjectPriorityLabel.textContent = 'Priority'
    newProjectForm.appendChild(newProjectPriorityLabel)
    newProjectForm.appendChild(newProjectPriority)
    newProjectDiv.appendChild(newProjectForm)
    let newProjectConfirm = document.createElement('button')
    newProjectConfirm.textContent = 'Confirm'
    newProjectConfirm.setAttribute('id', 'confirmBtn')
    newProjectDiv.appendChild(newProjectConfirm)
    /*let index = fullList.length -1
    let newProject = document.createElement('div')
    newProject.textContent = fullList[index].project
    newProject.setAttribute('id', `newProject${index}`)
    projectsList.appendChild(newProject)*/
    //console.log(fullList[index].project)
}

function clearForm(){
    task.value = ''
    desc.value = ''
    due.value = ''
    priority.value = ''
    //project.value = ''
}

function addListToPage() {
    let list = new Todo(task.value, desc.value, due.value, priority.value/*, project.value*/)
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