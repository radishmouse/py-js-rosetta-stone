// Arrays (a.k.a. "lists")
// Objects (a.k.a. "dictionaries")
// _custom_ Functions
// (Classes optional)

// for (let i = 0; i<10; i++) {
//     console.log('woof');
// }

const whoami = `i'm batman`;

// In python, this would be: whoami[0:1]
const first = whoami.slice(0, 1).toUpperCase();

// In python, this would be: whoami[1:]
const rest = whoami.slice(1);

console.log(first + rest);

console.log(`The length of the string is ${whoami.length}`);