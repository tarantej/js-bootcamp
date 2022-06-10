// Objects allow us to store pieces of information in a single value
// Objects have properties that are pieces of data
// Object Syntax

let myBook = {
    title: '1984',
    author: 'George Orwell',
    pageCount: 326
}

// Print entire object

console.log(myBook)

// Print selective object properties

console.log(`The book ${myBook.title} is written by ${myBook.author}`)

// Change property value

myBook.title = 'Animal Farm'

console.log(`The book ${myBook.title} is written by ${myBook.author}`)

// Challenge - Create model for a person

// Name, Age, Location

// Generate a string from the property values

// Increase the age by 1

let person = {Name:'Taran', Age:32, Gender:'M', Location:'Auckland, New Zealand'}

person.Age = person.Age + 1

console.log(`${person.Name}, (${person.Age} ${person.Gender}) lives in ${person.Location}`)