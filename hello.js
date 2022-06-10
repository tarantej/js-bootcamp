let city = 'Auckland'
let country = 'New Zealand'

location = city + ", " + country

console.log(location)

// Numbers

let num = 5.5

console.log(num);

// Take age in a variable, add 1 and divide by 7. Add parentesis () to override default MDAS maths rule
age = 32
newAge = (age + 1) / 7
console.log(newAge)

// Calculate Student Score

let studentScore = 80
let maxScore = 100
let percent = 80/100 * 100

console.log(percent);

// Reassigning a value to a variable

let petName = 'Hal';

// We cant use let petName again but we can reassign its value

petName = 'Spock';

console.log(petName);

// javaScript name cannot begin with any non-string character other than $ or _

// Variable names cannot be reserved keywords

// Convert a temperature in Farenhiet to Celcius

let farenhiet = 32

// The Temperature in Degree Celcius is Temperature in Degree Farenhiet minus 32, times 5/9

let celcius = (farenhiet - 32) * 5/9

// The temperature in Kelvin can be calculated by Subtract 32 from the Fahrenheit temperature.
// Add 459.67 to this number.
// Multiply this number by 5.
// Divide this number by 9.


let kelvin = (farenhiet + 459.67) *5/9

console.log('The temperature '+ farenhiet + ' degrees Farenhiet is ' + celcius + ' degrees Celcius and ' + kelvin + ' degrees Kelvin');

// Booleans and Comparison Operators

// === is the equality operator
// !== Not Equal to
// < Less Than
// > Greater Than
// <= Less Than Equal To
// >= Greater Than Equal To

// Age range challenge

// create an age variable set to your age
// Calculate is child - if they are 7 and under
// Calculate is senior - if they are 65 and over
// Print is child and is senior

let myAge = 32;
let is_child = myAge <= 7;
let is_senior = myAge >= 65;
let is_young_adult = myAge === 32

console.log('My age is ' +myAge);

console.log('Am I a child?:' +is_child);
console.log('Am I a senior?: ' +is_senior);
console.log('Am I a Young Adult?: ' +is_young_adult);

// If conditional statements

let temp = 32
let isFreezing = temp <=32

// Flow control - Controlling the flow of the program with conditional code blocks


// Challenge 

// If 7 or under print message about child pricing

// if 65 or older print message about senior pricing

let seniorAge = 7

if(seniorAge <= 7)
{
    console.log('Child Discount Price');
}

if(seniorAge >= 65)
{
    console.log('Senior Discount Price');
}

// Logican AND (&&) and OR (||)

// Scope of a Variable - Defines where it is accessible in the program based off where it was created
//  JavaScript uses Lexical (Static) Scoping. Variable defined in one part of the program might not be accessible in another part of the program

// Types of Scope - Global Scope and Local Scope
// Global scope - contains all the things defined outside of the code block
// Local scope - defined inside a code block

// Scope Hierarchy

// You can access variables defined in the scope or in any parent scope

// Global Scope(varOne) - Parent Scope
    // Local Scope(varTwo) - Child Scope
        // Local Scope(varFour) - Nested Child Scope
    // Local Scope(varThree) - Sibling scope of varTwo

let varOne = 'varOne' // Variable is predefined

if(true)
{
    console.log(varOne);    // Returns the output string  'varOne'
    let varTwo = 'varTwo'
    console.log(varTwo);    // This one witll work

    if(true)
    {
        let varFour = 'varFour';
    }
}

if(true)
{
    let varThree = 'varThree'
}

// console.log(varTwo); // Will throw errors since variable is not defined in the scope

// Scope shadowing - Variable in local scope uses its vale in a parent scope
// You can define same variable names in the program as long as they are in different scopes
// if no variables are defined in the program, it automatically creates a  new gloobal variable
// leaked global - when there is no variable in the local or parent scop, the value gets assigned to a global variable
// in order to avoid it, just declare avariable




// Global Scope(name) - Parent Scope
    // Local Scope(name) - Child Scope
        // Local Scope - Nested Child Scope
    // Local Scope - Sibling scope of varTwo

let name = 'Andrew'

if(true)
{
    let name = 'Mike'
    
    if(true)
    {
        console.log(name)
    }
}

if(true)
{
    console.log(name)
}

// Template Literals - Use backticks (``) to include strings and variables inside the quotes
// Put variable name to include as ${varible}

console.log(`Hello, my name is ${name}`)