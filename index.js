
let geoGrades = [];
    amerHist = [];
    ancHist = [];
    bio = [];
    german = [];
    latin = [];
    literature = [];
    logic = [];
    philosophy = [];

// let sum = 0;

// let avg = document.getElementById('geo_grade');

//Collect  Values From Text Boxes

// let assignmentValue = document.querySelector('#assign').value;
// let gradeValue = document.querySelector('#grade').valueAsNumber;
// let subjectsValue = document.querySelector('#subjects').value;

// console.log(assignmentValue);
// console.log(gradeValue);
// console.log(subjectsValue);

// Storing Grades
let algebraDict = {};
let germanDict = {};

// add grades to grade arrays
function addGrades() {

    // use values to determine if field comopleted

    let gradeValue = document.querySelector('#grade').valueAsNumber;
    let subjectValue = document.querySelector('#subjects').value;
    let assignmentValue = document.querySelector('#assign').value;

    if (!gradeValue || subjectValue === ' ' || assignmentValue === '') {
        alert('Please Complete All Fields');

    } else if (subjectValue === 'Geometry') {

        geoGrades.push(gradeValue);
        alert('Grade Submitted');

    }  else if (subjectValue === 'American History') {
        
        amerHist.push(gradeValue);
        // console.log(amerHist);
        alert('Grade Submitted');

    }   else if (subjectValue === 'Ancient History ') {
        
        ancHist.push(gradeValue);
        // console.log(amerHist);
        alert('Grade Submitted');

    }   else if (subjectValue === 'Biology') {
        
        bio.push(gradeValue);
        alert('Grade Submitted');

    }   else if (subjectValue === 'German') {
        
        german.push(gradeValue);
        // console.log(amerHist);
        alert('Grade Submitted');

    }   else if (subjectValue === 'Latin') {
        
        latin.push(gradeValue);
        // console.log(amerHist);
        alert('Grade Submitted');

    }   else if (subjectValue === 'Literature') {
        
        literature.push(gradeValue);
        // console.log(amerHist);
        alert('Grade Submitted');

    }   else if (subjectValue === 'Logic & Rhetoric') {
        
        logic.push(gradeValue);
        console.log(logic);
        alert('Grade Submitted');

    }   else if (subjectValue === 'Philosophy & Politics') {
        
        philosophy.push(gradeValue);
        console.log(philosphy);
        alert('Grade Submitted');
    }
}
//Average Grade Caluculations

avgFunction();

function avgFunction() {

    // Geometry
    document.getElementById('eventClick').addEventListener('click', function () {
        let avg = document.getElementById('geo_grade');

        
        let sum = geoGrades.reduce((accumulator, currentValue) => {
            return accumulator + currentValue;
        }, 0);

        avg.textContent = Math.round(sum / geoGrades.length);
    });

    // German
    document.getElementById('eventClick').addEventListener('click', function () {
        let germAvg = document.getElementById('germ_grade');

        let sum = german.reduce((accumulator, currentValue) => {
            return accumulator + currentValue;
        }, 0);

        germAvg.textContent = Math.round(sum / german.length);
    });

    // American History
    document.getElementById('eventClick').addEventListener('click', function () {
        let amhistAvg = document.getElementById('ahist_grade');

        let sum = amerHist.reduce((accumulator, currentValue) => {
            return accumulator + currentValue;
        }, 0);

        amhistAvg.textContent = Math.round(sum / amerHist.length);
    });

    // Ancient History
    document.getElementById('eventClick').addEventListener('click', function () {
        let ancHAvg = document.getElementById('anchist_grade');

        let sum = ancHist.reduce((accumulator, currentValue) => {
            return accumulator + currentValue;
        }, 0);

        ancHAvg.textContent = Math.round(sum / ancHist.length);
    });

    // Biology
    document.getElementById('eventClick').addEventListener('click', function () {
        let bioAvg = document.getElementById('bio_grade');

        let sum = bio.reduce((accumulator, currentValue) => {
            return accumulator + currentValue;
        }, 0);

        bioAvg.textContent = Math.round(sum / bio.length);
    });

    // Latin
    document.getElementById('eventClick').addEventListener('click', function () {
        let latAvg = document.getElementById('lat_grade');

        let sum = latin.reduce((accumulator, currentValue) => {
            return accumulator + currentValue;
        }, 0);

        latAvg.textContent = Math.round(sum / latin.length);
    });

    // Literature
    document.getElementById('eventClick').addEventListener('click', function () {
        let litAvg = document.getElementById('lit_grade');

        let sum = literature.reduce((accumulator, currentValue) => {
            return accumulator + currentValue;
        }, 0);

        litAvg.textContent = Math.round(sum / literature.length);
    });

    // Logic
    document.getElementById('eventClick').addEventListener('click', function () {
        let logAvg = document.getElementById('log_grade');

        let sum = logic.reduce((accumulator, currentValue) => {
            return accumulator + currentValue;
        }, 0);

        logAvg.textContent = Math.round(sum / logic.length);
    });

    // Philosophy
    document.getElementById('eventClick').addEventListener('click', function () {
        let philAvg = document.getElementById('philpol_grade');

        let sum = philosophy.reduce((accumulator, currentValue) => {
            return accumulator + currentValue;
        }, 0);

        philAvg.textContent = Math.round(sum / philosophy.length);
    });

}

