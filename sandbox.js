let myExample = "Valuable";
let somethingElse = "Gold Bars";

function teachingPeople(paramOne, param2) {
let combination = paramOne + param2;
console.log(`Inside the function, ${paramOne} + ${param2} = ${combination}`);
return combination;
}
//Call the function
teachingPeople(myExample, somethingElse);

console.log(`These variables no longer exist after the function, ${paramOne} + ${param2} = ${combination}`);
console.log(`These variables all exist outside the function, ${myExample} + ${somethingElse} = ${combination}`);