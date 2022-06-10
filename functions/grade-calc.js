// Create a student grade calculator using functions
// Function takes in two arguments - student score, total score
// Using the result calculate a grade and percentage
// A 90-100, B 70-80, C 60-70, D 50-60 , F <50

let student_score = 0
let grade_score = 0

let grade_calc = function(student_score, grade_score)
{
    let score_result = student_score / grade_score *100
    return score_result
}

let final_score = grade_calc(55,100)
let final_grade = ''

if(final_score >= 90 && final_score <= 100)
{
    final_grade = 'A'
    console.log(`The student has scored grade ${final_grade} with ${final_score}%`)
}
else if(final_score >= 70 && final_score <= 80)
{
    final_grade = 'B'
    console.log(`The student has scored grade ${final_grade} with ${final_score}%`)
}
else if(final_score >= 60 && final_score <= 70)
{
    final_grade = 'C'
    console.log(`The student has scored grade ${final_grade} with ${final_score}%`)
}

else if(final_score >= 50 && final_score <= 60)
{
    final_grade = 'D'
    console.log(`The student has scored grade ${final_grade} with ${final_score}%`)
}
else
{
    console.log(`The student failed with ${final_score}%`)
}