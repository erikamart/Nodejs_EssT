// This is a copy of the file created in the previous exercise that will be used for the questions.js file. Go to that file for instructions.

const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("How do you like Node?", answer => {
    console.log(`Your answer: ${answer}`);
});