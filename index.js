
let algGrades = [89, 56, 97, 90, 100];

let sum = 0;

let avg = document.getElementById('alg_grade');


// console.log(sum);
// function avgGrade() {
 for (let i = 0; i < algGrades.length; i++) {
    sum += algGrades[i]/algGrades.length;
    avg.textContent = sum;
//    console.log('sum is ' + sum);
    }

 function test() {
     console.log('this is a test');
 }