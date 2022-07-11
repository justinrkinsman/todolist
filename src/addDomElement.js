import * as buttonFunctions from './buttonFunctions.js'

class Todo {
    constructor(task, description, dueDate, priority) {
        this.task = task;
        this.description = description;
        this.dueDate = dueDate;
        this.priority = priority;
    }
}

export function addListToPage() {
    const task = document.getElementById('task')          //
    const desc = document.getElementById('description')   //
    const due = document.getElementById('dueDate')        // gets values from input boxes
    const priority = document.getElementById('priority')  //
    let list = new Todo(task.value, desc.value, due.value, priority.value)
    let newDiv = document.createElement('div')
    let index = (document.querySelector('[id^="h2"]').id.slice(-1))
    let taskIndex = buttonFunctions.getInfo.projectList[index].taskInfo.length
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
    buttonFunctions.getInfo.content.insertBefore(contentDiv, addTaskButton)
    buttonFunctions.getInfo.fullList.push(list)
}