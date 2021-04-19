// IMPROVE A MODULE WITH EVENT EMITTER

// Here, we changed lines 15 and added 17-19. So whenever there's an answerEvent, it will add the question answered to the console. This just repeats all of the answers back as they occur to the user using the EventEmitter.

// The code is improved by adding a "complete" event on line 21. You take the callback function in the 2nd argument from line 15 and use it as the 2nd argument on line 21; then move the process.exit to another event on line 26. This shows you can wire up as many of these as you like. Notice there are 2 listeners for the complete event. Now when the process is finished, it's going to say thank you for your answer and log the answers and also will exit the process.

const collectAnswers = require("./lib/collectAnswers");

const questions = [
    "What is your name? ",
    "Where do you live? ",
    "What are you going to do with node js? "
];

const answerEvents = collectAnswers(questions);

answerEvents.on("answer", answer =>
    console.log(`question answered: ${answer}`)
);

answerEvents.on("complete", answers => {
    console.log("Thank you for your answers. ");
    console.log(answers);
});

answerEvents.on("complete", () => process.exit());

// In summary, you can see that questions answered, thank you for your answers, and the process has exited. This improved the collectAnswers function by giving the consumers more options. You can wire up as many listeners as you want to handle all sorts of events as the user is answering questions. 