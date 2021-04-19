// To create the module for collectAnswers the questions file was altered and resaved with the following code below. Notice that the questions are not here but in the questions.js file. the const collectAnswers() function declaration originally made on line 9 is renamed with module.exports to export the function as a module. The last part of the code that actually uses the file with the collectAnswers() function is removed and put in the questions.js file. The end result here is a reusable collectAsnwers() function  as it's own module. After insepcting the below code, go back to the questions.js file to continue.

const readline = require("readline");
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

module.exports = (questions, done) => {
    const answers = [];
    const [fistQuestion] = questions;

    const questionAnswered = answer => {
        answers.push(answer);
        if (answers.length < questions.length) {
            rl.question(questions[answers.length], questionAnswered);
        } else {
            done(answers);
        }
    };

    rl.question(fistQuestion, questionAnswered);
};

// Part 2 of this lesson is altering the done callback to be lines 23-31 of the questions.js file to make it optional for users. Comment out the code block above and uncomment lines 27-47 below. Refering to line 33, you create a default function by setting "done = f => f". That is a default dummy function that won't break the code because f => f doesn't do anything and just returns the arugments that are sent to it. This makes that 2nd argument optional, meaning that the collectAnswers() function from the questions.js file on lines 23-31 still works without the callback now. Test it. The result should be a working module just as before, however, now it does not exit on it's own. To bring back that functionality, it is best to keep the "answers => {}" callback function in the collectAnswers() function so that exiting the application can exist. So make sure to go back to the questions.js file and comment out the last block of code while uncommenting the 1st block to have a fully functional module.

// const readline = require("readline");
// const rl = readline.createInterface({
//     input: process.stdin,
//     output: process.stdout
// });

// module.exports = (questions, done = f => f) => {
//     const answers = [];
//     const [fistQuestion] = questions;

//     const questionAnswered = answer => {
//         answers.push(answer);
//         if (answers.length < questions.length) {
//             rl.question(questions[answers.length], questionAnswered);
//         } else {
//             done(answers);
//         }
//     };

//     rl.question(fistQuestion, questionAnswered);
// };