// Undefined and Null

// undefined - implicit language default value
// null - expelicitly defined empty value 

// Undefined variable

let studname

// Condition to check if name is undefined

if(studname===undefined)
{
    console.log('Please define a name')
}
else
{
    console.log(studname)
}

// Undefined function arguments

let square = function square(num)
{
    console.log(num)
}

square()

// Null

let age = 27

age = null

console.log(age)
