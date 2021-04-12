const readline = require("readline");
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

module.exports = (questions, done = f => f) => {
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

// By altering "done = f => f" on line 7 here, we've made that second argument optional, meaning that our collectAnswers function still works without the callback. Without this, and also omitting the answers function on Line 9 of the questions.js file, an error will occur.