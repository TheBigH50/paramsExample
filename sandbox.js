// Declare the variables
let myExample = "Valuable";
let somethingElse = "Gold Bars";
let combination = "";

// Write the function
function teachingPeople(paramOne, param2) {
  // Assigning a new value to combination with the 2 parameter values (passing variable values as arguments)
  combination = paramOne + " " + param2;
  // Log with 2 parameters and the new value
  console.log(
    `Inside the function, paramOne: ${paramOne} + param2: ${param2} = combination: ${combination}`
  );
  // Logs ==> Inside the function, paramOne: Valuable + param2: Gold Bars = combination: Valuable Gold Bars
}

//Call the function
teachingPeople(myExample, somethingElse);

console.log(
  `These variables all exist outside the function, myExample: ${myExample} + somethingElse: ${somethingElse} = combination: ${combination}`
);
// Logs ==> These variables all exist outside the function, myExample: Valuable + somethingElse: Gold Bars = combination: Valuable Gold Bars
console.log(
  `These variables no longer exist after the function, paramOne: ${paramOne} + param2: ${param2} = combination: ${combination}`
);
// Logs ==> ERROR! Uncaught ReferenceError: paramOne is not defined