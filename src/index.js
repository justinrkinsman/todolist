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
function findIndex(object){
    index = object.id.slice(-1)
    return index
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
/*const task = document.getElementById('task')          //
const desc = document.getElementById('description')   //
const due = document.getElementById('dueDate')        // gets values from input boxes
const priority = document.getElementById('priority')*/  //
//const project = document.getElementById('project')    //
//const submitBtn = document.getElementById('submit')
const projectsList = document.getElementById('projectsList')
//submitBtn.addEventListener('click', submission)
/*
for (let i = 0; i < 5; ++i){
    window[`deetz${i}`] = `deetz${i}`       //////try this again with projectDeetz
}
console.log(deetz1)
*/
let deetz = []
let editz = []
let projectDeetz = []
let projectEdit = []
document.addEventListener('click', function(e){
    if(e.target && e.target.id.startsWith("detailsBtn")) {
        //console.log(e.target.id)
        if (deetz[index] == 0){
            let detailsDiv = document.createElement('div')
            let index = e.target.id.slice(-1)
            let ogDiv = document.getElementById(`contentDiv${index}`)
            detailsDiv.setAttribute('id', `detailsText${index}`)
            detailsDiv.textContent = `${(fullList[index].description)} ${(fullList[index].dueDate)} ${(fullList[index].priority)}`
            ogDiv.appendChild(detailsDiv)
            deetz[index] = 1
        }else if (deetz[index] == 1){
            let index = e.target.id.slice(-1)
            let ogDiv = document.getElementById(`contentDiv${index}`)
            let detailsDiv = document.getElementById(`detailsText${index}`)
            ogDiv.removeChild(detailsDiv)
            //console.log(ogDiv)
            //console.log(detailsDiv)
            deetz[index] = 0
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
        let h2 = document.querySelector('[id^="h2"]')
        projectIndex = h2.id.slice(-1)
        let index = e.target.id.slice(-1)
        let removeDiv = document.getElementById(`contentDiv${index}`)
        let taskInfoIndex = projectList[projectIndex].taskInfo
        content.removeChild(removeDiv)
        taskInfoIndex.splice(index, 1)
        console.log(index)
        //console.log(projectList[projectIndex].taskInfo[index]/*.task*/)
        console.log(taskInfoIndex)
        //fullList.splice(index, 1)
    }else if (e.target && e.target.id.startsWith('edit')){
        //if (!(newProjectDiv.lastChild == confirmButtonCheck)){
        if (editz == 0){
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
        let content = document.getElementById(`contentDiv${index}`)
        newTaskSubmit.textContent = 'Accept'
        editForm.appendChild(editTask)
        editForm.appendChild(editDesc)
        editForm.appendChild(editDue)
        editForm.appendChild(editPriority)
        //editForm.appendChild(editProject)
        editForm.appendChild(newTaskSubmit)
        content.appendChild(editForm)
        editz = 1
        //}
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
        })} else if (editz == 1){
            let index = e.target.id.slice(-1)
            let content = document.getElementById(`contentDiv${index}`)
            content.removeChild(editForm)
            editz = 0
        }   
    }else if (e.target && e.target.textContent == 'Confirm'){
        //let newProjectDiv = document.getElementById('newProjectDiv')
        //let newProjectForm = document.getElementById('newProjectForm')
        let newProjectName = document.getElementById('newProjectNameInput')
        let newProjectDueDate = document.getElementById('newProjectDueDateInput')
        let newProjectPriority = document.getElementById('newProjectPriorityInput')
        let newProjectListItem = document.createElement('div')
        let projectDetails = document.createElement('button')
        let projectName = document.createElement('div')
        let projectInfo = document.createElement('div')
        let index = projectList.length
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
        let projectsList = document.getElementById('projectsList')
        //console.log(newProjectName.value, newProjectDueDate.value, newProjectPriority.value)
        newProjectDiv.removeChild(newProjectForm)
        newProjectDiv.removeChild(confirmBtn)
        projectInfo.appendChild(projectName)
        projectInfo.appendChild(projectDetails)
        projectInfo.appendChild(projectCheck)
        projectInfo.appendChild(projectEdit)
        projectInfo.appendChild(projectDelete)
        newProjectListItem.appendChild(projectInfo)
        projectsList.appendChild(newProjectListItem)
        let addProject = new Projects(newProjectName.value, newProjectDueDate.value, newProjectPriority.value)
        projectList.push(addProject)
        projectDeetz.splice(index, 0, 0)
        console.log(projectDeetz)
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
        let taskFormDel = document.getElementById('taskForm')
        //console.log(myForm.childNodes[1])
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
    }else if (e.target && e.target.textContent == 'Submit'){
        submission()
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
    }else if (e.target && e.target.id.startsWith('projectDeetz')) {
        let index = e.target.id.slice(-1)
            if (projectDeetz[index] == 0) {
                let index = e.target.id.slice(-1)
                let ogDiv = document.getElementById(`projectName${index}`)
                if (ogDiv.lastChild.id.startsWith('editProjectForm')){
                    let index = e.target.id.slice(-1)
                    let ogDiv = document.getElementById(`projectName${index}`)
                    let projectName = document.getElementById(`editProjectForm${index}`)
                    let projectDetailsDiv = document.createElement('div')
                    projectDetailsDiv.setAttribute('id', `projectDetailsText${index}`)
                    projectDetailsDiv.textContent = `${projectList[index].dueDate} ${projectList[index].priority}`
                    console.log(index)
                    ogDiv.insertBefore(projectDetailsDiv, projectName)
                    projectDeetz[index] = 1
                }else{
                    let projectDetailsDiv = document.createElement('div')
                    let ogDiv = document.getElementById(`projectName${index}`)
                    projectDeetz[index] = 1
                    projectDetailsDiv.setAttribute('id', `projectDetailsText${index}`)
                    projectDetailsDiv.textContent = `${projectList[index].dueDate} ${projectList[index].priority}`
                    ogDiv.appendChild(projectDetailsDiv)
                    projectDeetz[index] = 1
                }
            }else if (projectDeetz[index] == 1){
                findIndex(e.target)
                let ogDiv = document.getElementById(`projectName${index}`)
                let projectDetailsDiv = document.getElementById(`projectDetailsText${index}`)
                ogDiv.removeChild(projectDetailsDiv)
                projectDeetz[index] = 0
            }
    }else if (e.target && e.target.id.startsWith('projectDelete')) {
        findIndex(e.target)
        //console.log(parseInt(index)+4)
        let projectName = document.getElementById(`projectName${index}`)
        let projectsList = document.getElementById('projectsList')
        let content = document.getElementById('content')
        let myForm = document.getElementById('myForm')
        let taskForm = document.getElementById('taskForm')
        projectsList.removeChild(projectName)
        projectList.splice(index, 1)
        //let divs = document.querySelectorAll(`[id$="${parseInt(index)}"`)
        //console.log(divs)
        for (let i = index; i <= projectList.length; i++){
            //console.log(projectsList.children[i])
            let div = document.getElementById(`projectName${i}`)
            let newProjectInfo = document.getElementById(`projectInfo${i}`)
            let newProjectNameTitle = document.getElementById(`projectNameTitle${i}`)
            let newProjectDeetz = document.getElementById(`projectDeetz${i}`)
            let newProjectCheck = document.getElementById(`projectCheck${i}`)
            let newProjectEdit = document.getElementById(`projectEdit${i}`)
            let newProjectDelete = document.getElementById(`projectDelete${i}`)
            projectDeetz.splice(index, 0)
            projectEdit.splice(index, 0)
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
            //div.id += 1
            //console.log(div)
            //console.log(i)
        }
        if (myForm.firstElementChild == taskForm){
            for (let j = 0; j < 6; j++){
                myForm.removeChild(myForm.children[0])
            }
            let children = content.children.length
            for (let i = 0; i < children; i++){
                content.removeChild(content.children[0])
            }
            console.log(content.children)
            projectDeetz.splice(index, 0)
            projectEdit.splice(index, 0)
            console.log("here's the problem")
        }
        else if (content.children[0]){
            //let removeThisChild = content.children[0]
            //let removeThisChildToo = content.children[1]
            let children = content.children.length
            for (let i = 0; i < children; i++){
                content.removeChild(content.children[0])
            }
            console.log(content.children)
            //content.removeChild(removeThisChildToo)
            //content.removeChild(removeThisChild)
            projectDeetz.splice(index, 0)
            projectEdit.splice(index, 0)
            console.log("here's the problem")
            /*}else if (projectsList.children[0] && projectsList.children[1]){
            let removeThisChild = projectsList.children[0]
            let removeThisChildToo = projectsList.children[1]
            projectsList.removeChild(removeThisChildToo)
            //console.log(removeThisChild)
            projectsList.removeChild(removeThisChild)
            projectDeetz = 0
            projectEdit = 0
            console.log("here's the problem")*/
        }/*else if (projectsList.children[0]){
            findIndex(e.target)
            let removeThisChild = projectsList.children[index]
            //projectsList.removeChild(removeThisChild)
            console.log(removeThisChild)
            console.log(projectsList.children)
            projectDeetz = 0
            projectEdit = 0
            console.log("here's the problem")
        }*/
    }else if (e.target && e.target.id.startsWith('projectCheck')) {
        let check = e.target
        if (check.checked){
            let index = e.target.id.slice(-1)
            let projectNameTitle = document.getElementById(`projectNameTitle${index}`)
            let projectDeetzDiv = document.getElementById(`projectDeetz${index}`)
            let projectCheck = document.getElementById(`projectCheck${index}`)
            let projectEditDiv = document.getElementById(`projectEdit${index}`)
            let projectsList = document.getElementById('projectsList')
            console.log(projectsList.children)
            projectNameTitle.style.opacity = '0.3'
            projectDeetzDiv.style.opacity = '0.3'
            projectCheck.style.opacity = '0.3'
            projectEditDiv.style.opacity = '0.3'
            document.getElementById(`projectDeetz${index}`).disabled = true
            document.getElementById(`projectEdit${index}`).disabled = true
            if (projectsList.children[1] && projectsList.children[2]){
                let removeThisChild = projectsList.children[1]
                let removeThisChildToo = projectsList.children[2]
                projectsList.removeChild(removeThisChildToo)
                projectsList.removeChild(removeThisChild)
                projectDeetz = 0
                projectEdit = 0
            }else if (projectsList.children[1]){
                let removeThisChild = projectsList.children[1]
                projectsList.removeChild(removeThisChild)
                projectDeetz = 0
                projectEdit = 0
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
    }else if (e.target && e.target.id.startsWith('projectEdit')){
        if (projectEdit == 0){
            let index = e.target.id.slice(-1)
            let currentProject = document.getElementById(`projectNameTitle${index}`)
            let currentDue = projectList[index].dueDate
            let currentPriority = projectList[index].priority
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
            projectEdit = 1
            newProjectSubmit.addEventListener('click', function(e){
                if (e.target && e.target.textContent == 'Accept'){
                    //let currentProject = document.getElementById(`projectNameTitle${index}`)
                    if (content.children[0]){
                        let currentProjectDetailsText = document.getElementById(`projectDetailsText${index}`)
                        let content = document.getElementById(`h2${index}`)
                        content.textContent = newProject.value
                        currentProjectDetailsText.textContent = newProjectDue.value + ' ' + newProjectPriority.value
                        currentProject.textContent = newProject.value
                        projectList[index].name = newProject.value
                        projectList[index].dueDate = newProjectDue.value
                        projectList[index].priority = newProjectPriority.value
                        console.log(projectList)
                        content.removeChild(editProjectForm)
                        projectEdit = 0
                       // console.log(projectEdit)
                    }else{
                        let currentProjectDetailsText = document.getElementById(`projectDetailsText${index}`)
                        currentProjectDetailsText.textContent = newProjectDue.value + ' ' + newProjectPriority.value
                        currentProject.textContent = newProject.value
                        projectList[index].name = newProject.value
                        projectList[index].dueDate = newProjectDue.value
                        projectList[index].priority = newProjectPriority.value
                        console.log(projectList)
                        content.removeChild(editProjectForm)
                        projectEdit = 0
                    }
                }
            })} else if (projectEdit == 1){
                let index = e.target.id.slice(-1)
                let content = document.getElementById(`projectName${index}`)
                let editProjectForm = document.getElementById(`editProjectForm${index}`)
                content.removeChild(editProjectForm)
                projectEdit = 0
            }
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
        newProjectDiv.appendChild(newProjectConfirm)
    }
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