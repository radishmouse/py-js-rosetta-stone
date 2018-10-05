
// Start with a hard-coded value
// until you know your program works.
// Then switch to prompting the user.

// let theDay = prompt("Day (0-6)?");
let theDay = 5;

// To convert from a string to a number,
// use parseInt and provide base 10 as an argument
theDay = parseInt(theDay);

// const theDay = 6;
let dayName =`Invalid choice, buddy.`;

// You must use parentheses for your condition!!!
// "Loose" equality is ==
// "Strict" equality is ===
// By default, use strict equality, ===
// "threequals"
if (theDay === 0) { // And curly braces!
    // You can leave off the curly braces,
    // but your "body" can only have one statement.
    // Any statement after the first will get run
    // regardless of whether the condition is true or 
    // not

    dayName = `Sunday`;
} else if (theDay === 1) {
    dayName = `Monday`;
} else if (theDay === 2) {
    dayName = `Tuesday`;
} else if (theDay === 3) {
    dayName = `Wednesday`;
} else if (theDay === 4) {
    dayName = `Thursday`;
} else if (theDay === 5) {
    dayName = `Friday`;
} else if (theDay === 6) {
    dayName = `Saturday`;
}

// The body of an if statement
// is surrounded by curly braces.
// And does not require a semi-colon after the curly braces.

console.log(dayName);
