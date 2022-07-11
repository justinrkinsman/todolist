function taskDetailsFunction(){
        console.log('it works')
    /*if (getInfo.deetz[index] == 0){
            let detailsDiv = document.createElement('div')
            let ogDiv = document.getElementById(`contentDiv${index}`)
            let projectIndex = document.querySelector('[id^="h2"]').id.slice(-1)
            let currentDesc = getInfo.projectList[projectIndex].taskInfo[index].description
            let currentDue = getInfo.projectList[projectIndex].taskInfo[index].dueDate
            let currentPriority = getInfo.projectList[projectIndex].taskInfo[index].priority
            if (ogDiv.lastChild.id.startsWith('editForm')){
                let ogDiv = document.getElementById(`contentDiv${index}`)
                let editForm = document.getElementById('editForm')
                detailsDiv.setAttribute('id', `detailsText${index}`)
                detailsDiv.textContent = `${currentDesc} ${(currentDue)} ${(currentPriority)}`
                ogDiv.insertBefore(detailsDiv, editForm)
                getInfo.deetz[index] = 1
            }else{
                detailsDiv.setAttribute('id', `detailsText${index}`)
                detailsDiv.textContent = `${currentDesc} ${currentDue} ${currentPriority}`
                ogDiv.appendChild(detailsDiv)
                getInfo.deetz[index] = 1}
        }else if (getInfo.deetz[index] == 1){
            let ogDiv = document.getElementById(`contentDiv${index}`)
            let detailsDiv = document.getElementById(`detailsText${index}`)
            ogDiv.removeChild(detailsDiv)
            getInfo.deetz[index] = 0
        }*/
        }

export {taskDetailsFunction}