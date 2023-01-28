// Add Click event for button

const btnTest = document.getElementById('testBtn')
btnTest.addEventListener("click", function (){
    // console.log('hi')

    // Add a new element
    // const newParagraph = document.createElement('p') //  Does not actually create an element in HTML but creates a reference for it
    // newParagraph.textContent = 'This is a new element from Javascript'
    // document.querySelector('body').appendChild(newParagraph) // creates a new paragraph in the body and puts in the text content
});


// Test Function

function testFunc(){
        document.getElementById('testBtn').addEventListener('click', function() {
            console.log('Test Function call')
        
        })
    }

// Add Notes via form

// const addNotes = function(){
//     document.getElementById('addNote').addEventListener('submit', function(addNoteEvent) {
//         // Prevent default behaviour of submit on button click
//         addNoteEvent.preventDefault()
    
//         console.log('Event fire from AddNotes')
    
//     })
// }