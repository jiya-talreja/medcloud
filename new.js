let marks = [];
for (let i = 0; i < 5; i++)
{
    let mark = Number(prompt("Enter marks for subject " + (i + 1) + ":"));
    marks.push(mark);
}

let total = 0;
for (let i = 0; i < marks.length; i++) {
    total += marks[i];
}
let percentage = total / 5;
function getGrade(percentage) 
{
    if (percentage >= 90) 
    {
        return "Grade A";
    } 
    else if (percentage >= 75)
    {
        return "Grade B";
    } 
    else if (percentage >= 50) 
    {
        return "Grade C";
    } 
    else 
    {
        return "Fail";
    }
}
let grade = getGrade(percentage);
alert("Total Marks: " + total +
      "\nPercentage: " + percentage.toFixed(2) + "%" +
      "\nGrade: " + grade);
