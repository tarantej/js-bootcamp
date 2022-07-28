// Objects in Array

// const notes = [
//             {title:'Note 1',body:'First Note'},
//             {title:'Note 2',body:'Second Note'},
//             {title:'Note 3',body:'Third Note'}
//         ]

const tasks = [{
        date: '21/04/2022',
        task: 'Meeting with Ellie and Carter',
        client: 'NA',
        assigned_by: 'Ellie',
        description: 'First Meeting',
        time_taken: '1 Hour',
        remarks: 'None'
    },

]

// Query the DOM

// Select all the elements with querySelectorAll

const para = document.querySelectorAll('p')

// Run forEach function for all elements and show the content of element

para.forEach(function(p) {
    console.log(p.textContent)
})

// Create a new task list ul

tasks.forEach(function() {
    const newTaskList = document.createElement('ul')
    const newTask = document.createElement('li')
    const taskNode = document.createTextNode('New Task Item')
    newTask.appendChild(taskNode)
    newTaskList.appendChild(newTask)
    document.querySelector('body').appendChild(newTaskList)
})



// Add a new element
const newParagraph = document.createElement('p') //  Does not actually create an element in HTML but creates a reference for it
newParagraph.textContent = 'This is a new element from Javascript'
document.querySelector('body').appendChild(newParagraph) // creates a new paragraph in the body and puts in the text content






// Change notes to Tasks and loop them in the project - done 1 example
// Show remaining tasks todo via li element
// Add a li element for each for the tasks