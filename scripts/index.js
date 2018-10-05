// debugger;

// console.log(`is this thing on?`);
// need variables for 
// - the user's answer
let whatUserSaid = `yes`;
// - how many coins they have
let numberOfCoins = 0;

// we need a loop
// it needs to run at least once
while (whatUserSaid === `yes`) {
    // inside the loop:
    // - ask them if they want another coin
    whatUserSaid = prompt(`Hey, want another?`);
    
    if (whatUserSaid === `yes`) {
        // - if so, increment the count
        numberOfCoins++;
    }
    // - print the number of coinse
    console.log(`You have ${numberOfCoins} coins`);
}
// after the loop (meaning, they said that they didn't want any more coins)
// just say "bye, felicia"
console.log(`Bye Felicia`);