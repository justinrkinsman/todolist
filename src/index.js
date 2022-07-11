import * as buttonFunctions from "./buttonFunctions.js";
import * as addDomElements from "./addDomElement.js";

let taskDetailsButton = (function(){
    document.addEventListener('click', function(e){
    let index = e.target.id.slice(-1)
        if(e.target && e.target.id.startsWith('detailsBtn')){
        if (buttonFunctions.getInfo.deetz[index] == 0){
            buttonFunctions.taskDetailsFunctionDeetz0(index)
        }else if (buttonFunctions.getInfo.deetz[index] == 1){
            buttonFunctions.taskDetailsFunctionDeetz1(index)
        }
        }
    })
})()

let taskCheckButton = (function(){
    document.addEventListener('click', function(e){
        if (e.target && e.target.id.startsWith('check')){
        let check = e.target
        let index = e.target.id.slice(-1)
        console.log(check)
        if (check.checked){
            buttonFunctions.taskChecked(index)
        }else{
            buttonFunctions.taskUnchecked(index)
        }
    }
})
})()

let taskDeleteButton = (function(){
    document.addEventListener('click', function(e){
    let index = e.target.id.slice(-1)
        if (e.target && e.target.id.startsWith('delete')){
            buttonFunctions.taskDeleteFunction(index)
        }
    })
})()

let taskEditButton = (function(){
    document.addEventListener('click', function(e){
    if (e.target && e.target.id.startsWith('edit')){
        let index = e.target.id.slice(-1)
        if (buttonFunctions.getInfo.editz[index] == 0){
            buttonFunctions.taskEditFunctionEditz0(index)
            document.addEventListener('click', function(e){
            if (e.target && e.target.id == 'newTaskSubmit'){
                buttonFunctions.newTaskSubmit(index)
            }
        })} else if (buttonFunctions.getInfo.editz[index] == 1){
            buttonFunctions.taskEditFunctionEditz1(index)
        }
    }
})
})()

let confirmButton = (function(){
    document.addEventListener('click', function(e){
    if (e.target && e.target.textContent == 'Confirm'){
        buttonFunctions.confirmButtonFunction()
    }
})
})()

let projectNameEvent = (function(){
    document.addEventListener('click', function(e){
    if (e.target && e.target.id.startsWith('projectName')){
        let index = e.target.id.slice(-1)
        buttonFunctions.projectNameEventFunction(index)
    }
})
})()

let addTaskButton = (function(){
    document.addEventListener('click', function(e){
    if (e.target && e.target.textContent == 'Add Task'){
        let index = e.target.id.slice(-1)
        buttonFunctions.addTaskFunction(index)
    }      
})
})()

let submitButton = (function(){
    document.addEventListener('click', function(e){
    if (e.target && e.target.textContent == 'Submit'){
        submission()
        let index = document.querySelector('[id^="h2"]').id.slice(-1)
        buttonFunctions.submitButtonFunction(index)
    }
})
})()

let projectDetailsButton = (function(){
    document.addEventListener('click', function(e){
    if (e.target && e.target.id.startsWith('projectDeetz')) {
        let index = e.target.id.slice(-1)
            if (buttonFunctions.getInfo.projectDeetz[index] == 0) {
                buttonFunctions.projectDetailsFunctionDeetz0(index)
            }else if (buttonFunctions.getInfo.projectDeetz[index] == 1){
                buttonFunctions.projectDetailsFunctionDeetz1(index)
            }
        }
    })
})()
    
let projectDeleteButton = (function(){
    document.addEventListener('click', function(e){
    if (e.target && e.target.id.startsWith('projectDelete')) {
        let index = e.target.id.slice(-1)
        buttonFunctions.projectDeleteFunction(index)
    }
})
})()

let projectCheckbox = (function(){
    document.addEventListener('click', function(e){
    if (e.target && e.target.id.startsWith('projectCheck')) {
        let check = e.target
        let index = e.target.id.slice(-1)
        if (check.checked){
            buttonFunctions.projectChecked(index)
        }else{
            buttonFunctions.projectUnchecked(index)
        }
    }
})
})()

let projectEditButton = (function(){
    document.addEventListener('click', function(e){
    if (e.target && e.target.id.startsWith('projectEdit')){
        let index = e.target.id.slice(-1)
        if (buttonFunctions.getInfo.projectEditz[index] == 0){
            buttonFunctions.projectEditEditz0(index)
            document.addEventListener('click', function(e){
                if (e.target && e.target.textContent == 'Accept'){
                    buttonFunctions.projectEditAccept(index)
                }
            })} else if (buttonFunctions.getInfo.projectEditz[index] == 1){
                    buttonFunctions.projectEditEditz1(index)
            }        
    }
})
})()

function submission() {
    addDomElements.addListToPage()
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

let form = document.getElementById('myForm');
function handleForm(event) { event.preventDefault(); }
form.addEventListener('submit', handleForm)