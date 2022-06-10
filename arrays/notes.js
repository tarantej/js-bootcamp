// The Array object enables storing a collection of multiple items under a single variable name, and has members for performing common array operations.

// JavaScript arrays are resizable and can contain a mix of different data types.

// JavaScript arrays are not associative arrays and so, array elements cannot be accessed using strings as indexes, but must be accessed using integers as indexes.

// JavaScript arrays are zero-indexed: the first element of an array is at index 0, the second is at index 1, and so on — and the last element is at the value of the array's length property minus 1.

const notes = ['Note 1','Note 2', 'Note 3']

// Length of array

// console.log(notes.length)

// Access specific item in the array

// console.log(notes[1]) // Shows result Note 2 as array is a zero indexed. the first element of an array is at index 0, the second is at index 1, and so on — and the last element is at the value of the array's length property minus 1.

// Manupilating Arrays with Methods

// push() - Adds an item to the array

// notes.push('Note 4') // Adds a new array item to the last index in the array (notes[3])

// pop() - removes the item from the array

// notes.pop() //  Removes the item 'Note 4' from the array

// shift() - Removes the first item from the array

// unshift() - Adds an item to the beginning

// splice() - The splice() method changes the contents of an array by removing or replacing existing elements and/or adding new elements in place

// splice(starting index, number of items to remove) - for removing items

// splice(starting index, 0 , New item) - For adding new items

// splice(starting index, number of items to remove , New Item) - for replacing items

/**
 * const months = ['Jan', 'March', 'April', 'June'];
    months.splice(1, 0, 'Feb');
// inserts at index 1
    console.log(months);
// expected output: Array ["Jan", "Feb", "March", "April", "June"]

months.splice(4, 1, 'May');
// replaces 1 element at index 4
console.log(months);
// expected output: Array ["Jan", "Feb", "March", "April", "May"]
 * 
 * 
 */

// Reading values from bracket notation

// console.log(notes[0]) //    Reads the first array item

// Looping through the arrays

// forEach()

// Callback function - When we call a function inside another function

// Callback function gets called with arguments

// notes.forEach(function(item, index){
//     console.log(index)
//     console.log(item)
// })

// The For Loop - Does not require us to have pre made array data
// Helps to run a code specific number of times, Unlike foreach method it does not need to have an explicit array declared in order to use it

// for(/*Initializor, Condition, Expression */){
    
// }

// for(let count = 0; count <= 10; count++){
//     console.log(count)
// }

// Searching in an array

// indexOf() returns array location of the item specified. if the item returns value of -1, the item was not found

// Objects in Array

const notes2 = [{title:'Note 1',body:'First Note'},{title:'Note 2',body:'Second Note'},{title:'Note 3',body:'Third Note'}]

console.log(notes2);

// findindex() - The findIndex() method returns the index of the first element in the array that satisfies the provided testing function. Otherwise, it returns -1, indicating that no element passed the test.

// notes.findIndex(function(note,index){
//     console.log(note)
// })

// find() - The find() method returns the first element in the provided array that satisfies the provided testing function. If no values satisfy the testing function, undefined is returned.

/*

const array1 = [5, 12, 8, 130, 44];

const found = array1.find(element => element > 10);

console.log(found);
// expected output: 12


*/

// filter() - The filter() method creates a new array with all elements that pass the test implemented by the provided function.

const findNotes = function(notes2, query) {
    // filter returns as a new array

return notes2.filter(function (note,index){
    // Check if title is a match in filter search
    const isTitleMatch = note.title.includes(query.toLowerCase())
    // Check if body is a match in the filter search
    const isBodyMatch = note.body.includes(query.toLowerCase())
    // return a boolean
    return isTitleMatch

    // isBodyMatch doesnt seem to work

})
}


console.log(findNotes(notes2, '1'));