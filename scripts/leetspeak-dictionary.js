const text = `you wish you were batman`;

// "object" in JavaScript
// is basically a "dictionary" in Python.

// You shall not use hipster strings
// as keys!
// They are totally fine as values.
const lettersToNumbers = {
    'A': '4',
    'E': '3',
    'G': '6',
    'I': '1',
    'O': '0',
    'S': '5',
    'T': '7',
    // 'test': `I am a hipster string`
};

// And also totally good as array items.
// const lettersToConvert = [`A`, `E`, `G`, `I`, `O`, `S`, `T`];
const textToTranslate = text.toUpperCase();
let translation = ``;


// Let's loop through the string to translate
for (let letter of textToTranslate) {    
    // If the letter is a key in our "dictionary"
    const replacement = lettersToNumbers[letter];

    // and its value is not "falsey": false, null, undefined, 0, '', NaN
    if (replacement) {
        console.log(`${letter} is ${replacement}`);
        translation = translation + replacement;
    } else {
        console.log(`${letter} stays the same`);
        translation = translation + letter;
    }

    // use the translation.
    // Otherwise, just use the original letter.
    
}

console.log(translation);
