// Objects in Array

const notes = [
    { title: 'Note 1', body: 'First Note' },
    { title: 'Note 2', body: 'Second Note' },
    { title: 'Note 3', body: 'Third Note' }
]

// Query the DOM

// Select all the elements with querySelectorAll

const para = document.querySelectorAll('p')

// Run forEach function for all elements and show the content of element

para.forEach(function(p) {
    console.log(p.textContent)
})


// Add Click event for button

// const btnTest = document.getElementById('addNote')
// btnTest.addEventListener("click", function (){
//     // console.log('hi')

//     // Add a new element
//     // const newParagraph = document.createElement('p') //  Does not actually create an element in HTML but creates a reference for it
//     // newParagraph.textContent = 'This is a new element from Javascript'
//     // document.querySelector('body').appendChild(newParagraph) // creates a new paragraph in the body and puts in the text content
// });


// Add Notes via form

document.getElementById('AddNoteForm').addEventListener('submit', function(addNoteEvent) {
    // Prevent default behaviour of submit on button click
    addNoteEvent.preventDefault()

    // Show input box value

    const newNoteText = addNoteEvent.target.elements.AddNoteInput.value
        //  const newNote = document.createElement('p') //  Does not actually create an element in HTML but creates a reference for it

    // Change p to checkbox
    const newNote = document.createElement('input')
    newNote.type = 'checkbox';
    newNote.id = 'noteCheck';
    newNote.name = 'noteCheck';
    newNote.value = newNoteText;

    const noteLabel = document.createElement('label')
    noteLabel.htmlFor = newNoteText;
    noteLabel.appendChild(document.createTextNode(newNoteText));

    const br = document.createElement('br');

    // Add a class to the newly created element
    newNote.classList.add('notes')

    // New element has the textContent from the input
    newNote.textContent = newNoteText

    // Show the newly created element
    // const container = document.querySelector('body').appendChild(newNote) // creates a new paragraph in the body and puts in the text content
    // container.appendChild(newNote) // creates a new checkbox in the body and puts in the text content
    // container.appendChild(noteLabel);
    // container.appendChild(br);

    const renderNotes = function(notes) {
        const filterdNotes = notes.filter(function(note) {
            return note.title.toLowerCase()
        })
    }

    // Push notes to Array

    notes.push({
        title: 'New Note',
        body: newNoteText

    })

    console.log(notes)

    //  Save newly created note to localStorage

    localStorage.setItem('notes', JSON.stringify(notes))


})


// Localstorage (Only supports strings)

// Set Item

// localStorage.setItem('location', 'Auckland')

// Get Item

console.log(localStorage.getItem('location'))

// Remove Item

// localStorage.removeItem('location')

// localStorage.clear() // Deletes all values

// JSON (Javascript Object Notation) - Converts JS array objects to string

const sampleNotes = JSON.stringify(notes)

// send newly formed JSON to localStorage

localStorage.setItem('notes', sampleNotes)



// console.log(smpNotes[0].title)

// Integrating localStorage with JavaScript

// Check for existing data

const locstoNotes = localStorage.getItem('notes')

if (locstoNotes !== null) {

    // Convert JSON to JS object

    localStorage.getItem('notes')

    const smpNotes = JSON.parse(locstoNotes)

    console.log(smpNotes)
} else

{
    console.log('notes are empty')
}

// Remove notes

document.querySelector('#removeNotes').addEventListener('click', function(removeNotesEvent) {
    removeNotesEvent.preventDefault();

    // Ask user for confirmation before deleting the notes

    if (confirm("This will delete all the notes. Are you sure ?")) {
        console.log('notes removed')
    }
})

// Event handler for dropdown select (Notes status)

document.querySelector('#filter-notes').addEventListener('change', function(noteStatusEvent) {
    noteStatusEvent.preventDefault();
    console.log(noteStatusEvent.target.value)
})



// Change notes to Tasks and loop them in the project - done 1 example
// Show remaining tasks todo via li element
// Add a li element for each for the tasks
// convert li elements to checkboxes

// Create a checkbox and setup event listener -> "Hide Completed"
// Create new hideCompleted filter (default false)
// Update hideCompleted and re-order the list on checkbox change
// Setup RenderTasks to remove completed items

// Integrating with localStorage

// Delete dummy data
// Get input from user for new notes/todo
// Save the notes / todo in an array
// Pass the data to localStorage
// Render the saved data by reading from localStorage