// Object Functions

let myBook = {
    title: '1984',
    author: 'George Orwell',
    pageCount: 326
}

let myBook2 = {
    title: 'A Peoples History',
    author: 'Howard Zinn',
    pageCount: 723
}

// Get multiple books in one object

let getBooks = function(book){
    console.log(`The book ${book.title} is written by ${book.author}`)
}
getBooks(myBook)
getBooks(myBook2)

// Return object from a function

let getSummary = function(book){
    return{
        summary:`The book ${book.title} is written by ${book.author}`,
        pageCount:`The book ${book.title} is ${book.pageCount} pages long`
    }
}

let bookSummary = getSummary(myBook)
let book2Summary = getSummary(myBook2)

console.log(bookSummary.pageCount)
console.log(book2Summary.pageCount)

// Challenge - Temperature function that takes in Celcius and convert to farenhiet and kelvin using Object Function

// Convert Celcius to Farenhiet and Kelvin

//     The Temperature in Degree Farenhiet is Temperature in Degree Celcius times 5/9 plus 32 

//     let farenhiet = Celcius * 5/9 + 32
//     return farenhiet

//     The Temperature in Degree Kelvin is Temperature in Degree Celcius plus 273.15 

//     let kelvin = Celcius + 273.15
//     return kelvin

let temp = {
    Celcius:0,
    Farenhiet:32,
    Kelvin:273.15
}
console.log(temp)

let TempConv = function(temperature){
    return{
        CelcToFaren: temperature * 5/9 + 32,
        FarenToCelc: temperature * 5/9 - 32,
        CelcToKelvin: temperature + 273.15
    }

}

let TempCelcResult = TempConv(32)
let TempFarenResult = TempConv(32)
let TempKelvinResult = TempConv(32)
console.log(`32 degrees Celcius in Farenhiet is ${TempFarenResult.CelcToFaren}`)
console.log(`32 degrees Farenhiet in Celcius is ${TempCelcResult.FarenToCelc}`)
console.log(`32 degrees Celcius in Kelvin is ${TempKelvinResult.CelcToKelvin}`)


// let convCelcToFaren = function convCelcToFaren(celcius)
// {
//     // The Temperature in Degree Farenhiet is Temperature in Degree Celcius times 5/9 plus 32 

//     let farenhiet = Celcius * 5/9 + 32
//     return farenhiet

// }

// let TempCelcius = convCelcToFaren(256)

// console.log(TempCelcius+' degrees Farenhiet')

// let convCelcToKelvin = function convCelcToKelvin(celcius)
// {
//     The Temperature in Degree Kelvin is Temperature in Degree Celcius plus 273.15 

//     let kelvin = Celcius + 273.15
//     return kelvin

// }

// let TempCelcius = convCelcToKelvin(256)

// console.log(TempCelcius+' degrees Kelvin')


// Convert Farenhiet to Celcius

// let convFarenToCelc = function convFarenToCelc(farenhiet)
// {
//     // The Temperature in Degree Celcius is Temperature in Degree Farenhiet times 5/9 minus 32

//     let celcius = farenhiet * 5/9 - 32
//     return celcius

// }

// let TempCelcius = convFarenToCelc(256)

// console.log(TempCelcius+' degrees Celcius')

// // Convert to Kelvin

// // The temperature in Kelvin can be calculated by Subtract 32 from the Fahrenheit temperature.
// // Add 459.67 to this number.
// // Multiply this number by 5.
// // Divide this number by 9.

// let FarenToKelvin = function FarenToKelvin(farenhiet)
// {
//     let kelvin = (farenhiet + 459.67) *5/9
//     return kelvin
// } 

// let TempKelvin = FarenToKelvin(4000)

// console.log(TempKelvin + ' degrees Kelvin')

