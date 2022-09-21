// Objects in Array

// const notes = [
//             {title:'Note 1',body:'First Note'},
//             {title:'Note 2',body:'Second Note'},
//             {title:'Note 3',body:'Third Note'}
//         ]

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

document.getElementById('AddNoteForm').addEventListener('submit',function(addNoteEvent){
    // Prevent default behaviour of submit on button click
    addNoteEvent.preventDefault()

    // Show input box value

    const newNoteText = addNoteEvent.target.elements.AddNoteInput.value

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
    const container = document.querySelector('body')
    container.appendChild(newNote) // creates a new checkbox in the body and puts in the text content
    container.appendChild(noteLabel);
    container.appendChild(br);

    // const carCheck = document.createElement('input');
    // carCheck.type = 'checkbox';
    // carCheck.id = 'car';
    // carCheck.name = 'interest';
    // carCheck.value = 'car';
 
    // const carLabel = document.createElement('label')
    // carLabel.htmlFor = 'car';
    // carLabel.appendChild(document.createTextNode('Car'));
 
    
    // const container = document.querySelector('body');
    // container.appendChild(carCheck);
    // container.appendChild(carLabel);
    // container.appendChild(br);

})

// Remove notes

document.querySelector('#removeNotes').addEventListener('click',function(removeNotesEvent){
    removeNotesEvent.preventDefault();

    // Ask user for confirmation before deleting the notes

    if (confirm("This will delete all the notes. Are you sure ?")) {
        document.querySelectorAll('.notes').forEach(function(note){
            // console.log(note.textContent)
            note.remove();
        })

    }
})

// Event handler for dropdown select (Notes status)

document.querySelector('#filter-notes').addEventListener('change',function(noteStatusEvent){
    noteStatusEvent.preventDefault();
    console.log(noteStatusEvent.target.value)
})






// Create a form with a single input - done
// Setup a submit hadnleer and disable the default action - done
// Add a new item to the array and re-render the application
// Add a li element for each for the notes
// convert li elements to checkboxes
// Change notes to Tasks and loop them in the project
// Show remaining tasks todo via li element