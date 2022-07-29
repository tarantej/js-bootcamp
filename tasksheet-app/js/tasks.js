const tasks = [{
        date: '20/04/2022',
        task: 'Meeting with Ellie and Carter',
        client: 'NA',
        assigned_by: 'Ellie',
        description: 'First Meeting',
        time_taken: '0 Hour',
        remarks: 'None'
    },

    {
        date: '21/04/2022',
        task: 'Meeting with Ellie and Carter',
        client: 'NA',
        assigned_by: 'Ellie',
        description: 'First Meeting',
        time_taken: '0 Hour',
        remarks: 'None'
    },

    {
        date: '27/04/2022',
        task: 'Meeting with Ellie and Carter',
        client: 'NA',
        assigned_by: 'Ellie',
        description: 'First Meeting',
        time_taken: '0 Hour',
        remarks: 'None'
    },

]

// Create a new task list ul

const newTaskList = document.createElement('ul')

tasks.forEach(function(taskContent) {

    const newTask = document.createElement('li')
    newTask.textContent = taskContent.date
        // const taskNode = document.createTextNode('New Task Item')
        // newTask.appendChild(taskNode)
    newTaskList.appendChild(newTask)

})

document.querySelector('body').appendChild(newTaskList)