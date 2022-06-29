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
    constructor(name, dueDate, priority, taskInfo){
        this.name = name;
        this.dueDate = dueDate;
        this.priority = priority;
        this.taskInfo = []
    }
}

//projectList[index].taskInfo = []

let fullList = [];
let projectList = [];
/*let testBtn = document.getElementById('fullList')
testBtn.addEventListener('click', displayFullList)
function displayFullList(){
    console.log(fullList)
}*/


const content = document.getElementById('content')
const details = document.getElementById('details')
/*const task = document.getElementById('task')          //
const desc = document.getElementById('description')   //
const due = document.getElementById('dueDate')        // gets values from input boxes
const priority = document.getElementById('priority')*/  //
//const project = document.getElementById('project')    //
//const submitBtn = document.getElementById('submit')
const projectsList = document.getElementById('projectsList')
//submitBtn.addEventListener('click', submission)
let deetz = 0
document.addEventListener('click', function(e){
    if(e.target && e.target.id.startsWith("detailsBtn")) {
        //console.log(e.target.id)
        if (deetz == 0){
            let detailsDiv = document.createElement('div')
            let index = e.target.id.slice(-1)
            let ogDiv = document.getElementById(`contentDiv${index}`)
            detailsDiv.setAttribute('id', `detailsText${index}`)
            detailsDiv.textContent = `${(fullList[index].description)} ${(fullList[index].dueDate)} ${(fullList[index].priority)}`
            ogDiv.appendChild(detailsDiv)
            deetz = 1
        }else if (deetz == 1){
            let index = e.target.id.slice(-1)
            let ogDiv = document.getElementById(`contentDiv${index}`)
            let detailsDiv = document.getElementById(`detailsText${index}`)
            ogDiv.removeChild(detailsDiv)
            //console.log(ogDiv)
            //console.log(detailsDiv)
            deetz = 0
        }
    }else if (e.target && e.target.id.startsWith('check')){
        let check = e.target
        console.log(check)
        if (check.checked){
        let index = e.target.id.slice(-1)
        let element = document.getElementById(`contentDiv${index}`)
        /*console.log(element)
        if (element.checked){
            console.log('hello')
        }*/
        element.style.opacity = '0.3'
//        e.target.id.startsWith('check').checked = false
        }else{
            let index = e.target.id.slice(-1)
            let element = document.getElementById(`contentDiv${index}`)
            element.style.opacity = '1'
            //e.target.id.startsWith('check').checked = true
        }
    }else if (e.target && e.target.id.startsWith('delete')){
        let index = e.target.id.slice(-1)
        let removeDiv = document.getElementById(`contentDiv${index}`)
        content.removeChild(removeDiv)
        //fullList.splice(index, 1)
    }else if (e.target && e.target.id.startsWith('edit')){
        let index = e.target.id.slice(-1)
        let addTaskButton = document.querySelector('[id^="addTaskButton"]')
        let currentTask = document.getElementById(`taskContent${index}`)
        let currentDesc = fullList[index].description
        let currentDue = fullList[index].dueDate
        let currentPriority = fullList[index].priority
        //let currentProject = fullList[index].project
        //console.log(currentDesc)
        let newTask = document.createElement('input')
        newTask.setAttribute('type', 'text')
        newTask.setAttribute('id', `newTaskInput${index}`)
        newTask.defaultValue = currentTask.textContent
        let editForm = document.createElement('div')
        editForm.setAttribute('id', 'editForm')
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
        content.insertBefore(editForm, addTaskButton)
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
                content.removeChild(editForm)
            }
        })   
    }else if (e.target && e.target.textContent == 'Confirm'){
        //let newProjectDiv = document.getElementById('newProjectDiv')
        //let newProjectForm = document.getElementById('newProjectForm')
        let newProjectName = document.getElementById('newProjectNameInput')
        let newProjectDueDate = document.getElementById('newProjectDueDateInput')
        let newProjectPriority = document.getElementById('newProjectPriorityInput')
        let newProjectListItem = document.createElement('div')
        let index = projectList.length
        newProjectListItem.setAttribute('id', `projectName${index}`)
        let projectsList = document.getElementById('projectsList')
        //console.log(newProjectName.value, newProjectDueDate.value, newProjectPriority.value)
        newProjectDiv.removeChild(newProjectForm)
        newProjectDiv.removeChild(confirmBtn)
        newProjectListItem.textContent = newProjectName.value
        projectsList.appendChild(newProjectListItem)
        let addProject = new Projects(newProjectName.value, newProjectDueDate.value, newProjectPriority.value)
        projectList.push(addProject)
        console.log(projectList)
    }else if (e.target && e.target.id.startsWith('projectName')){
        //console.log(projectList)
        let index = e.target.id.slice(-1)
        //projectList[index].taskInfo = ['hello world']                  //adds task to projectList
        let content = document.getElementById('content')
        let addTaskButton = document.createElement('button')
        addTaskButton.setAttribute('id', `addTaskButton${index}`)
        addTaskButton.textContent = 'Add Task'
        let projectHeader = document.createElement('h2')
        let taskDiv = document.createElement('div')
        projectHeader.textContent = projectList[index].name
        projectHeader.setAttribute('id', `h2${index}`)
        removeAllChildNodes(content)
        let taskIndex = projectList[index].taskInfo.length - 1
        //let taskIndex = contentNodeList.length - 1
        let taskDivContent = projectList[index].taskInfo
        taskDiv.textContent = taskDivContent
        //console.log(projectList[index].taskInfo[0])
        content.appendChild(projectHeader)
        for (let i = 0; i <= taskIndex; i++){
            let element = document.createElement('div')
            element.textContent = projectList[index].taskInfo[i].task
            
            let newDiv = document.createElement('div')
            newDiv.setAttribute('id', `taskContent${i}`)
            newDiv.textContent = (`${element.textContent}`)
            let detailsBtn = document.createElement('button')
            detailsBtn.setAttribute('id', `detailsBtn${i}`)
            detailsBtn.textContent = "Details"
            let check = document.createElement('input')
            check.setAttribute('type', 'checkbox')
            check.setAttribute('id', `check${i}`)
            let editBtn = document.createElement('button')
            editBtn.setAttribute('id', `editBtn${i}`)
            editBtn.textContent = 'Edit'
            let delBtn = document.createElement('button')
            delBtn.setAttribute('id', `delete${i}`)
            delBtn.textContent = 'Delete'
            let contentDiv = document.createElement('div')
            contentDiv.setAttribute('id', `contentDiv${i}`)
            let leftSide = document.createElement('div')
            leftSide.setAttribute('id', `leftSide${i}`)
            leftSide.appendChild(newDiv)
            leftSide.appendChild(detailsBtn)
            leftSide.appendChild(check)
            leftSide.appendChild(editBtn)
            leftSide.appendChild(delBtn)
            contentDiv.appendChild(leftSide)
            let addTaskButton = document.querySelector('[id^="addTaskButton"]')
            content.insertBefore(contentDiv, addTaskButton)
            
            //addListToPage()
            //content.appendChild(element)
            /*console.log(i)
            let taskDivContent = projectList[index].taskInfo[i].task
            taskDiv.textContent = taskDivContent
            console.log(taskDivContent)
            console.log(i)
            content.appendChild(taskDiv)*/
        }
        //content.appendChild(taskDiv)
        content.appendChild(addTaskButton)
        console.log(projectList[index].taskInfo)
    }else if (e.target && e.target.textContent == 'Add Task'){
        let index = e.target.id.slice(-1)
        let myForm = document.getElementById('myForm')
        let taskForm = document.createElement('div')
        taskForm.setAttribute('id', 'taskForm')
        let task = document.createElement('input')
        task.setAttribute('type', 'text')
        let newProjectDiv = document.getElementById('newProjectDiv')
        task.setAttribute('id', 'task')
        let taskLabel = document.createElement('LABEL')
        taskLabel.htmlFor = task
        taskLabel.textContent = 'Task: '
        taskForm.appendChild(taskLabel)
        taskForm.appendChild(task)
        myForm.insertBefore(taskForm, newProjectDiv)
        let descForm = document.createElement('div')
        descForm.setAttribute('id', 'descForm')
        let desc = document.createElement('input')
        desc.setAttribute('type', 'text')
        desc.setAttribute('id', 'description')
        let descLabel = document.createElement('LABEL')
        descLabel.htmlFor = desc
        descLabel.textContent = 'Description: '
        descForm.appendChild(descLabel)
        descForm.appendChild(desc)
        myForm.insertBefore(descForm, newProjectDiv)
        let dueForm = document.createElement('div')
        dueForm.setAttribute('id', 'dueForm')
        let dueDate = document.createElement('input')
        dueDate.setAttribute('type', 'text')
        dueDate.setAttribute('id', 'dueDate')
        let dueDateLabel = document.createElement('LABEL')
        dueDateLabel.htmlFor = dueDate
        dueDateLabel.textContent = 'Due Date: '
        dueForm.appendChild(dueDateLabel)
        dueForm.appendChild(dueDate)
        myForm.insertBefore(dueForm, newProjectDiv)
        let priorityForm = document.createElement('div')
        priorityForm.setAttribute('id', 'priorityForm')
        let priority = document.createElement('input')
        priority.setAttribute('id', 'priority')
        priority.setAttribute('type', 'text')
        let priorityLabel = document.createElement('LABEL')
        priorityLabel.htmlFor = priority
        priorityLabel.textContent = 'Priority: '
        priorityForm.appendChild(priorityLabel)
        priorityForm.appendChild(priority)
        myForm.insertBefore(priorityForm, newProjectDiv)
        let submitForm = document.createElement('div')
        submitForm.setAttribute('id', 'submitForm')
        let submit = document.createElement('button')
        submit.setAttribute('id', `submitButton${index}`)
        submit.textContent = 'Submit'
        submitForm.appendChild(submit)
        myForm.insertBefore(submitForm, newProjectDiv)
    }else if (e.target && e.target.textContent == 'Submit'){
        submission()
        //console.log(fullList)
        //projectList.push(fullList)
        let index = document.querySelector('[id^="h2"]').id.slice(-1)
        let content = document.getElementById('content')//.id.slice(-1)
        let contentNodeList = document.querySelectorAll('[id^="contentDiv"]')
        let taskIndex = contentNodeList.length - 1
        projectList[index].taskInfo[taskIndex] = (fullList[fullList.length-1])        //add tasks to projects
        myForm.removeChild(taskForm)
        myForm.removeChild(descForm)
        myForm.removeChild(dueForm)
        myForm.removeChild(priorityForm)
        myForm.removeChild(submitForm)
        console.log(projectList)
        //console.log(index)
        //console.log(content)
        //console.log(taskIndex)
        //console.log(fullList)
        //console.log(projectList[index].taskInfo[taskIndex])

    }
})

function removeAllChildNodes(parent){
    while (parent.firstChild){
        parent.removeChild(parent.firstChild)
    }
}

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
    let confirmButtonCheck = document.getElementById('confirmBtn')
    if (!(newProjectDiv.lastChild == confirmButtonCheck)){
//    let newProjectDiv = document.getElementById('newProjectDiv')
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
    newProjectDiv.appendChild(newProjectConfirm)}
    /*let index = fullList.length -1
    let newProject = document.createElement('div')
    newProject.textContent = fullList[index].project
    newProject.setAttribute('id', `newProject${index}`)
    projectsList.appendChild(newProject)*/
    //console.log(fullList[index].project)
}

function clearForm(){
    const task = document.getElementById('task')          //
    const desc = document.getElementById('description')   //
    const due = document.getElementById('dueDate')        // gets values from input boxes
    const priority = document.getElementById('priority')
    task.value = ''
    desc.value = ''
    due.value = ''
    priority.value = ''
    //project.value = ''
}

function addListToPage() {
    const task = document.getElementById('task')          //
    const desc = document.getElementById('description')   //
    const due = document.getElementById('dueDate')        // gets values from input boxes
    const priority = document.getElementById('priority')
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
    let addTaskButton = document.querySelector('[id^="addTaskButton"]')
    content.insertBefore(contentDiv, addTaskButton)
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