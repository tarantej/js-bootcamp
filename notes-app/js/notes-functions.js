// Query the DOM

const notesQuery = function(){

    // Select all the elements with querySelectorAll

const para = document.querySelectorAll('p')

// Run forEach function for all elements and show the content of element

para.forEach(function(p) {
    console.log(p.textContent)
})

}

// Add Notes via form

const addNotes = function(){
    
    document.getElementById('AddNoteForm').addEventListener('submit',function(addNoteEvent){
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

    const br = document.createElement('br');

    // Add a class to the newly created element
    newNote.classList.add('notes')

    // New element has the textContent from the input
    newNote.textContent = newNoteText

    // Show the newly created element
    const container = document.querySelector('body').appendChild(newNote) // creates a new paragraph in the body and puts in the text content
    container.appendChild(newNote) // creates a new checkbox in the body and puts in the text content
    container.appendChild(noteLabel);
    container.appendChild(br);
    })

}

