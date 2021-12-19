
let geoGrades = [78];


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

function averageGrade()  {
    let avg = document.getElementById('geo_grade');

    for (let i = 0; i < geoGrades.length; i++) {
     
    sum += geoGrades[i]/geoGrades.length;
    avg.textContent = Math.round(sum);
   
    }
}


// function avgGrade() {
//     // preventDefault();
    
//     return false;
// }


//  function test() {
//      console.log('this is a test');
    
//  }