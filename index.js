
let geoGrades = [];

let sum = 0;

let avg = document.getElementById('geo_grade');

//Collect  Values From Text Boxes

let assignmentValue = document.querySelector('#assign').value;
// let gradeValue = document.querySelector('#grade').valueAsNumber;
let subjectsValue = document.querySelector('#subjects').value;

// console.log(assignmentValue);
// console.log(gradeValue);
// console.log(subjectsValue);

// Storing Grades
let algebraDict = {};
let germanDict = {};

// add grades to grade arrays
function addGrades() {
    let gradeValue = document.querySelector('#grade').valueAsNumber;

    if (!gradeValue) {
        alert('Please enter a grade');
    } else {
        geoGrades.push(gradeValue);
        console.log(geoGrades);
        alert('Grade Submitted');
    }
}
//Average Grade Caluculations

document.getElementById('eventClick').addEventListener('click', function ()  {
    let avg = document.getElementById('geo_grade');

    let sum = geoGrades.reduce((accumulator, currentValue) => {
        return accumulator + currentValue; 
    }, 0);
    
    avg.textContent = Math.round(sum/geoGrades.length);
});


// function avgGrade() {
//     // preventDefault();
    
//     return false;
// }


//  function test() {
//      console.log('this is a test');
    
//  }