// Yep. It's JavaScript
// console.log('Hello JavaScript, what is up? I am fine');

// hello.py
// Getting input
// It's lame.

// using var
// and camelCase
// var promptText = 'What is your name? ';
// var userName = prompt(promptText);

// // uses string concatenation
// var greeting = 'Hello, ' + userName + '!';
// console.log(greeting);

// ====== now, using SEXY syntax
// using let and const
// Rule of thumb: use const until you get an error
// const PROMPT_TEXT = 'What is your name?';
// let userName = prompt(PROMPT_TEXT);
let userName = 'chrisaquino';
// String interpolation, a.k.a. "template literals"
// 1. Replace quotes with backticks
// 2. Remove the + signs
// 3. Wrap your variables in ${}
userName = `${userName} is a bozo`;
const greeting = `Hello, ${userName}!`;
console.log(greeting);
