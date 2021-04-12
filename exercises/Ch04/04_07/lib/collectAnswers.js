const readline = require("readline");
const { EventEmitter } = require("events");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

module.exports = (questions, done = f => f) => {
    const answers = [];
    const [fistQuestion] = questions;
    const emitter = new EventEmitter();
    const questionAnswered = answer => {
        emitter.emit("answer", answer);
        answers.push(answer);
        if (answers.length < questions.length) {
            rl.question(questions[answers.length], questionAnswered);
        } else {
            emitter.emit("complete", answers);
            done(answers);
        }
    };

    rl.question(fistQuestion, questionAnswered);

    return emitter;
};

// Here, every time the user answers a question or we say done and use the callback, we're raising an event.