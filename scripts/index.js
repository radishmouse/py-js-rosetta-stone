// Configuration ===================================
const LEVEL_GOOD = `good`;
const LEVEL_FAIR = `fair`;
const LEVEL_BAD = `bad`;

const TIP_GOOD = 0.2;
const TIP_FAIR = 0.15;
const TIP_BAD = 0.1;


// Processing ===================================

// start with const until something breaks
const totalBill = 100;
const levelOfService = `good`;

// If you leave off const or let or var
// you end up with a var.
let tip = 0.0;

if (levelOfService === LEVEL_GOOD) {
    tip = totalBill * TIP_GOOD;
} else if (levelOfService === LEVEL_FAIR) {
    tip = totalBill * TIP_FAIR;   
} else if (levelOfService === LEVEL_BAD) {
    tip = totalBill * TIP_BAD;
} else {
    console.log(`Invalid. They can't be that bad.`)
}

// Result ===================================
console.log(`Tip amount: ${tip}`);
console.log(`Total amount: ${totalBill + tip}`);