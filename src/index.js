//import { taskDetailsFunctionDeetz0 } from "./addDomElement.js";

class Todo {
    constructor(task, description, dueDate, priority) {
        this.task = task;
        this.description = description;
        this.dueDate = dueDate;
        this.priority = priority;
    }
}

class Projects {
    constructor(name, dueDate, priority){
        this.name = name;
        this.dueDate = dueDate;
        this.priority = priority;
        this.taskInfo = []
    }
}

/*function Index(object){
    let index = object.id.slice(-1)
    return index
}*/

let getInfo = (function(){
    return{
        fullList: [],
        projectList: [],
        content: document.getElementById('content'),
        projectsList: document.getElementById('projectsList'),
        deetz: [],
        editz: [],
        projectDeetz: [],
        projectEditz: []
    }
})()

let taskDetailsButton = (function(){
    document.addEventListener('click', function(e){
    let index = e.target.id.slice(-1)
        if(e.target && e.target.id.startsWith('detailsBtn')){
        if (getInfo.deetz[index] == 0){
            taskDetailsFunctionDeetz0(index)
        }else if (getInfo.deetz[index] == 1){
            taskDetailsFunctionDeetz1(index)
        }
        }
    })
})()

function taskDetailsFunctionDeetz0(index){
    let detailsDiv = document.createElement('div')
    let ogDiv = document.getElementById(`contentDiv${index}`)
    let projectIndex = document.querySelector('[id^="h2"]').id.slice(-1)
    let currentDesc = getInfo.projectList[projectIndex].taskInfo[index].description
    let currentDue = getInfo.projectList[projectIndex].taskInfo[index].dueDate
    let currentPriority = getInfo.projectList[projectIndex].taskInfo[index].priority
    if (ogDiv.lastChild.id.startsWith('editForm')){
        taskEditForm(index)
    }else{
        detailsDiv.setAttribute('id', `detailsText${index}`)
        detailsDiv.textContent = `${currentDesc} ${currentDue} ${currentPriority}`
        ogDiv.appendChild(detailsDiv)
        getInfo.deetz[index] = 1}
}

function taskDetailsFunctionDeetz1(index){
    let ogDiv = document.getElementById(`contentDiv${index}`)
    let detailsDiv = document.getElementById(`detailsText${index}`)
    ogDiv.removeChild(detailsDiv)
    getInfo.deetz[index] = 0
}

function taskEditForm(index){
    let detailsDiv = document.createElement('div')
    let ogDiv = document.getElementById(`contentDiv${index}`)
    let editForm = document.getElementById('editForm')
    let projectIndex = document.querySelector('[id^="h2"]').id.slice(-1)
    let currentDesc = getInfo.projectList[projectIndex].taskInfo[index].description
    let currentDue = getInfo.projectList[projectIndex].taskInfo[index].dueDate
    let currentPriority = getInfo.projectList[projectIndex].taskInfo[index].priority
    detailsDiv.setAttribute('id', `detailsText${index}`)
    detailsDiv.textContent = `${currentDesc} ${(currentDue)} ${(currentPriority)}`
    ogDiv.insertBefore(detailsDiv, editForm)
    getInfo.deetz[index] = 1
}

let taskCheckButton = (function(){
    document.addEventListener('click', function(e){
        if (e.target && e.target.id.startsWith('check')){
        let check = e.target
        let index = e.target.id.slice(-1)
        console.log(check)
        if (check.checked){
            taskChecked(index)
        }else{
            taskUnchecked(index)
        }
    }
})
})()

function taskChecked(index){
    let contentDiv = document.getElementById(`contentDiv${index}`)
    let taskName = document.getElementById(`taskContent${index}`)
    let taskDetails = document.getElementById(`detailsBtn${index}`)
    let taskCheck = document.getElementById(`check${index}`)
    let taskEdit = document.getElementById(`editBtn${index}`)
    taskName.style.opacity = '0.3'
    taskDetails.style.opacity = '0.3'
    taskCheck.style.opacity = '0.3'
    taskEdit.style.opacity = '0.3'
    taskDetails.disabled = true
    taskEdit.disabled = true
    if (contentDiv.children[1] && contentDiv.children[2]){
        let removeThisChild = contentDiv.children[1]
        let removeThisChildToo = contentDiv.children[2]
        contentDiv.removeChild(removeThisChildToo)
        contentDiv.removeChild(removeThisChild)
        getInfo.deetz[index] = 0
        getInfo.editz[index] = 0
    }else if (contentDiv.children[1]){
        let removeThisChild = contentDiv.children[1]
        contentDiv.removeChild(removeThisChild)
        getInfo.deetz[index] = 0
        getInfo.editz[index] = 0
    }
}

function taskUnchecked(index){
    let taskName = document.getElementById(`taskContent${index}`)
    let taskDetails = document.getElementById(`detailsBtn${index}`)
    let taskCheck = document.getElementById(`check${index}`)
    let taskEdit = document.getElementById(`editBtn${index}`)
    taskName.style.opacity = '1'
    taskDetails.style.opacity = '1'
    taskCheck.style.opacity = '1'
    taskEdit.style.opacity = '1'
    taskDetails.disabled = false
    taskEdit.disabled = false
}

let taskDeleteButton = (function(){
    document.addEventListener('click', function(e){
    let index = e.target.id.slice(-1)
        if (e.target && e.target.id.startsWith('delete')){
            taskDeleteFunction(index)
        }
    })
})()

function taskDeleteFunction(index){
    let h2 = document.querySelector('[id^="h2"]')
    projectIndex = h2.id.slice(-1)
    let removeDiv = document.getElementById(`contentDiv${index}`)
    let taskInfoIndex = getInfo.projectList[projectIndex].taskInfo
    getInfo.content.removeChild(removeDiv)
    taskInfoIndex.splice(index, 1)
    let deleteTaskEditForm = document.querySelectorAll(`[id^="editForm"]`)
    let deleteTaskDetails = document.querySelectorAll(`[id^="detailsText"]`)
    let myForm = document.getElementById(`myForm`)
    let taskForm = document.getElementById(`taskForm`)
    for (let j = 0; j < deleteTaskEditForm.length; j++){
        let item = deleteTaskEditForm[j]
        let parent = item.parentElement
        parent.removeChild(item)
    }
    for (let k = 0; k < deleteTaskDetails.length; k++){
        let item = deleteTaskDetails[k]
        let parent = item.parentElement
        parent.removeChild(item)
    }
    for (let i = index; i <= taskInfoIndex.length; i++){
        let contentDiv = document.getElementById(`contentDiv${i}`)
        let newLeftSide = document.getElementById(`leftSide${i}`)
        let newTaskContent = document.getElementById(`taskContent${i}`)
        let newDetailsBtn = document.getElementById(`detailsBtn${i}`)
        let newCheck = document.getElementById(`check${i}`)
        let newEditBtn = document.getElementById(`editBtn${i}`)
        let newDelete = document.getElementById(`delete${i}`)
        getInfo.deetz.splice(index, 0)
        getInfo.editz.splice(index, 0)
        getInfo.deetz[i] = 0
        getInfo.editz[i] = 0
        getInfo.deetz[i - 1] = 0
        getInfo.editz[i - 1] = 0
        if (!(contentDiv === null)){    
            let newID = contentDiv.id.slice(0, -1) + `${i - 1}`
            contentDiv.id = newID
            let newLeftSideID = newLeftSide.id.slice(0, -1) + `${i - 1}`
            newLeftSide.id = newLeftSideID
            let newTaskContentID = newTaskContent.id.slice(0, -1) + `${i - 1}`
            newTaskContent.id = newTaskContentID
            let newDetailsBtnID = newDetailsBtn.id.slice(0, -1) + `${i - 1}`
            newDetailsBtn.id = newDetailsBtnID
            let newCheckID = newCheck.id.slice(0, -1) + `${i - 1}`
            newCheck.id = newCheckID
            let newEditBtnID = newEditBtn.id.slice(0, -1) + `${i - 1}`
            newEditBtn.id = newEditBtnID
            let newDeleteID = newDelete.id.slice(0, -1) + `${i - 1}`
            newDelete.id = newDeleteID
        }
    }if (myForm.firstElementChild == taskForm){
        for (let l = 0; l < 5; l++){
            myForm.removeChild(myForm.children[0])
        }
    }
}

let taskEditButton = (function(){
    document.addEventListener('click', function(e){
    if (e.target && e.target.id.startsWith('edit')){
        let index = e.target.id.slice(-1)
        if (getInfo.editz[index] == 0){
            taskEditFunctionEditz0(index)
            document.addEventListener('click', function(e){
            if (e.target && e.target.id == 'newTaskSubmit'){
                newTaskSubmit(index)
            }
        })} else if (getInfo.editz[index] == 1){
            taskEditFunctionEditz1(index)
        }
    }
})
})()

function taskEditFunctionEditz0(index){
    let projectIndex = document.querySelector('[id^="h2"]').id.slice(-1)
    let currentTask = document.getElementById(`taskContent${index}`)
    let currentDesc = getInfo.projectList[projectIndex].taskInfo[index].description
    let currentDue = getInfo.projectList[projectIndex].taskInfo[index].dueDate
    let currentPriority = getInfo.projectList[projectIndex].taskInfo[index].priority
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
    let newTaskLabel = document.createElement('LABEL')
    let newDescLabel = document.createElement('LABEL')
    let newDueLabel = document.createElement('LABEL')
    let newPriorityLabel = document.createElement('LABEL')
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
    let newTaskSubmit = document.createElement('button')
    let content = document.getElementById(`contentDiv${index}`)
    newTaskSubmit.textContent = 'Accept'
    newTaskSubmit.setAttribute('id', 'newTaskSubmit')
    editForm.appendChild(editTask)
    editForm.appendChild(editDesc)
    editForm.appendChild(editDue)
    editForm.appendChild(editPriority)
    editForm.appendChild(newTaskSubmit)
    content.appendChild(editForm)
    getInfo.editz[index] = 1
}

function newTaskSubmit(index){
    let currentTask = document.getElementById(`taskContent${index}`)
    let newTask = document.getElementById(`newTaskInput${index}`)
    let newDesc = document.getElementById(`newDescInput${index}`)
    let newDue = document.getElementById(`newDueInput${index}`)
    let newPriority = document.getElementById(`newPriorityInput${index}`)
    currentTask.textContent = newTask.value
    getInfo.fullList[index].task = newTask.value
    getInfo.fullList[index].description = newDesc.value      
    getInfo.fullList[index].dueDate = newDue.value      
    getInfo.fullList[index].priority = newPriority.value
    let detailsText = document.getElementById(`detailsText${index}`)
    let content = document.getElementById(`contentDiv${index}`)
    content.removeChild(editForm)
    getInfo.editz[index] = 0
    getInfo.deetz[index] = 0
    content.removeChild(detailsText)
}

function taskEditFunctionEditz1(index){
    let content = document.getElementById(`contentDiv${index}`)
    let editForm = document.getElementById(`editForm`)
    content.removeChild(editForm)
    getInfo.editz[index] = 0
}

let confirmButton = (function(){
    document.addEventListener('click', function(e){
    if (e.target && e.target.textContent == 'Confirm'){
        confirmButtonFunction()
    }
})
})()

function confirmButtonFunction(){
    let newProjectName = document.getElementById('newProjectNameInput')
    let newProjectDueDate = document.getElementById('newProjectDueDateInput')
    let newProjectPriority = document.getElementById('newProjectPriorityInput')
    let newProjectListItem = document.createElement('div')
    let projectDetails = document.createElement('button')
    let projectName = document.createElement('div')
    let projectInfo = document.createElement('div')
    let index = getInfo.projectList.length
    projectInfo.setAttribute('id', `projectInfo${index}`)
    projectName.textContent = newProjectName.value
    projectName.setAttribute('id', `projectNameTitle${index}`)
    projectDetails.setAttribute('id', `projectDeetz${index}`)
    projectDetails.textContent = 'Details'
    let projectCheck = document.createElement('input')
    projectCheck.setAttribute('type', 'checkbox')
    projectCheck.setAttribute('id', `projectCheck${index}`)
    let projectEdit = document.createElement('button')
    projectEdit.setAttribute('id', `projectEdit${index}`)
    projectEdit.textContent = 'Edit'
    let projectDelete = document.createElement('button')
    projectDelete.setAttribute('id', `projectDelete${index}`)
    projectDelete.textContent = 'Delete'
    newProjectListItem.setAttribute('id', `projectName${index}`)
    newProjectDiv.removeChild(newProjectForm)
    newProjectDiv.removeChild(confirmBtn)
    projectInfo.appendChild(projectName)
    projectInfo.appendChild(projectDetails)
    projectInfo.appendChild(projectCheck)
    projectInfo.appendChild(projectEdit)
    projectInfo.appendChild(projectDelete)
    newProjectListItem.appendChild(projectInfo)
    getInfo.projectsList.appendChild(newProjectListItem)
    let addProject = new Projects(newProjectName.value, newProjectDueDate.value, newProjectPriority.value)
    getInfo.projectList.push(addProject)
    getInfo.projectDeetz.splice(index, 0, 0)
    getInfo.projectEditz.splice(index, 0, 0)
}

let projectNameEvent = (function(){
    document.addEventListener('click', function(e){
    if (e.target && e.target.id.startsWith('projectName')){
        let index = e.target.id.slice(-1)
        projectNameEventFunction(index)
    }
})
})()

function projectNameEventFunction(index){
    let addTaskButton = document.createElement('button')
    addTaskButton.setAttribute('id', `addTaskButton${index}`)
    addTaskButton.textContent = 'Add Task'
    let projectHeader = document.createElement('h2')
    let taskDiv = document.createElement('div')
    projectHeader.textContent = getInfo.projectList[index].name
    projectHeader.setAttribute('id', `h2${index}`)
    removeAllChildNodes(getInfo.content)
    let taskIndex = getInfo.projectList[index].taskInfo.length - 1
    let taskDivContent = getInfo.projectList[index].taskInfo
    taskDiv.textContent = taskDivContent
    getInfo.content.appendChild(projectHeader)
    for (let i = 0; i <= taskIndex; i++){
        let element = document.createElement('div')
        element.textContent = getInfo.projectList[index].taskInfo[i].task
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
        getInfo.content.insertBefore(contentDiv, addTaskButton)
    }
    getInfo.content.appendChild(addTaskButton)
    console.log(getInfo.projectList[index].taskInfo)
}

let addTaskButton = (function(){
    document.addEventListener('click', function(e){
    if (e.target && e.target.textContent == 'Add Task'){
        let index = e.target.id.slice(-1)
        addTaskFunction(index)
    }      
})
})()

function addTaskFunction(index){
    let myForm = document.getElementById('myForm')
    let taskFormDel = document.getElementById('taskForm')
    if (!(myForm.childNodes[1] == taskFormDel)){
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
    }
}

let submitButton = (function(){
    document.addEventListener('click', function(e){
    if (e.target && e.target.textContent == 'Submit'){
        submission()
        let index = document.querySelector('[id^="h2"]').id.slice(-1)
        submitButtonFunction(index)
    }
})
})()

function submitButtonFunction(index){
    let taskIndex = getInfo.projectList[index].taskInfo.length
    getInfo.projectList[index].taskInfo[taskIndex] = (getInfo.fullList[getInfo.fullList.length-1])//adds tasks to projects
    myForm.removeChild(taskForm)
    myForm.removeChild(descForm)
    myForm.removeChild(dueForm)
    myForm.removeChild(priorityForm)
    myForm.removeChild(submitForm)
    getInfo.deetz.splice(index, 0, 0)
    getInfo.editz.splice(index, 0, 0)
}

let projectDetailsButton = (function(){
    document.addEventListener('click', function(e){
    if (e.target && e.target.id.startsWith('projectDeetz')) {
        let index = e.target.id.slice(-1)
            if (getInfo.projectDeetz[index] == 0) {
                projectDetailsFunctionDeetz0(index)
            }else if (getInfo.projectDeetz[index] == 1){
                projectDetailsFunctionDeetz1(index)
            }
        }
    })
})()

function projectDetailsFunctionDeetz0(index){
    let ogDiv = document.getElementById(`projectName${index}`)
    if (ogDiv.lastChild.id.startsWith('editProjectForm')){
        let ogDiv = document.getElementById(`projectName${index}`)
        let projectName = document.getElementById(`editProjectForm${index}`)
        let projectDetailsDiv = document.createElement('div')
        projectDetailsDiv.setAttribute('id', `projectDetailsText${index}`)
        projectDetailsDiv.textContent = `${getInfo.projectList[index].dueDate} ${getInfo.projectList[index].priority}`
        console.log(index)
        ogDiv.insertBefore(projectDetailsDiv, projectName)
        getInfo.projectDeetz[index] = 1
    }else{
        let projectDetailsDiv = document.createElement('div')
        let ogDiv = document.getElementById(`projectName${index}`)
        getInfo.projectDeetz[index] = 1
        projectDetailsDiv.setAttribute('id', `projectDetailsText${index}`)
        projectDetailsDiv.textContent = `${getInfo.projectList[index].dueDate} ${getInfo.projectList[index].priority}`
        ogDiv.appendChild(projectDetailsDiv)
        getInfo.projectDeetz[index] = 1
    }
}

function projectDetailsFunctionDeetz1(index){
    let ogDiv = document.getElementById(`projectName${index}`)
    let projectDetailsDiv = document.getElementById(`projectDetailsText${index}`)
    ogDiv.removeChild(projectDetailsDiv)
    getInfo.projectDeetz[index] = 0
}
    
let projectDeleteButton = (function(){
    document.addEventListener('click', function(e){
    if (e.target && e.target.id.startsWith('projectDelete')) {
        let index = e.target.id.slice(-1)
        projectDeleteFunction(index)
    }
})
})()

function projectDeleteFunction(index){
    let projectName = document.getElementById(`projectName${index}`)
    let myForm = document.getElementById('myForm')
    let taskForm = document.getElementById('taskForm')
    let deleteEditForm = document.querySelectorAll(`[id^="editProjectForm"]`)
    let deleteDetailsDiv = document.querySelectorAll(`[id^="projectDetailsText"]`)
    console.log(getInfo.projectList.length)
    console.log(deleteEditForm)
    console.log(deleteDetailsDiv)
    for (let j = 0; j < deleteEditForm.length; j++){
        let item = deleteEditForm[j]
        let parent = item.parentElement
        parent.removeChild(item)
    }
    for (let k = 0; k < deleteDetailsDiv.length; k++){
        let item = deleteDetailsDiv[k]
        let parent = item.parentElement
        parent.removeChild(item)
    }
    getInfo.projectsList.removeChild(projectName)
    getInfo.projectList.splice(index, 1)
    for (let i = index; i <= getInfo.projectList.length; i++){
        let div = document.getElementById(`projectName${i}`)
        let newProjectInfo = document.getElementById(`projectInfo${i}`)
        let newProjectNameTitle = document.getElementById(`projectNameTitle${i}`)
        let newProjectDeetz = document.getElementById(`projectDeetz${i}`)
        let newProjectCheck = document.getElementById(`projectCheck${i}`)
        let newProjectEdit = document.getElementById(`projectEdit${i}`)
        let newProjectDelete = document.getElementById(`projectDelete${i}`)
        getInfo.projectDeetz.splice(index, 0)
        getInfo.projectEditz.splice(index, 0)
        getInfo.projectDeetz[i] = 0
        getInfo.projectEditz[i] = 0
        if (!(div === null)){
            let newID = div.id.slice(0, -1) + `${i - 1}`
            div.id = newID
            let newProjectInfoID = newProjectInfo.id.slice(0, -1) + `${i - 1}`
            newProjectInfo.id = newProjectInfoID
            let newProjectNameTitleID = newProjectNameTitle.id.slice(0, -1) + `${i - 1}`
            newProjectNameTitle.id = newProjectNameTitleID
            let newProjectDeetzID = newProjectDeetz.id.slice(0, -1) + `${i - 1}`
            newProjectDeetz.id = newProjectDeetzID
            let newProjectCheckID = newProjectCheck.id.slice(0, -1) + `${i - 1}`
            newProjectCheck.id = newProjectCheckID
            let newProjectEditID = newProjectEdit.id.slice(0, -1) + `${i - 1}`
            newProjectEdit.id = newProjectEditID
            let newProjectDeleteID = newProjectDelete.id.slice(0, -1) + `${i - 1}`
            newProjectDelete.id = newProjectDeleteID
        }
    }
    if (myForm.firstElementChild == taskForm){
        for (let j = 0; j < 5; j++){
            myForm.removeChild(myForm.children[0])
        }
        let children = getInfo.content.children.length
        for (let i = 0; i < children; i++){
            getInfo.content.removeChild(getInfo.content.children[0])
        }
        console.log(getInfo.content.children)
        getInfo.projectDeetz.splice(index, 0)
        getInfo.projectEditz.splice(index, 0)
    }
    else if (getInfo.content.children[0]){
        let children = getInfo.content.children.length
        for (let i = 0; i < children; i++){
            getInfo.content.removeChild(getInfo.content.children[0])
        }
        console.log(getInfo.content.children)
        getInfo.projectDeetz.splice(index, 0)
        getInfo.projectEditz.splice(index, 0)
    }
}

let projectCheckbox = (function(){
    document.addEventListener('click', function(e){
    if (e.target && e.target.id.startsWith('projectCheck')) {
        let check = e.target
        if (check.checked){
            let index = e.target.id.slice(-1)
            let projectNameTitle = document.getElementById(`projectNameTitle${index}`)
            let projectDeetzDiv = document.getElementById(`projectDeetz${index}`)
            let projectCheck = document.getElementById(`projectCheck${index}`)
            let projectEditDiv = document.getElementById(`projectEdit${index}`)
            let projectName = document.getElementById(`projectName${index}`)
            console.log(getInfo.projectsList.children)
            projectNameTitle.style.opacity = '0.3'
            projectDeetzDiv.style.opacity = '0.3'
            projectCheck.style.opacity = '0.3'
            projectEditDiv.style.opacity = '0.3'
            document.getElementById(`projectDeetz${index}`).disabled = true
            document.getElementById(`projectEdit${index}`).disabled = true
            if (projectName.children[1] && projectName.children[2]){
                let removeThisChild = projectName.children[1]
                let removeThisChildToo = projectName.children[2]
                projectName.removeChild(removeThisChildToo)
                projectName.removeChild(removeThisChild)
                getInfo.projectDeetz[index] = 0
                getInfo.projectEditz[index] = 0
            }else if (projectName.children[1]){
                let removeThisChild = projectName.children[1]
                projectName.removeChild(removeThisChild)
                getInfo.projectDeetz[index] = 0
                getInfo.projectEditz[index] = 0
            }
        }else{
            let index = e.target.id.slice(-1)
            let projectNameTitle = document.getElementById(`projectNameTitle${index}`)
            let projectDeetzDiv = document.getElementById(`projectDeetz${index}`)
            let projectCheck = document.getElementById(`projectCheck${index}`)
            let projectEditDiv = document.getElementById(`projectEdit${index}`)
            projectNameTitle.style.opacity = '1'
            projectDeetzDiv.style.opacity = '1'
            projectCheck.style.opacity = '1'
            projectEditDiv.style.opacity = '1'
            document.getElementById(`projectDeetz${index}`).disabled = false
            document.getElementById(`projectEdit${index}`).disabled = false
        }
    }
})
})()

let projectEditButton = (function(){
    document.addEventListener('click', function(e){
    if (e.target && e.target.id.startsWith('projectEdit')){
        let index = e.target.id.slice(-1)
        console.log(getInfo.projectEditz)
        if (getInfo.projectEditz[index] == 0){
            let currentProject = document.getElementById(`projectNameTitle${index}`)
            let currentDue = getInfo.projectList[index].dueDate
            let currentPriority = getInfo.projectList[index].priority
            let newProject = document.createElement('input')
            newProject.setAttribute('type', 'text')
            newProject.setAttribute('id', `newTaskInput${index}`)
            newProject.defaultValue = currentProject.textContent
            let editProjectForm = document.createElement('div')
            editProjectForm.setAttribute('id', `editProjectForm${index}`)
            let editProjectName = document.createElement('div')
            let editProjectDue = document.createElement('div')
            let editProjectPriority = document.createElement('div')
            let newProjectNameLabel = document.createElement('LABEL')
            let newProjectDueLabel = document.createElement('label')
            let newProjectPriorityLabel = document.createElement('label')
            newProjectNameLabel.htmlFor = newProject
            newProjectNameLabel.textContent = 'Project'
            editProjectName.appendChild(newProject)
            editProjectName.appendChild(newProjectNameLabel)
            let newProjectDue = document.createElement('input')
            newProjectDue.setAttribute('type', 'text')
            newProjectDue.setAttribute('id', `newProjectDueInput${index}`)
            newProjectDue.defaultValue = currentDue
            newProjectDueLabel.htmlFor = newProjectDue
            newProjectDueLabel.textContent = 'Due Date'
            editProjectDue.appendChild(newProjectDue)
            editProjectDue.appendChild(newProjectDueLabel)
            let newProjectPriority = document.createElement('input')
            newProjectPriority.setAttribute('type', 'input')
            newProjectPriority.setAttribute('id', `newPriorityInput${index}`)
            newProjectPriority.defaultValue = currentPriority
            newProjectPriorityLabel.htmlFor = newProjectPriority
            newProjectPriorityLabel.textContent = 'Priority'
            editProjectPriority.appendChild(newProjectPriority)
            editProjectPriority.appendChild(newProjectPriorityLabel)
            let newProjectSubmit = document.createElement('button')
            let content = document.getElementById(`projectName${index}`)
            newProjectSubmit.textContent = 'Accept'
            editProjectForm.appendChild(editProjectName)
            editProjectForm.appendChild(editProjectDue)
            editProjectForm.appendChild(editProjectPriority)
            editProjectForm.appendChild(newProjectSubmit)
            content.appendChild(editProjectForm)
            getInfo.projectEditz[index] = 1
            newProjectSubmit.addEventListener('click', function(e){
                if (e.target && e.target.textContent == 'Accept'){    //Split here
                    let divContent = document.getElementById('content')
                    console.log(divContent)
                    if (!(divContent.children[0])){
                        currentProject.textContent = newProject.value
                        getInfo.projectList[index].name = newProject.value
                        getInfo.projectList[index].dueDate = newProjectDue.value
                        getInfo.projectList[index].priority = newProjectPriority.value
                        console.log(getInfo.projectList)
                        content.removeChild(editProjectForm)
                        getInfo.projectEditz[index] = 0
                    }else{
                        let currentProjectDetailsText = document.getElementById(`projectDetailsText${index}`)
                        let contentH2 = document.getElementById(`h2${index}`)
                        contentH2.textContent = newProject.value
                        currentProjectDetailsText.textContent = newProjectDue.value + ' ' + newProjectPriority.value
                        currentProject.textContent = newProject.value
                        getInfo.projectList[index].name = newProject.value
                        getInfo.projectList[index].dueDate = newProjectDue.value
                        getInfo.projectList[index].priority = newProjectPriority.value
                        console.log(getInfo.projectList)
                        content.removeChild(editProjectForm)
                        getInfo.projectEditz[index] = 0
                    }
                }
            })} else if (getInfo.projectEditz[index] == 1){
                let content = document.getElementById(`projectName${index}`)
                let editProjectForm = document.getElementById(`editProjectForm${index}`)
                content.removeChild(editProjectForm)
                getInfo.projectEditz[index] = 0
            }        
    }
})
})()

function removeAllChildNodes(parent){
    while (parent.firstChild){
        parent.removeChild(parent.firstChild)
    }
}

function submission() {
    addListToPage()
    clearForm()
}

let newProjectBtn = document.getElementById('newProjectBtn')
newProjectBtn.addEventListener('click', newProject)

function newProject(){
    let newProjectDiv = document.getElementById('newProjectDiv')
    let confirmButtonCheck = document.getElementById('confirmBtn')
    if (!(newProjectDiv.lastChild == confirmButtonCheck)){
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
    }
}

function clearForm(){
    const task = document.getElementById('task')          //
    const desc = document.getElementById('description')   //
    const due = document.getElementById('dueDate')        // gets values from input boxes
    const priority = document.getElementById('priority')  //
    task.value = ''
    desc.value = ''
    due.value = ''
    priority.value = ''
}

function addListToPage() {
    const task = document.getElementById('task')          //
    const desc = document.getElementById('description')   //
    const due = document.getElementById('dueDate')        // gets values from input boxes
    const priority = document.getElementById('priority')  //
    let list = new Todo(task.value, desc.value, due.value, priority.value)
    let newDiv = document.createElement('div')
    let index = (document.querySelector('[id^="h2"]').id.slice(-1))
    console.log(getInfo.projectList[index].taskInfo.length)
    let taskIndex = getInfo.projectList[index].taskInfo.length
    newDiv.setAttribute('id', `taskContent${taskIndex}`)
    newDiv.textContent = (`${list.task}`)
    let detailsBtn = document.createElement('button')
    detailsBtn.setAttribute('id', `detailsBtn${taskIndex}`)
    detailsBtn.textContent = "Details"
    let check = document.createElement('input')
    check.setAttribute('type', 'checkbox')
    check.setAttribute('id', `check${taskIndex}`)
    let editBtn = document.createElement('button')
    editBtn.setAttribute('id', `editBtn${taskIndex}`)
    editBtn.textContent = 'Edit'
    let delBtn = document.createElement('button')
    delBtn.setAttribute('id', `delete${taskIndex}`)
    delBtn.textContent = 'Delete'
    let contentDiv = document.createElement('div')
    contentDiv.setAttribute('id', `contentDiv${taskIndex}`)
    let leftSide = document.createElement('div')
    leftSide.setAttribute('id', `leftSide${taskIndex}`)
    leftSide.appendChild(newDiv)
    leftSide.appendChild(detailsBtn)
    leftSide.appendChild(check)
    leftSide.appendChild(editBtn)
    leftSide.appendChild(delBtn)
    contentDiv.appendChild(leftSide)
    let addTaskButton = document.querySelector('[id^="addTaskButton"]')
    getInfo.content.insertBefore(contentDiv, addTaskButton)
    getInfo.fullList.push(list)
}

let form = document.getElementById('myForm');
function handleForm(event) { event.preventDefault(); }
form.addEventListener('submit', handleForm)