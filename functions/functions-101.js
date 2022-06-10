// function consists of the following - arguments, code, return value
// Same function can be run multiple times
// return is a reserved keyword that can be used only a single time in the function

// Defining the function

let greetUser = function()
{
    console.log("Welcome User")
}

// Calling the function

// greetUser()

// Square of number

let square = function square(num)
{
    let result = num*num
    return result
    console.log('The square root of '+num+ ' is '+result)
}

square(3)

// Challenge

// Create a function to calculate student score

// Calculate Student Score


// Percent =  Student Score / Max Score * 100

// pass in arguments

let calcPercent = function calcPercent(studentScore,maxScore)
{
    let percent = studentScore / maxScore * 100
    return percent
    
}

// return result in a variable

let res = calcPercent(75,100)

console.log('The student has scored '+res+'%' )

// Convert Farenhiet to Celcius

let convFarenToCelc = function convFarenToCelc(farenhiet)
{
    // The Temperature in Degree Celcius is Temperature in Degree Farenhiet minus 32, times 5/9

    let celcius = (farenhiet - 32) * 5/9
    return celcius

}

let TempCelcius = convFarenToCelc(256)

console.log(TempCelcius+' degrees Celcius')

// Convert to Kelvin

// The temperature in Kelvin can be calculated by Subtract 32 from the Fahrenheit temperature.
// Add 459.67 to this number.
// Multiply this number by 5.
// Divide this number by 9.

let FarenToKelvin = function FarenToKelvin(farenhiet)
{
    let kelvin = (farenhiet + 459.67) *5/9
    return kelvin
} 

let TempKelvin = FarenToKelvin(4000)

console.log(TempKelvin + ' degrees Kelvin')





// console.log('The temperature '+ farenhiet + ' degrees Farenhiet is ' + celcius + ' degrees Celcius and ' + kelvin + ' degrees Kelvin');

// Multiple Arguments and Argument defaults

// Creating a function that takes in multiple arguments

let add = function(a, b)
{
    let c = a+b
    return c
}

let result = add(10, 1)

console.log(result)

// Default Values

let getScore = function(PlayerName = 'Player 1', PlayerScore = 0){
    let ScoreResult =  console.log('Player Name: '+PlayerName+'\nPlayer Score: '+PlayerScore)
    return ScoreResult
}
getScore()

// In case you want to provide value for only select variables, set the value of the unused variable to undefined

getScore(undefined, 100)

// Challenege - Tip Calculator
// TotalBill,TipPercent

let TipCalculator = function(TotalBill, TipPercent = 0.5)
{
    let tipper = TipPercent *100
    let tipCalc = TotalBill * TipPercent
    return `A ${tipper}% tip on $${TotalBill} would be $${tipCalc}`
}

let TotalTip = TipCalculator(1000, 0.2)
console.log('Total tip Calculated: '+TotalTip)

// Challenge - Use Template literals to print message
// A {TipPercent} tip on {TotalBill} would be {Tip}



// Function Scope

// Global Scope -> conFarToCel(), TempCelc
    // local Scope -> celc, faren

// Convert Farenhiet to Celcius

let conFarToCel = function conFarToCel(faren)
{
    // The Temperature in Degree Celcius is Temperature in Degree Farenhiet minus 32, times 5/9

    let celc = (faren - 32) * 5/9
    return celc

}

let TempCelc = conFarToCel(256)

//console.log(TempCelc+' degrees Celcius')
